import { route } from 'quasar/wrappers';
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router/auto';
// import routes from './routes';
import { setupLayouts } from 'virtual:generated-layouts';
import { LoadingBar } from 'quasar';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    // routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
    // 0. extendRoutes 기존 routes정보를 확장하거나 수정하게 해주는 함수.
    extendRoutes: routes => {
      return setupLayouts(
        // * map()으로 주어진 함수식(if)를 통과 후 반환
        routes.map(route => {
          // 1. 만약 route.path 정보에 admin을 포함한다면,
          if (route.path.includes('admin')) {
            // 2. route정보를 전개구문으로 다시 넣고, meta정보도 다시 세팅.
            // 전개 구문(Spread Syntax)는 간단하게 이 문법은 문법 이름 그대로 객체 혹은 배열들을 펼칠 수 있게 해 준다.
            // 사용법 ex) 객체의 경우 {...obj}, 배열의 경우 {...arr} 혹은 [...arr]
            // 3. layout도 추가설정
            route = {
              ...route,
              meta: {
                ...route.meta,
                layout: 'admin',
              },
            };
          }
          // 4. 그리고 통과된 값을 반환.
          // 5. 그러면 최종적으로, admin layout이 적용된 하위폴더인 admin이 칠드런으로 라우트된다.
          return route;
        }),
      );
    },
  });

  Router.beforeEach(() => {
    LoadingBar.start();
  });

  Router.afterEach(() => {
    LoadingBar.stop();
  });

  return Router;
});
