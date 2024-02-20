// 같은 로직 묶기(tag)
export const useTags = options => {
  const { tags, updateTags, maxLengthMessage } = options || {};

  const addTag = newTag => {
    const isEventHandler = typeof newTag !== 'string'; // 새로운 태그의 타입이 스트링인지 확인
    const tagValue = isEventHandler
      ? newTag.target.value.replace(/ /g, '') // isEventHandler요청O
      : newTag.replace(/ /g, ''); // isEventHandler요청X

    if (!tagValue) {
      return;
    }
    if (tags.value.length >= 10) {
      $q.notify(maxLengthMessage);
      return;
    }
    if (tags.value.includes(tagValue) === false) {
      // emit('update:tags', [...props.tags, tagValue]);
      // 기존 로직의 emit은 외부에서 사용못하니 updateTags라는 옵션으로 줌.
      updateTags([...tags.value, tagValue]);
    }
    if (isEventHandler) {
      // isEventHandler에서 요청이 오면 초기화
      newTag.target.value = '';
    }
  };

  const removeTag = index => {
    const model = [...tags.value]; // 배열 재생성
    model.splice(index, 1); // index값 잘라내기
    // emit('update:tags', model); // n번째 값이 삭제된 태그 배열 재업로드
    updateTags(model);
  };
  return {
    addTag,
    removeTag,
  };
};
