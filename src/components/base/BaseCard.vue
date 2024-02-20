<template>
  <q-card :flat="flat" :bordered="bordered" v-bind="$attrs">
    <slot></slot>
  </q-card>
</template>

<script setup>
defineProps({
  flat: {
    type: Boolean,
    default: true,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped></style>
