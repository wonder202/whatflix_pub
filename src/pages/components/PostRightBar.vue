<template>
  <StickySideBar>
    <q-btn
      padding="8px 12px 8px 8px"
      unelevated
      color="indigo"
      class="full-width"
      @click="$emit('openWriteDialog')"
    >
      <q-avatar class="q-mr-sm" color="white" text-color="indigo-5" size="22px">
        <q-icon name="edit" size="14px" />
      </q-avatar>
      <span class="text-weight-bold">새 포스트 작성하기</span>
    </q-btn>
    <q-card class="q-mt-md" bordered flat>
      <q-card-section class="flex items-center q-pb-none">
        <div class="text-weight-bold">태그</div>
        <q-space />
        <q-btn
          @click="execute"
          icon="refresh"
          dense
          flat
          round
          size="sm"
          color="grey"
        />
      </q-card-section>
      <q-card-section class="q-pb-sm">
        <q-card class="q-px-sm" bordered flat square>
          <q-input
            borderless
            dense
            input-style="font-size: 12px;"
            placeholder="태그로 검색하기"
            @keypress.enter.prevent="addTag"
          />
          <div class="q-gutter-sm q-pb-sm">
            <q-btn
              v-for="(tag, index) in tags"
              :key="tag"
              size="10px"
              padding="2px 4px 2px 7px"
              color="grey-3"
              text-color="dark"
              unelevated
              @click="removeTag(index)"
            >
              {{ tag }}
              <q-icon name="clear" size="12px" color="grey" />
            </q-btn>
          </div>
        </q-card>
      </q-card-section>
      <div v-if="isLoading" class="flex flex-center">loading...</div>
      <q-list padding>
        <!-- 태그순위에서 클릭해도 태그추가 됨 -->
        <q-item
          v-for="{ name, count } in postTags"
          :key="name"
          clickable
          dense
          @click="addTag(name)"
        >
          <q-item-section class="text-teal text-caption">
            #{{ name }}
          </q-item-section>
          <q-item-section side class="text-teal text-caption">
            {{ count }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <q-btn class="full-width q-mt-md" color="grey-9" unelevated to="/search">
      <q-avatar class="q-mr-xs" size="22px">
        <q-icon name="sym_o_search" size="20px" />
      </q-avatar>
      <span class="text-weight-bold">검색하기</span>
    </q-btn>
  </StickySideBar>
</template>

<script setup>
import { ref, toRef } from 'vue';
import StickySideBar from 'src/components/StickySideBar.vue';
import { useTags } from 'src/composables/useTags';
import { useAsyncState } from '@vueuse/core';
import { getTags } from 'src/services';

const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['openWriteDialog', 'update:tags']);

const { addTag, removeTag } = useTags({
  tags: toRef(props, 'tags'),
  updateTags: tags => emit('update:tags', tags), // 새로운 태그배열 내보내기
  maxLengthMessage: '태그는 10개까지만 등록 가능합니다.',
});

const { state: postTags, isLoading, execute } = useAsyncState(() => getTags());
</script>

<style lang="scss" scoped></style>
