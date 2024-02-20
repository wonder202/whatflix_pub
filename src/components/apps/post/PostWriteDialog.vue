<template>
  <!-- persistent 팝업이 닫히지않게함. -->
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ minWidth: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        :loading="isLoading"
        @submit="execute(1000, { ...form, uid: authStore.uid })"
      />
    </q-card>
  </q-dialog>
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
import PostForm from './PostForm.vue';
import { ref } from 'vue';
import { createPost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useAuthStore } from 'src/stores/auth';

const emit = defineEmits(['complete']);

const authStore = useAuthStore();

const form = ref(getInitialForm());

const onHide = () => {
  form.value = getInitialForm();
};

const { isLoading, execute } = useAsyncState(createPost, null, {
  immediate: false,
  throwError: true,
  onSuccess: postID => {
    // router.push(`/posts/${postID}`);
    emit('complete');
  },
});
// 위에 있음
// const handleSubmit = async () => {
//   await execute(1000, {
//     ...form.value,
//     uid: authStore.uid,
//   });
// };
</script>

<style lang="scss" scoped></style>
