<template>
  <q-item class="q-pt-md" clickable :to="`/posts/${item.id}`">
    <!-- 6. 뿌려주기 -->
    <q-item-section avatar top>
      <q-skeleton v-if="isLoadingPostUser" type="QAvatar" />
      <q-avatar v-else>
        <img :src="postUser?.photoURL" alt="" />
      </q-avatar>
    </q-item-section>

    <q-item-section class="q-mr-xl" style="word-break: break-all">
      <div class="flex items-center">
        <q-skeleton v-if="isLoadingPostUser" type="rect" width="40px" />
        <span v-else>{{ postUser?.displayName }}</span>
        <span class="q-mx-xs">&middot;</span>
        <span>{{ formatRelativeTime(item.createAt) }}</span>
        <q-chip class="q-ml-md" dense color="indigo" text-color="white">
          {{ category(item.category) }}
        </q-chip>
      </div>
      <div class="text-h6 q-mt-sm">{{ item.title }}</div>
      <div class="text-indigo text-caption">
        <span v-for="tag in item.tags" :key="tag" class="q-mr-sm">
          #{{ tag }}
        </span>
      </div>
      <div v-if="escapeHTML" class="text-grey-7 q-my-sm ellipsis-2-lines">
        {{ item.content }}
      </div>
      <TiptapViewer
        v-else
        :content="item.content"
        class="text-grey-6 q-my-sm ellipsis-2-lines"
      />
      <div class="row items-center">
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon
              name="sym_o_visibility"
              :label="item.readCount"
              tooltip="조회수"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <PostIcon
              name="sym_o_sms"
              :label="item.commentCount"
              tooltip="댓글수"
            />
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn class="full-width" flat dense @click.prevent="toggleLike">
              <PostIcon
                color="red"
                :name="isLike ? 'favorite' : 'sym_o_favorite'"
                :label="likeCount"
                tooltip="좋아요"
              />
            </q-btn>
          </div>
        </div>
        <div class="col-3">
          <div class="flex flex-center">
            <q-btn
              class="full-width"
              flat
              dense
              @click.prevent="toggleBookmark"
            >
              <PostIcon
                color="indigo"
                :name="isBookmark ? 'bookmark' : 'sym_o_bookmark'"
                :label="bookmarkCount"
                tooltip="북마크"
              />
            </q-btn>
          </div>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import PostIcon from './PostIcon.vue';
import TiptapViewer from 'src/components/tiptap/TiptapViewer.vue';
import { formatRelativeTime } from 'src/utils/relative-time-format';
import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';
import { useLike } from 'src/composables/useLike';
import { useBookmark } from 'src/composables/useBookmark';
import { useAsyncState } from '@vueuse/core';
import { getUserById } from 'src/services';

// 5. 부모컴포에서 넘겨 온 정보 정의하기
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  escapeHTML: {
    type: Boolean,
    default: false,
  },
});

const category = val => {
  if (val === 'qna') {
    return 'Q&A';
  }
  if (val === 'community') {
    return '커뮤니티';
  }
  if (val === 'notice') {
    return '공지사항';
  }
  if (val === 'review') {
    return '리뷰';
  }
};

const { uid, isAuthentication } = storeToRefs(useAuthStore());

const { isLike, likeCount, toggleLike } = useLike(props.item.id, {
  likey: props.item.likeCount,
});
const { isBookmark, bookmarkCount, toggleBookmark } = useBookmark(
  props.item.id,
  {
    bookmarking: props.item.bookmarkCount,
  },
);

const { state: postUser, isLoading: isLoadingPostUser } = useAsyncState(
  () => getUserById(props.item.uid),
  {},
);
</script>

<style lang="scss" scoped></style>
