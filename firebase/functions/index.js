// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const functions = require('firebase-functions');
// const { logger } = require('firebase-functions');
const {
  onDocumentCreated,
  onDocumentDeleted,
  onDocumentUpdated,
} = require('firebase-functions/v2/firestore');

// The Firebase Admin SDK to access Firestore.
const { initializeApp, cert } = require('firebase-admin/app');
const {
  getFirestore,
  FieldValue,
  Timestamp,
} = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');
const { event } = require('firebase-functions/v1/analytics');
const { logger } = functions;

const app = initializeApp({
  // credential : rule 같은 것에 접근 할 수 있는 자격증명
  credential: cert(serviceAccount),
});
const db = getFirestore(app);
// region = 구역
const region = 'us-central1';

// cloud function 트리거 함수란? created, updated, deleted와 같은 기능이 실행될때 함께 트리거 되는 함수를 만들 수 있게 해준다.
// 도큐먼트 생성 시 함수 실행
// Emulator 설치로 간단해진 테스트
// 1. 북마크 수 카운팅(++)
exports.onCreateBookmark = onDocumentCreated(
  {
    region,
    document: 'users/{uid}/bookmarks/{postId}',
  },
  event => {
    const postId = event.params.postId;
    // db.collection('posts').doc(postId) =같음= db.doc(`posts/${postId}`);
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(1),
    });
  },
);

// 1-1. 북마크 수 카운팅(--)
exports.onDeleteBookmark = onDocumentDeleted(
  {
    region,
    document: 'users/{uid}/bookmarks/{postId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(-1),
    });
  },
);

// 2. 댓글 수 카운팅(++)
exports.onCreateComment = onDocumentCreated(
  {
    region,
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(1),
    });
  },
);

// 2-1. 댓글 수 카운팅(--)
exports.onDeleteComment = onDocumentDeleted(
  {
    region,
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(-1),
    });
  },
);

// 3. 좋아요 수 카운팅(++)
exports.onCreateLike = onDocumentCreated(
  {
    region,
    document: 'post_likes/{id}',
  },
  event => {
    const snapshot = event.data;
    const data = snapshot.data();
    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(1),
    });
  },
);

// 3-1. 좋아요 수 카운팅(--)
exports.onDeleteLike = onDocumentDeleted(
  {
    region,
    document: 'post_likes/{id}',
  },
  event => {
    const snapshot = event.data;
    const data = snapshot.data();

    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(-1),
    });
  },
);
// ** 함수 만들고 파이어베이스에 배포 npm run deploy

// 회원가입 후 트리거 될 함수(유저 정보 db 저장)
exports.onCreateUser = functions
  .region(region) // region 메소드를 통해 저장될 지역 설정
  .auth.user()
  .onCreate(user => {
    const isPasswordProvider = user.providerData.some(
      userInfo => userInfo.providerId === 'password',
    ); // 가입방식을 묻는 것. email가입자(providerId가 password)를 걸러냄.
    const defaultPhotoURL = `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${user.uid}`;
    const displayName = isPasswordProvider
      ? user.email.split('@')[0] // ? 이메일가입자
      : user.displayName; // : 구글가입자
    const photoURL = isPasswordProvider ? defaultPhotoURL : user.photoURL;
    db.doc(`users/${user.uid}`).set({
      email: user.email,
      displayName,
      photoURL,
      // 날짜데이터로 변환 후
      createAt: Timestamp.fromDate(new Date(user.metadata.creationTime)),
    });
  });

// 사용자 탈퇴 후 트리거 될 함수(유저 정보 삭제)
exports.onDeleteUser = functions
  .region(region)
  .auth.user()
  .onDelete(user => {
    db.doc(`users/${user.uid}`).delete();
  });

// 4. 게시글 등록 시 태그 카운팅(++)
exports.onCreatePostTag = onDocumentCreated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data(); // 포스트데이터
    // data.tags ['','','']
    if (data.tags) {
      updateTags(data.tags);
    }
  },
);
// 4-1. 게시글 삭제 시 태그 카운팅(--)
exports.onDeletePostTag = onDocumentDeleted(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data();
    if (data.tags) {
      updateTags(data.tags, -1);
    }
  },
);

exports.onUpdatePostTags = onDocumentUpdated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const previousTags = event.data.before.data();
    const newTags = event.data.after.data();

    const tagsToRemove = differenceTags(previousTags.tags, newTags.tags);
    const tagsToAdd = differenceTags(newTags.tags, previousTags.tags);
    if (tagsToRemove) {
      updateTags(tagsToRemove, -1);
    }
    if (tagsToAdd) {
      updateTags(tagsToAdd, 1);
    }
  },
);

// previousTags와 newTags의 차집합 구하기
function differenceTags(arr1, arr2) {
  // 둘 중 하나의 배열이 비었을 경우 if
  if (!arr1 || !arr2) {
    return arr1;
  }
  // arr1의 배열 중 arr2의 배열에 포함(includes)되어있지 않는 값을(false) 걸러(filter) 반환. 즉 교집합을 제회한 배열을 반환.
  return arr1.filter(value => arr2.includes(value) === false);
}

// 태그용 함수 따로 빼기
function updateTags(tags = [], incrementValue = 1) {
  tags?.forEach(tag => {
    db.doc(`tags/${tag.toLowerCase()}`).set(
      // toLowerCase 대소문자 관계없이 소문자로 저장
      { name: tag.toLowerCase(), count: FieldValue.increment(incrementValue) },
      { merge: true }, // merge 합치다
    );
  });
}
