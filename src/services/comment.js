import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from 'src/boot/firebase';

// 댓글 작성
export async function addComment(postId, data) {
  const docRef = await addDoc(collection(db, 'posts', postId, 'comments'), {
    ...data,
    createAt: serverTimestamp(),
  });
  return docRef.id;
}

// 댓글 조회
export async function getComments(postId) {
  // 쿼리객체 가져오기
  const q = query(
    collection(db, 'posts', postId, 'comments'),
    // 정렬
    orderBy('createAt', 'desc'),
  );
  // querySnapshot : firebase에서 데이터를 가져올때 사용하는 함수
  const querySnapshot = await getDocs(q);
  // docs라는 속성을 사용해 도큐먼트 가져옴
  return querySnapshot.docs.map(docu => {
    const data = docu.data();
    return {
      id: docu.id,
      ...data,
      createAt: data.createAt?.toDate(),
    };
  });
}

// 댓글 삭제
export async function deleteComment(postId, commentId) {
  await deleteDoc(doc(db, 'posts', postId, 'comments', commentId));
}
