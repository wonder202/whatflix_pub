<!-- useAsyncState란? 반응적 비동기 w상태. 비동기상태를 처리해주는 라이브러리. setup function을 블락하지않으며 프라미스객체가 준비되면 변경 사항을 트리거한다. -->
<template>
  <q-page padding>
    <div class="text-h4">useAsyncState</div>
    <q-separator spaced />

    <p>isReady: {{ isReady }}</p>
    <p>isLoading: {{ isLoading }}</p>
    <button @click="handleButton">excute</button>
    <p>error: {{ error }}</p>
    <p>state: {{ state }}</p>
  </q-page>
</template>

<script setup>
import axios from 'axios';
import { useAsyncState } from '@vueuse/core';

// useAsyncState(파라미터값: 1.프라미스객체 또는 프라미스객체 반환함수, 2.초기값, 3.옵션)
// axios.get.then의 비동기로직으로 처리된 결과 {state 반응형데이터, isLoading로딩중 반응형데이터, error, isReady 비동기처리 준비상태, execute 재조회}
const { state, isLoading, error, isReady, execute } = useAsyncState(
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.data), // 프라미스객체
  { name: '나다' }, // 초기값
  {
    immediate: false, // 옵션 // false면 execute 후 실행, true는 즉시실행
  },
);

const handleButton = () => {
  // execute(딜레이시간)
  execute(1000);
};
</script>

<style lang="scss" scoped></style>
