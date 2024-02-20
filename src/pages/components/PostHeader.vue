<template>
  <div class="flex items-center q-mb-lg">
    <div class="text-h5">전체목록</div>
    <q-space />
    <q-tabs
      :model-value="sort"
      @update:model-value="value => $emit('update:sort', value)"
      narrow-indicator
      dense
    >
      <q-tab :rapple="false" label="최신순" name="createAt" />
      <q-tab :rapple="false" label="조회수순" name="readCount" />
      <q-tab :rapple="false" label="좋아요순" name="likeCount" />
    </q-tabs>
  </div>
</template>

<script setup>
defineProps({
  // sort 정렬 조회
  sort: {
    type: String,
    default: 'createAt',
  },
});
defineEmits(['update:sort']);
</script>

<style lang="scss" scoped></style>
