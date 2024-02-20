<template>
  <q-page padding>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>수정하기</q-toolbar-title>
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        @submit="handleSubmit"
      >
        <template #actions>
          <q-btn
            unelevated
            type="submit"
            label="저장"
            color="indigo"
            :loading="isLoading"
          />
          <q-btn
            outline
            label="취소"
            color="negative"
            @click="$router.push(`/posts/${route.params.id}`)"
          />
        </template>
      </PostForm>
    </BaseCard>
  </q-page>
</template>
<script>
// 글쓰기가 중간에 취소된 경우 초기화를 위한 메소드
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});
</script>
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { getPost, updatePost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import BaseCard from 'src/components/base/BaseCard.vue';
import PostForm from 'src/components/apps/post/PostForm.vue';

const route = useRoute();
const router = useRouter();
const $q = useQuasar();
const form = ref(getInitialForm());

useAsyncState(
  () => getPost(route.params.id),
  {},
  {
    onSuccess: post => {
      form.value.title = post.title;
      form.value.category = post.category;
      form.value.content = post.content;
      form.value.tags = post.tags;
    },
  },
);

const { isLoading, execute: executeUpdatePost } = useAsyncState(
  updatePost,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      $q.notify('수정되었습니다.');
    },
  },
);

const handleSubmit = async () => {
  if (confirm('수정하시겠어요?') === false) {
    return;
  }
  await executeUpdatePost(1000, route.params.id, form.value);
  router.push(`/posts/${route.params.id}`);
};
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  width: 800px
</route>
