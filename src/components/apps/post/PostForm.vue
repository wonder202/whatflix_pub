<template>
  <q-form @submit.prevent="handleSubmit">
    <q-card-section class="q-gutter-y-sm">
      <q-input
        outlined
        v-model="titleModel"
        placeholder="제목"
        hide-bottom-space
        :rules="[validateRequired]"
        counter
        maxlength="50"
      />
      <q-select
        outlined
        v-model="categoryModel"
        :options="catagories"
        emit-value
        map-options
        hide-bottom-space
        :rules="[validateRequired]"
      >
        <template v-if="!categoryModel" #selected>
          <span class="text-grey-7">카테고리를 선택하세요.</span>
        </template>
      </q-select>
      <TiptapEditor v-model="contentModel" />
      <q-input
        prefix="#"
        outlined
        placeholder="태그를 입력해주세요. (입력 후 Enter)"
        @keypress.enter.prevent="addTag"
      />
      <q-chip
        v-for="(tag, index) in tags"
        :key="tag"
        outline
        dense
        color="teal"
        removable
        @remove="removeTag(index)"
      >
        {{ tag }}
      </q-chip>
    </q-card-section>
    <q-card-actions align="right">
      <slot name="actions">
        <q-btn unelevated type="submit" label="저장" color="indigo"></q-btn>
        <q-btn outline label="취소" color="negative" v-close-popup></q-btn>
      </slot>
    </q-card-actions>
  </q-form>
</template>

<script setup>
import { getCategories } from 'src/services/category';
import { computed, ref, toRef } from 'vue';
import { useQuasar } from 'quasar';
import TiptapEditor from 'src/components/tiptap/TiptapEditor.vue';
import { validateRequired } from 'src/utils/validate-rules';
import { useTags } from 'src/composables/useTags';

const $q = useQuasar();

const props = defineProps({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'update:title',
  'update:category',
  'update:content',
  'update:tags',
  'submit',
]);

const titleModel = computed({
  get: () => props.title, // 부모로부터(props) 기존정보 받아오기
  set: val => emit('update:title', val), // 받아온 값(val)을 바꿔서 올려보내기(emit)
});
const categoryModel = computed({
  get: () => props.category,
  set: val => emit('update:category', val),
});
const contentModel = computed({
  get: () => props.content,
  set: val => emit('update:content', val),
});

// 컴포저블함수로 분리된 useTags안의 addTag, removeTag 가져오기
const { addTag, removeTag } = useTags({
  // 옵션즈로 선언된 함수들은 이곳에서 정의
  tags: toRef(props, 'tags'),
  updateTags: tags => emit('update:tags', tags), // 새로운 tags배열을 emit으로 내보내기
  maxLengthMessage: '태그는 10개까지만 등록 가능합니다.',
});

const catagories = getCategories();

const handleSubmit = () => {
  if (!contentModel.value) {
    $q.notify('내용을 입력해주세요.');
    return;
  }
  emit('submit');
};
</script>

<style lang="scss" scoped></style>
