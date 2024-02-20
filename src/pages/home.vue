<template>
  <!-- q-page 페이지 단위를 나타내는 태그 -->
  <q-page padding>
    <div class="text-h4">Home</div>
    <section class="q-gutter-y-sm q-mt-lg">
      <q-card v-for="id in 100" :key="id">
        <q-card-section>{{ id }}번 게시글</q-card-section>
      </q-card>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: home-page
# 0. 원하는 페이지만 스타일 적용을 바꾸고 싶을경우,
# 1. 우선 예를 들어 홈의 스타일을 메인페이지와 다르게 구성하고 싶다면 meta정보로 style정보를 넘겨준다. width
meta:
  requiresAuth: true
  width: 600px
</route>
