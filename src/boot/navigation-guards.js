// 비로그인 시 프로필페이지 접근을 막는 등의 기능
import { storeToRefs } from 'pinia';
import { boot } from 'quasar/wrappers';
import { useAuthStore } from 'src/stores/auth';

function requiresAuth(to) {
  const { isAuthentication } = storeToRefs(useAuthStore()); // 로그인 정보
  if (
    to.matched.some(record => record.meta.requiresAuth) && // 접근을 막고자하는 url과 매치되는(예를 들어, 상위에 메타속성을 준다면 하위까지 포함) 경로가 meta에 하나라도(some) 있다면(true), 또한
    !isAuthentication.value // 로그인 정보가 없다면(false),
  ) {
    alert('로그인이 필요한 페이지입니다.');
    return '/';
  }
  return true;
} // 이렇게 설정 후 필요한 컴포에서 사용(상위컴포)

export default boot(async ({ app, router }) => {
  router.beforeEach(requiresAuth);
});
