// 퀘이사 유효성 검사 팩토링
const validateRequired = val => !!val || '필수항목 입니다.';

const validateEmail = val => {
  const reg =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return reg.test(val) || '이메일 형식이 아닙니다.';
};

const validatePassword = val => {
  const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  return (
    reg.test(val) ||
    '비밀번호는 영문, 숫자, 특수기호 조합 8자리 이상 입력해주세요.'
  );
};

const validatePasswordConfirm = (password, passwordConfirm) =>
  password === passwordConfirm || '비밀번호가 일치하지 않습니다.';

export {
  validateRequired,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
};
