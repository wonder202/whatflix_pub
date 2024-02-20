<template>
  <!-- q-page 페이지 단위를 나타내는 태그 -->
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" v-model:category="category" />
      <section class="col-7">
        <PostHeader v-model:sort="sort" />
        <PostListSkeleton v-if="isLoading" />
        <!-- 2. 프롭스 선언 postlist.vue ㄱ -->
        <PostList :items="items" />
        <!-- <q-btn
          v-if="isLoadMore"
          class="full-width q-mt-md"
          label="더보기"
          outline
          @click="loadMore"
        /> -->
        <div v-intersection-observer="handleInterObser"></div>
      </section>
      <PostRightBar
        class="col-3"
        v-model:tags="tags"
        @open-write-dialog="OpenWriteDialog"
      />
    </div>
    <PostWriteDialog v-model="writeDialog" @complete="completePost" />
  </q-page>
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';
import { computed, ref, watch } from 'vue';
import PostWriteDialog from 'src/components/apps/post/PostWriteDialog.vue';
import { getPosts } from 'src/services';
import { useAsyncState } from '@vueuse/core';
// vueUse에서 제공하는 vIntersectionObserver api를 통해 함수식 없이 바로 엘리먼트에서 사용가능
import { vIntersectionObserver } from '@vueuse/components';
import { usePostQuery } from 'src/composables/usePostQuery';
import { useAuthStore } from 'src/stores/auth';
import PostListSkeleton from 'src/components/skeletons/PostListSkeleton.vue';

const authStore = useAuthStore();

const { category, sort, tags } = usePostQuery();
// 위의 usePostQuery 쿼리값이 변경되더라도, ref반응형 상태의 값은 변경되지않기때문에,
// 아래처럼 computed로 선언하여 변경된 값을 받고 다시 계산시킨다.
const params = computed(() => ({
  category: category.value,
  tags: tags.value,
  sort: sort.value,
  limit: 6,
}));
const items = ref([]);
const start = ref(null);
const isLoadMore = ref(true); // 더이상 없으면 더보기 안보이게 하기.

const { execute, isLoading } = useAsyncState(
  getPosts, // 새로고침 시에도 선택한대로 정렬되도록.
  [],
  {
    immediate: false,
    throwError: true,
    onSuccess: result => {
      if (start.value) {
        // concat으로 배열 연결시키기
        items.value = items.value.concat(result.items);
      } else {
        items.value = result.items;
      }
      // 현재 조회한 목록의 길이가 limit보다 길거나 같으면, 더 조회
      isLoadMore.value = result.items.length >= params.value.limit;
      start.value = result.lastItem; // 처음 가져온 갯수의 마지막 것을 기준으로 다시 start
    },
  },
);
watch(
  params,
  () => {
    start.value = null; // 더보기 도중 다른 조건으로 정렬되면 start값을 초기화
    execute(0, params.value);
  },
  {
    deep: true, // watch의 세번째인자(옵션)으로 deep을 설정해줘야 감지됨.
    // immediate: true, // handleInterObser 실행과 겹쳐서 게시글을 두번 가져오기떄문에 주석
  },
);

const writeDialog = ref(false);

const OpenWriteDialog = () => {
  if (!authStore.isAuthentication) {
    alert('로그인 후 이용 가능합니다.');
    return;
  }
  if (!authStore.user.emailVerified) {
    alert('이메일 인증 후 이용 가능합니다.');
    return;
  }
  writeDialog.value = true;
};

// 포스팅 완료 시
const completePost = () => {
  writeDialog.value = false; // 다이얼로그 닫고
  start.value = null;
  execute(0, params.value); // 목록 재조회
};

// const vIntersectionObserver = {
//   beforeMount: (el, binding) => {
//     const observer = new IntersectionObserver(binding.value);
//     observer.observe(el);
//   },
// };

// 더보기
const loadMore = () => {
  execute(0, { ...params.value, start: start.value });
};

const handleInterObser = ([{ isIntersecting }]) => {
  // isIntersecting 관찰 대상의 교차 상태
  if (isIntersecting && isLoadMore.value) {
    loadMore();
  }
};
</script>

<style lang="scss" scoped></style>
