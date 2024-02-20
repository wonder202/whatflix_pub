<!-- 사용자에게 보여줄 에러메세지(가입되지않은 회원 등) -->
<template>
  <div v-if="code" class="text-red text-center">{{ errorMessage }}</div>
</template>
<!-- 방법 1. -->
<!-- <script>
const ERROR_CODE_JSON = {
  'auth/invalid-credential': '아이디 혹은 비밀번호를 확인해주세요.',
  'auth/email-already-in-use': '이미 가입된 회원입니다.',
};
</script> -->
<script setup>
import { computed } from 'vue';
import { getErrorMessage } from 'src/utils/firebase/error-message';

// 회원에게 넘겨받을 에러코드
const props = defineProps({
  code: {
    type: String,
  },
});

const errorMessage = computed(() => getErrorMessage(props.code));
</script>

<style lang="scss" scoped></style>
