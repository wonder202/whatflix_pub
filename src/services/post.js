import {
  addDoc,
  collection,
  doc,
  setDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  getDoc,
  updateDoc,
  deleteDoc,
  startAfter,
  limit,
  increment,
} from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import { getUserById } from './user';

// 게시글 작성
export async function createPost(data) {
  const docRef = await addDoc(collection(db, 'posts'), {
    ...data,
    readCount: 0,
    commentCount: 0,
    likeCount: 0,
    bookmarkCount: 0,
    createAt: serverTimestamp(),
  });
  return docRef.id;
}

// 게시글 조회
export async function getPosts(params) {
  // 전체 게시글 조회
  // const querySnapshot = await getDocs(collection(db, 'posts')); // posts의 모든데이터 출력
  // // const posts = [];
  // // querySnapshot.forEach(doc => {
  // //   // forEach구문으로 각각의 데이터를 돌면서 반환
  // //   posts.push(doc.data());
  // // });

  // // or

  // // docs 모든 도큐먼트의 배열
  // const posts = querySnapshot.docs.map(doc => {
  //   const data = doc.data();
  //   return {
  //     ...data,
  //     id: doc.id, // postID
  //     createAt: data.createAt?.toDate(), // 타임스탬프를 보기좋게 변환
  //   };
  // });
  // console.log(params);

  // 카테고리별 게시글 조회
  const conditions = []; // 조회 조건
  if (params?.category) {
    conditions.push(where('category', '==', params?.category));
  }
  // 태그 조회
  if (params?.tags && params?.tags.length > 0) {
    // array-contains-any 배열에서 사용하는 쿼리연산자
    conditions.push(where('tags', 'array-contains-any', params?.tags));
  }
  // 정렬 조회
  if (params?.sort) {
    conditions.push(orderBy(params.sort, 'desc'));
  }
  // 더보기. start쿼리커서(시작점)
  // params 변수에?. start를 추가하면, 실행
  if (params?.start) {
    conditions.push(startAfter(params.start));
  }
  // 더보기. limit함수를 사용해 갯수 설정
  // params 변수에?. limit를 추가하면, 실행
  if (params?.limit) {
    conditions.push(limit(params.limit));
  }
  const q = query(collection(db, 'posts'), ...conditions);
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id, // postID
      createAt: data.createAt?.toDate(), // 타임스탬프를 보기좋게 변환
    };
  });
  const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  return {
    items: posts,
    lastItem: lastDoc,
  };
}

// 게시글 정보 가져오기
export async function getPost(id) {
  const docSnap = await getDoc(doc(db, 'posts', id));

  if (!docSnap.exists()) {
    throw new Error('No such document');
  }
  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    createAt: data.createAt?.toDate(),
  };
}

// 조회수 증가
async function incrementReadCount(id) {
  await updateDoc(doc(db, 'posts', id), {
    readCount: increment(1),
  });
}

// 게시글 상세페이지(조회수 증가 후 게시글 불러오기)
export async function getPostDetails(id) {
  await incrementReadCount(id);
  const post = await getPost(id);
  const postUser = await getUserById(post.uid);
  return {
    post,
    postUser,
  };
}

// 게시글 수정
export async function updatePost(id, data) {
  await updateDoc(doc(db, 'posts', id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

// 게시글 삭제
export async function deletePost(id) {
  await deleteDoc(doc(db, 'posts', id));
}

// 좋아요 등록
export async function addLike(uid, postId) {
  await setDoc(doc(db, 'post_likes', `${uid}_${postId}`), {
    uid,
    postId,
    createAt: serverTimestamp(),
  });
}
// 좋아요 취소
export async function removeLike(uid, postId) {
  await deleteDoc(doc(db, 'post_likes', `${uid}_${postId}`));
}
// 좋아요 조회(표시)
export async function hasLike(uid, postId) {
  const docSnap = await getDoc(doc(db, 'post_likes', `${uid}_${postId}`));
  return docSnap.exists();
}

// 북마크 등록
export async function addBookmark(uid, postId) {
  await setDoc(doc(db, 'users', uid, 'bookmarks', postId), {
    createAt: serverTimestamp(),
  });
}
// 북마크 취소
export async function removeBookmark(uid, postId) {
  await deleteDoc(doc(db, 'users', uid, 'bookmarks', postId));
}
// 북마크 조회(표시)
export async function hasBookmark(uid, postId) {
  const docSnap = await getDoc(doc(db, 'users', uid, 'bookmarks', postId));
  return docSnap.exists();
}
// 프로필 - 북마크 목록
export async function getUserBookmarks(uid) {
  const q = query(
    collection(db, 'users', uid, 'bookmarks'),
    orderBy('createAt', 'desc'),
    limit(5),
  );
  const querySnapshot = await getDocs(q);

  // 게시글 상세페이지 함수를 이용해 정보가져오기
  return Promise.all(
    querySnapshot.docs.map(bookmarkDoc => getPost(bookmarkDoc.id)),
  );
}

// tagcount순위 목록 조회
export async function getTags() {
  const q = query(
    collection(db, 'tags'), // tags컬렉션
    where('count', '>', 0), // 최소 카운트가 1이상
    orderBy('count', 'desc'), // 내림차순
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docu => docu.data()).slice(0, 10);
}
