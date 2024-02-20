<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <!-- <q-input
        v-model="form.nickname"
        placeholder="닉네임"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequired]"
      /> -->
      <!-- user의 displayName저장 이슈로 닉네임 제거(user 컬렉션 노트 참조) -->
      <q-input
        v-model="form.email"
        placeholder="이메일"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequired, validateEmail]"
      />
      <q-input
        v-model="form.password"
        type="password"
        placeholder="비밀번호(문자, 숫자 조합 8자 이상)"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequired, validatePassword]"
      />
      <q-input
        v-model="passwordConfirm"
        type="password"
        placeholder="비밀번호 확인"
        outlined
        dense
        :rules="[
          validateRequired,
          val => validatePasswordConfirm(form.password, val),
        ]"
      />
      <DisplayError :code="error?.code" />
      <q-btn
        type="submit"
        label="가입하기"
        class="full-width"
        unelevated
        color="indigo"
        :loading="isLoading"
      />

      <q-separator />
      <q-btn
        label="로그인"
        class="full-width"
        flat
        @click="$emit('changeViewVal', 'LoginForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { joinWithEmail } from 'src/services';
import { useQuasar } from 'quasar';
import { useAsyncState } from '@vueuse/core';
import DisplayError from '../DisplayError.vue';
import {
  validateRequired,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from 'src/utils/validate-rules';
import { getErrorMessage } from 'src/utils/firebase/error-message';

const emit = defineEmits(['changeViewVal', 'closeDialog']);

const $q = useQuasar();

const passwordConfirm = ref('');
const form = ref({
  nickname: '',
  email: '',
  password: '',
});

const { isLoading, execute } = useAsyncState(joinWithEmail, null, {
  immediate: false,
  onSuccess: () => {
    $q.notify('회원가입을 환영합니다.');
    $q.notify('이메일을 확인하고 인증을 완료해주세요.');
    emit('closeDialog');
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const handleSubmit = () => execute(1000, form.value);

// 로딩 중 뱅글뱅글 돌아가는 모양
// const isLoading = ref(false);

// 사용자에게 노출될 에러메세지(가입되지않은 회원 등)
// const error = ref(null);

// const handleSubmit = async () => {
//   try {
//     isLoading.value = true;
//     await joinWithEmail(form.value);
//     $q.notify('회원가입을 환영합니다.');
//     $q.notify('이메일을 확인하고 인증을 완료해주세요.');
//     emit('closeDialog');
//   } catch (err) {
//     error.value = err;
//     $q.notify({
//       type: 'negative',
//       message: getErrorMessage(err.code),
//     });
//   } finally {
//     isLoading.value = false;
//   }
// };
</script>

<style lang="scss" scoped></style>
