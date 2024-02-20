<template>
  <BaseCard>
    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-gutter-y-md">
        <div class="text-h6">비밀번호 변경</div>
        <q-input
          v-model="newPassword"
          type="password"
          outlined
          dense
          placeholder="비밀번호(문자, 숫자 조합 8자 이상)"
          label="새로운 비밀번호"
        />
        <q-input
          v-model="newPasswordConfirm"
          type="password"
          outlined
          dense
          label="새로운 비밀번호 확인"
          :rules="[val => validatePasswordConfirm(newPassword, val)]"
        />
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
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
import { updateUserPassword } from 'src/services';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useAsyncState } from '@vueuse/core';
import { getErrorMessage } from 'src/utils/firebase/error-message';
import { validatePasswordConfirm } from 'src/utils/validate-rules';

const $q = useQuasar();

const newPassword = ref('');
const newPasswordConfirm = ref('');

const { isLoading, execute } = useAsyncState(updateUserPassword, null, {
  immediate: false,
  onSuccess: () => {
    $q.notify('비밀번호 변경이 완료되었습니다.');
    newPassword.value = '';
    newPasswordConfirm.value = '';
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const handleSubmit = () => execute(0, newPassword.value);

// const handleSubmit = async () => {
//   await updateUserPassword(form.value.newPassword);
//   $q.notify('비밀번호 변경이 완료되었습니다.');
//   // 변경 후 초기화
//   form.value.newPassword = '';
//   form.value.newPasswordConfirm = '';
// };
</script>

<style lang="scss" scoped></style>
