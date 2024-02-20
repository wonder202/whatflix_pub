import { doc, getDoc } from 'firebase/firestore';
import { db } from 'src/boot/firebase';

// 유저 정보 조회
export async function getUserById(id) {
  const docSnap = await getDoc(doc(db, 'users', id));
  if (docSnap.exists()) {
    const data = docSnap.data();

    return {
      id,
      ...data,
      createAt: data.createAt.toDate(),
    };
  }
  return null;
}
