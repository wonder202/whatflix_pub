<template>
  <div>
    <div class="text-subtitle1 text-weight-bold q-mb-lg">댓글</div>
    <div v-if="isActive">
      <q-form @submit.prevent="handleAddComment">
        <q-input
          v-model="content"
          type="textarea"
          outlined
          hide-bottom-space
          :rules="[validateRequired]"
        ></q-input>
        <div class="flex justify-end q-gutter-x-sm q-mt-sm">
          <q-btn
            type="submit"
            :loading="isLoading"
            label="등록"
            color="indigo"
            unelevated
          />
          <q-btn
            label="취소"
            outline
            color="negative"
            unelevated
            @click="toggleActive"
          />
        </div>
      </q-form>
    </div>

    <BaseCard
      v-else-if="!isActive"
      @click="toggleActive"
      class="cursor-pointer"
    >
      <q-card-section class="flex items-center">
        <q-avatar>
          <img
            v-if="authStore.user === null || authStore.user.photoURL === null"
            src="https://cdn.quasar.dev/img/avatar.png"
          />
          <img v-else :src="authStore.user.photoURL" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 적어보세요.</div>
      </q-card-section>
    </BaseCard>
    <CommentList
      :post-id="$route.params.id"
      :items="comments"
      @deleted="deletedComment"
    />
  </div>
</template>

<script setup>
import CommentList from 'src/components/apps/comment/CommentList.vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import { ref } from 'vue';
import { useAsyncState } from '@vueuse/core';
import { useRoute } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import { addComment, getComments } from 'src/services';
import { validateRequired } from 'src/utils/validate-rules';
const route = useRoute();
const authStore = useAuthStore();

const isActive = ref(false);
const toggleActive = () => {
  if (!isActive.value && !authStore.isAuthentication) {
    alert('로그인 후 이용 가능합니다.');
    return;
  }
  if (!authStore.user.emailVerified) {
    alert('이메일 인증 후 이용 가능합니다.');
    return;
  }
  isActive.value = !isActive.value;
};
const content = ref('');

// 조회
const { state: comments, execute: executeGetcomments } = useAsyncState(
  () => getComments(route.params.id),
  [],
  {
    // default값은 true. 초기화상태[]를 막기때문에 깜빡거리는 현상 방지.
    resetOnExecute: false,
  },
);
// 등록
const { isLoading, execute: executeAddComment } = useAsyncState(
  addComment,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      content.value = '';
      isActive.value = false;
      executeGetcomments(0);
    },
  },
);
const handleAddComment = async () => {
  await executeAddComment(0, route.params.id, {
    content: content.value,
    uid: authStore.uid,
  });
};

// 삭제 후 재조회
const deletedComment = () => executeGetcomments(0);
</script>

<style lang="scss" scoped></style>
