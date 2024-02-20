import { addBookmark, hasBookmark, removeBookmark } from 'src/services';
import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';
import { readonly, ref, watch } from 'vue';

export const useBookmark = (id, options) => {
  const { bookmarking } = options || {};
  const { uid, isAuthentication } = storeToRefs(useAuthStore());
  const isBookmark = ref(false);
  const bookmarkCount = ref(bookmarking);
  const postId = ref(id);

  // 새로고침 시에도 뷱마크 여부표시(로그인o)
  const initBookmark = async () => {
    if (isAuthentication.value === false) {
      isBookmark.value = false; // 로그아웃 시 북마크표시 해제
      return;
    }
    isBookmark.value = await hasBookmark(uid.value, postId.value);
  };

  const toggleBookmark = async () => {
    if (isAuthentication.value === false) {
      alert('로그인 후 이용 가능합니다.');
      return;
    }
    if (isBookmark.value) {
      await removeBookmark(uid.value, postId.value);
      bookmarkCount.value--;
    } else {
      await addBookmark(uid.value, postId.value);
      bookmarkCount.value++;
    }
    isBookmark.value = !isBookmark.value; // 리무브하면 다시 false
  };

  // 좋아요 표시 후 로그아웃 했을때 상태변화 감시
  watch(isAuthentication, () => initBookmark(), {
    immediate: true,
  });
  return {
    isBookmark,
    bookmarkCount: readonly(bookmarkCount), // 외부 변경 방지
    updatebookmarkCount: count => (bookmarkCount.value = count),
    toggleBookmark,
  };
};
