<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <!-- @submit.prevent="" 폼안에 정보입력 없이 버튼 눌렀을때 닫히지않게함. -->
    <q-form class="q-gutter-y-md" @submit.prevent="handleLoginEmail">
      <q-input
        v-model="form.email"
        placeholder="이메일"
        outlined
        dense
        hide-bottom-space
        :rules="[validateRequired, validateEmail]"
      />
      <q-input
        type="password"
        v-model="form.password"
        placeholder="비밀번호"
        outlined
        dense
        :rules="[validateRequired]"
      />
      <!-- {{ error }} -->
      <DisplayError :code="error?.code" />
      <div>
        <q-btn
          type="submit"
          label="로그인하기"
          class="full-width"
          unelevated
          color="indigo"
          :loading="isLoading"
        />
        <div class="flex justify-between">
          <q-btn
            label="비밀번호 찾기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeViewVal', 'FindPasswordForm')"
          />
          <q-btn
            label="이메일 가입하기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeViewVal', 'JoinForm')"
          />
        </div>
      </div>

      <q-separator />
      <!-- 3. 클릭하면 구글 로그인으로 넘어감. -->
      <q-btn
        class="full-width"
        flat
        dense
        @click="handleLoginGoogle"
        label=" google 계정으로 로그인"
      />
    </q-form>
  </div>
</template>

<script setup>
// 1. 'src/services/auth' 임폴트하여 메소드 가져오기.
import { loginWithGoogle, loginWithEmail } from 'src/services';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { validateRequired, validateEmail } from 'src/utils/validate-rules';
import DisplayError from '../DisplayError.vue';
import { getErrorMessage } from 'src/utils/firebase/error-message';
import { useAsyncState } from '@vueuse/core';

const $q = useQuasar();

const emit = defineEmits(['changeViewVal', 'closeDialog']);

// 로딩 중 뱅글뱅글 돌아가는 모양
// const isLoading = ref(false);

// 사용자에게 노출될 에러메세지(가입되지않은 회원 등)
// const error = ref(null);

// 이메일 로그인
const form = ref({
  email: '',
  password: '',
});

// 2. useAsyncState 응용
const { isLoading, error, execute } = useAsyncState(loginWithEmail, null, {
  immediate: false,
  throwError: true,
  // onSuccess 비동기로직 처리 후 실행될 함수
  onSuccess: () => {
    $q.notify('로그인 되었습니다.');
    emit('closeDialog');
  },
  // onError 비동기로직 실패 후 실행될 함수
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});

const handleLoginEmail = () => execute(1000, form.value);

// 1. 기본 로직
// const handleLoginEmail = async () => {
//   try {
//     isLoading.value = true;
//     await loginWithEmail(form.value);
//     $q.notify('로그인 되었습니다.');
//     emit('closeDialog');
//   } catch (err) {
//     error.value = err;
//     // 방법2-1. 노티파이 기능
//     $q.notify({
//       type: 'negative',
//       message: getErrorMessage(err.code),
//     });
//   } finally {
//     isLoading.value = false;
//   }
// };

// const handleLoginEmail = async () => {
//   await loginWithEmail(form.value);
//   $q.notify('로그인 되었습니다.');
//   emit('closeDialog');
// };

// 2. 클릭 시 메소드 실행.
const handleLoginGoogle = async () => {
  await loginWithGoogle();
  $q.notify('로그인 되었습니다.');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped></style>
