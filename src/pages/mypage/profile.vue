<template>
  <div class="q-gutter-y-md">
    <BaseCard>
      <q-form @submit.prevent="handleSubmitProfile">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">프로필 변경</div>
          <q-input v-model="displayName" outlined dense label="닉네임" />
          <q-input v-model="email" outlined dense label="이메일" readonly />
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn
            type="submit"
            label="저장"
            unelevated
            color="indigo"
            :loading="isLoading"
          />
        </q-card-actions>
      </q-form>
    </BaseCard>
    <!-- <BaseCard>
      <q-form @submit.prevent="handleSubmitEmail">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">이메일 변경</div>
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn type="submit" label="저장" unelevated color="indigo" />
        </q-card-actions>
      </q-form>
    </BaseCard> -->
  </div>
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
import { ref, watchEffect } from 'vue';
import { useAuthStore } from 'src/stores/auth';
import { useQuasar } from 'quasar';
import { updateUserProfile, updateUserEmail } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { getErrorMessage } from 'src/utils/firebase/error-message';

const $q = useQuasar();

const authStore = useAuthStore();

const { isLoading, execute } = useAsyncState(updateUserProfile, null, {
  immediate: false,
  onSuccess: () => {
    $q.notify('프로필이 수정 되었습니다.');
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const handleSubmitProfile = () => execute(0, displayName.value);

const displayName = ref('');
// const handleSubmitProfile = async () => {
//   await updateUserProfile(displayName.value);
//   $q.notify('프로필이 수정 되었습니다.');
// };

const email = ref('');
// const handleSubmitEmail = async () => {
//   await updateUserEmail(email.value);
//   $q.notify('이메일이 수정 되었습니다.');
// };

watchEffect(() => {
  // 여기서 사용한 옵셔널체이닝(?.)의 용도 :
  // 새로고침 시 발생하는 일시적인 user정보 초기화(nullish)의 상태에서 생기는 에러를 대신해 undefined를 반환해준다.
  // 그리고 nullish 상태가 아니라면 우리가 원하는 값을 반환해준다.
  displayName.value = authStore.user?.displayName;
  email.value = authStore.user?.email;
});
</script>

<style lang="scss" scoped></style>
