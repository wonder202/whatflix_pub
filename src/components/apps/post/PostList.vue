<template>
  <!-- 4. 뿌려주기, 자식 컴포로 프롭스 정보 넘기기 postitem.vue ㄱ -->
  <q-list bordered separator>
    <PostItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :escapeHTML="escapeHTML"
    />
  </q-list>
</template>

<script setup>
import { useQuasar } from 'quasar';
import PostItem from './PostItem.vue';

// 3. 프롭스 정의하기
defineProps({
  items: Array,
  default: () => [],
  escapeHTML: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
