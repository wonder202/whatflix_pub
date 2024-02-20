import { addLike, hasLike, removeLike } from 'src/services';
import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';
import { readonly, ref, watch } from 'vue';

export const useLike = (id, options) => {
  const { likey } = options || {};
  const { uid, isAuthentication } = storeToRefs(useAuthStore());
  const isLike = ref(false);
  const likeCount = ref(likey);
  const postId = ref(id);

  // 새로고침 시에도 좋아요 여부표시(로그인o)
  const initLike = async () => {
    if (isAuthentication.value === false) {
      isLike.value = false; // 로그아웃 시 좋아요표시 해제
      return;
    }
    isLike.value = await hasLike(uid.value, postId.value);
  };

  const toggleLike = async () => {
    if (isAuthentication.value === false) {
      alert('로그인 후 이용 가능합니다.');
      return;
    }
    if (isLike.value) {
      await removeLike(uid.value, postId.value);
      likeCount.value--;
    } else {
      await addLike(uid.value, postId.value);
      likeCount.value++;
    }
    isLike.value = !isLike.value; // 리무브하면 다시 false
  };

  // 좋아요 표시 후 로그아웃 했을때 상태변화 감시
  watch(isAuthentication, () => initLike(), {
    immediate: true,
  });
  return {
    isLike,
    likeCount: readonly(likeCount), // 외부 변경 방지
    updateLikeCount: count => (likeCount.value = count),
    toggleLike,
  };
};
