<template>
  <!-- 퀘이사를 사용할땐 꼭 q-layout으로 감싸줘야 함. -->
  <q-layout view="lHh Lpr lff">
    <q-header bordered :class="darkMode">
      <!-- <q-header bordered> -->
      <q-toolbar>
        <q-btn flat dense to="/">
          <img
            v-if="$q.dark.isActive"
            src="/logoDark.png"
            style="height: 70px; max-width: 215px"
          />
          <img v-else src="/logo.png" style="height: 70px; max-width: 215px" />
        </q-btn>
        <q-space />
        <!-- 형광등 아이콘으로 바꾸기 -->
        <q-btn stretch flat @click="changeMode">{{ mode }}</q-btn>
        <!-- to=""는 컴포넌트 이동 시 -->
        <!-- href=""는 외부링크 이동 시 -->
        <!-- target="_blank" 새탭 열어 이동 -->
        <q-btn
          stretch
          flat
          label="보러가기"
          href="http://netflix.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="동영상 리뷰"
          href="https://youtube.com/"
          target="_blank"
        />
        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn
          v-if="!authStore.isAuthentication"
          @click="openDialog"
          rounded
          color="indigo"
          label="로그인 / 회원가입"
          unelevated
        />
        <q-btn round flat v-if="authStore.isAuthentication">
          <q-avatar>
            <!-- 이미지 로딩 전 디폴트 이미지 설정 -->
            <img
              :src="
                authStore.user.photoURL ||
                generateDefaultPhotoURL(authStore.user.uid)
              "
            />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 180px">
              <q-item
                v-if="authStore.user.emailVerified"
                clickable
                v-close-popup
                to="/mypage/profile"
              >
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item v-else clickable v-close-popup>
                <q-item-section class="text-red" @click="verifyEmail">
                  이메일을 인증해주세요
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="handleLogout">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyle">
      <router-view />
    </q-page-container>

    <AuthDialog v-model="authDialog" />
  </q-layout>
</template>
<script setup>
import { computed, ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import {
  logout,
  generateDefaultPhotoURL,
  sendVerificationEmail,
} from 'src/services';
import AuthDialog from 'src/components/auth/AuthDialog.vue';

const router = useRouter();
const authStore = useAuthStore();

// 2. 그리고 라우터.메타정보가 담겨있기때문에 정보를 가져오기위해 라우터 객체를 선언해준다.
const route = useRoute();
// console.dir(route); // .dir 브레이크포인트를 이용해 프로그램 로딩을 잠시 멈추고 해당 부분을 확인을 할 수 있다.

// 2-1. 아래 변수는 기본적인 스타일 속성을 정의(1080px), 그리고 다른 페이지의 설정사항(route.meta)이 있다면 그것으로 변경.
const pageContainerStyle = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
}));

// 다이얼로그의 상태관리(true면 열리고, false면 닫힌다.)
const authDialog = ref(false);

// 로그인버튼 누르면 다이얼로그 실행
const openDialog = () => {
  authDialog.value = true;
};

// 로그아웃
const handleLogout = async () => {
  await logout();
  $q.notify('로그아웃 되었습니다.');
  router.push('/');
};

// 이메일 인증보내기
const verifyEmail = async () => {
  await sendVerificationEmail();
  $q.notify('인증 메일을 보냈습니다. 이메일을 확인해주세요.');
};

const $q = useQuasar();

function changeMode() {
  $q.dark.toggle();
}
watch(
  () => $q.dark.isActive,
  val => {
    $q.localStorage.set('darkMode', val);
  },
);

const darkMode = computed(() =>
  $q.dark.isActive ? 'bg-black text-white-9' : 'bg-white text-grey-9',
);

const mode = computed(() => ($q.dark.isActive ? 'Light' : 'Dark'));

const darkModeActive = $q.localStorage.getItem('darkMode');
if (darkModeActive) {
  $q.dark.set(true);
}
</script>

<style lang="scss" scoped></style>
