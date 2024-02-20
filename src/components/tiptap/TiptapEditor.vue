<template>
  <q-card class="tiptap" flat bordered>
    <TiptapEditorMenu :editor="editor" />

    <q-separator />

    <editor-content class="editor__content" :editor="editor" />

    <div
      class="character-count flex justify-end text-teal q-pa-sm"
      v-if="editor"
    >
      <span>
        {{ editor.storage.characterCount.characters() }}/{{ limit }} 자
      </span>
      <span class="q-mx-sm">/</span>
      <span> {{ editor.storage.characterCount.words() }} 단어</span>
    </div>
  </q-card>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { watch } from 'vue';
import Placeholder from '@tiptap/extension-placeholder';
import TiptapEditorMenu from 'src/components/tiptap/TiptapEditorMenu.vue';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
// 익스텐션 설치 npm i @tiptap/익스텐션명
import CharacterCount from '@tiptap/extension-character-count';
import { ref } from 'firebase/storage';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const limit = ref(2400);

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Placeholder.configure({
      //configure 옵션
      placeholder: '마크다운으로 편리하게 글을 작성하세요.',
    }),
    Link,
    Image,
    CharacterCount.configure({
      limit: limit.value,
    }),
  ],
  onUpdate: () => {
    emit('update:modelValue', editor.value.getHTML());
  },
});
watch(
  () => props.modelValue, // modelValue의 변경사항 감지
  // 변경사항이
  value => {
    const isSame = editor.value.getHTML() === value; // 현재값이랑 동일(true)한지 체크
    if (isSame) {
      // 동일(true)하다면 반환
      return;
    } // 변경(false)됐다면 setContent api로 현재값을 변경시키기
    editor.value.commands.setContent(value, false);
  },
);
</script>

<style lang="scss" src="src/css/tiptap.scss"></style>
<style lang="scss">
.tiptap p.is-editor-empty:first-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
</style>
<style lang="scss" scoped>
.editor__content {
  // 추가 start
  flex: 1;
  display: flex;
  overflow-y: auto;
  padding: 16px 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 400px;
  // 추가 end
}
</style>
