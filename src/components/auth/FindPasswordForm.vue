<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">
      비밀번호 찾기
    </div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input
        v-model="email"
        placeholder="가입한 이메일"
        outlined
        dense
        :rules="[validateRequired, validateEmail]"
      />
      <q-btn
        type="submit"
        label="비밀번호 재설정"
        class="full-width"
        unelevated
        color="indigo"
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
import { sendPasswordReset } from 'src/services';
import { useQuasar } from 'quasar';
import { validateRequired, validateEmail } from 'src/utils/validate-rules';

const $q = useQuasar();

const emit = defineEmits(['changeViewVal', 'closeDialog']);

const email = ref('');
const handleSubmit = async () => {
  await sendPasswordReset(email.value);
  $q.notify('이메일로 비밀번호 재설정 링크를 보냈습니다.');
  emit('closeDialog');
};
</script>

<style lang="scss" scoped></style>
