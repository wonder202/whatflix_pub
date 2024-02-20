<template>
  <q-item class="q-py-md">
    <q-item-section side top>
      <q-avatar size="md">
        <img :src="commentUser?.photoURL" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <div class="flex text-caption">
        <span>{{ commentUser?.displayName }}</span>
        <span class="q-mx-xs">&middot;</span>
        <span class="text-grey-6">
          {{ date.formatDate(createAt, 'YYYY/MM/DD HH:mm:ss') }}
        </span>
      </div>
      <div class="q-mt-sm">{{ content }}</div>
    </q-item-section>
    <q-item-section side top v-if="hasOwnContent(uid)">
      <q-btn
        icon="sym_o_delete"
        round
        dense
        flat
        color="grey"
        @click="$emit('delete', id)"
      />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { useAsyncState } from '@vueuse/core';
import { date } from 'quasar';
import { getUserById } from 'src/services';
import { useAuthStore } from 'src/stores/auth';

const { hasOwnContent } = useAuthStore();

const props = defineProps({
  id: {
    type: String,
  },
  content: {
    type: String,
  },
  createAt: {
    type: Date,
  },
  uid: {
    type: String,
  },
});
defineEmits(['delete']);

const { state: commentUser } = useAsyncState(() => getUserById(props.uid));
</script>

<style lang="scss" scoped></style>
