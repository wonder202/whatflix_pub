import { boot } from 'quasar/wrappers';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from 'src/stores/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIG5B0',
  authDomain: 'wonder202-vue3-firebase-app.firebaseapp.com',
  projectId: 'wonder202-vue3-firebase-app',
  storageBucket: 'wonder202-vue3-firebase-app.appspot.com',
  messagingSenderId: '567891399603',
  appId: '1:567891399603:web:242b6da7ddc042c06031c6',
  measurementId: 'G-V7G3M4068M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// 인스턴스 생성
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

// 사용자 정보 호출
export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();
  // 로그인이나 로그아웃 시 실행되는 메소드
  // 2. stores/auth.js -> 해당 공백에 아래의 메소드로 사용자 정보를 다시 세팅 시킴.
  // 3. 그러나 문제는 다시 로딩되는 동안 아주 잠깐 null 상태가 노출되므로 ux에 문제가 생김.
  // 4. 이를 개선하기 위해, 피니아의 유저정보를 로컬스토리지에서 관리하게끔 한다.
  // 5. 방법은 vue use 홈페이지로 가서 useLocalStorage라는 컴포저블 함수를 사용하면 된다. 다시 stores/auth.js
  onAuthStateChanged(auth, user => {
    authStore.setUser(user);
  });
});
