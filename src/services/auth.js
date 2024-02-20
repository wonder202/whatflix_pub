import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from 'src/boot/firebase';

const DEFAULT_PHOTO_URL =
  'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=';

// 0. 로그인(구글) - 공식문서 참조하여 메소드 생성. loginform.vue ㄱ
export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  return user;
}

// 로그아웃
export async function logout() {
  await signOut(auth);
}

// 회원가입
export async function joinWithEmail({ email, password }) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, {
    displayName: email.split('@')[0],
    photoURL: generateDefaultPhotoURL(user.uid),
  });
  sendVerificationEmail();
}

// 로그인(이메일)
export async function loginWithEmail({ email, password }) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

// 비밀번호 찾기(가입한 이메일로 변경 링크 보내기)
export async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

// 비밀번호 변경(마이페이지)
export async function updateUserPassword(newPassword) {
  await updatePassword(auth.currentUser, newPassword);
}

// 사용자 이메일 인증 메일 보내기
export async function sendVerificationEmail() {
  await sendEmailVerification(auth.currentUser);
}

// 사용자 프로필 업데이트
export async function updateUserProfile(displayName) {
  await updateProfile(auth.currentUser, {
    displayName,
  });
  await updateDoc(doc(db, 'users', auth.currentUser.uid), { displayName });
}

// 사용자 이메일 업데이트
export async function updateUserEmail(email) {
  await updateEmail(auth.currentUser, email);
}

// 회원가입 후 로딩되는 동안 디폴트이미지 설정
export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`;
}
