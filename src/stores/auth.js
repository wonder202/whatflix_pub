import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useLocalStorage, StorageSerializers } from '@vueuse/core';

// pinia(상태관리툴)를 사용한 사용자 정보 관리
export const useAuthStore = defineStore('auth', () => {
  // 1-1. const user = ref(null);
  // 1-2. 새로고침 시 null로 다시 세팅 됨. firebase.js ㄱ
  // 6. useLocalStorage(키, 초기값, {옵션}) 사용. 반응형으로 동기화되므로 옵셔닝체이닝을 안써도 됨.
  const user = useLocalStorage('auth/user', null, {
    // StorageSerializers 데이터값을 원하는 형태로 변환해주는 함수.
    // 아래는 object string으로 변환.
    serializer: StorageSerializers.object,
  });
  // user정보 상태를 boolean으로 관리
  const isAuthentication = computed(() => !!user.value);
  const uid = computed(() => user.value?.uid || null);

  const setUser = userData => {
    user.value = userData;
    // user정보가 있다면 특정 정보만 추출
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
      };
      // 없다면 정보 초기화
    } else {
      user.value = null;
    }
  };

  // 현재 로그인한 회원의 글이 맞는지 판단하는 함수
  const hasOwnContent = contentUid => {
    if (!isAuthentication.value) {
      return false;
    }
    return uid.value === contentUid; // 현재 로그인한 아이디와 작성자 아이디가 같은지
  };

  return {
    user,
    uid,
    setUser,
    isAuthentication,
    hasOwnContent,
  };
});
