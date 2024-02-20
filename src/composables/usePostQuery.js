// 파라미터 url 연동 : 새로고침 시에도 정렬과 같이 선택된 기능이 보존되도록.
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const usePostQuery = () => {
  const route = useRoute();
  const router = useRouter();

  const category = computed({
    get: () => route.query.category || '', // http://로컬호스트/?category
    set: val =>
      router.push({
        query: {
          ...route.query, // http://로컬호스트/?category=쿼리값
          category: val || undefined,
        },
      }),
  });

  // 순위 정렬(최신순 등)
  const sort = computed({
    get: () => route.query.sort || 'createAt',
    set: val =>
      router.push({
        query: {
          ...route.query,
          sort: val,
        },
      }),
  });

  // 태그
  const tags = computed({
    get: () => route.query.tags?.split(',') || [], // 여러개의 태그를 가져올때 url에 태그,태그 같은 형식으로 표시
    set: val =>
      router.push({
        query: {
          ...route.query,
          tags: val.length === 0 ? undefined : val.join(','),
        },
      }),
  });
  return {
    category,
    sort,
    tags,
  };
};
