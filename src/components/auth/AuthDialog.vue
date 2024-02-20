<template>
  <!-- v-model="true면 다이얼로그가 열리고 false면 닫힘" -->
  <!-- @hide="" 새로고침없이 팝업창을 닫았다가 다시 열었을때 초기 화면을 설정함. -->
  <q-dialog
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    @hide="changeViewMode('LoginForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space />
        <!-- v-close-popup 퀘이사에서 제공하는 팝업을 닫는 기능 -->
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="q-px-xl q-pb-xl">
        <!-- 1. v-if를 사용한 조건부 렌더링 -->
        <!-- <LoginForm
          v-if="viewMode === 'LoginForm'"
          @change-view-val="changeViewMode"
        />
        <JoinForm
          v-else-if="viewMode === 'JoinForm'"
          @change-view-val="changeViewMode"
        />
        <FindPasswordForm v-else @change-view-val="changeViewMode" /> -->

        <!-- 2. 동적 컴포넌트 DynamicCompo 참조 -->
        <component
          :is="authViewCompo[viewMode]"
          @change-view-val="changeViewMode"
          @close-dialog="closeDialog"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
// import LoginForm from './LoginForm.vue';
// import JoinForm from './JoinForm.vue';
// import FindPasswordForm from './FindPasswordForm.vue';
import { defineAsyncComponent, ref } from 'vue';

defineProps({
  // modelValue - 커스텀 v-model 정의
  modelValue: {
    type: Boolean,
    default: false,
  },
});
// 정의
const emit = defineEmits(['update:modelValue']);

// 로그인 혹은 회원가입 완료 같은 상황 시 다이얼로그 닫기.
const closeDialog = () => {
  emit('update:modelValue', false);
};

// 반응형 데이터에 값이 뭐가 오느냐에 따라 보여지는 form이 다름.
const viewMode = ref('LoginForm');

// 이러한 form상태를 변경시키는 함수.
const changeViewMode = mode => (viewMode.value = mode);

// 2-1. 동적컴포넌트로 사용할 컴포넌드들을 배열로 선언함
// const authViewCompo = {
//   LoginForm,
//   JoinForm,
//   FindPasswordForm,
// };

// lazy load를 추가한 배열 선언. 블로그 참조.
const authViewCompo = {
  LoginForm: defineAsyncComponent(() => import('./LoginForm.vue')),
  JoinForm: defineAsyncComponent(() => import('./JoinForm.vue')),
  FindPasswordForm: defineAsyncComponent(() =>
    import('./FindPasswordForm.vue'),
  ),
};
</script>

<style lang="scss" scoped></style>
