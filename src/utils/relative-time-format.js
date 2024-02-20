// 상대시간 표시
export function formatRelativeTime(targetTime = new Date('2023-12-28')) {
  // Intl : 국제화와 관련된 기능을 제공하는 js내장객체
  // 인자1. 국가코드, 인자2. 옵션
  const rtf = new Intl.RelativeTimeFormat('ko', {
    numeric: 'auto', // auto로 하면 어제, 그저께 등으로 표시, always로 하면 1일전 등으로 표시.
  });

  const currentTime = new Date();
  const timeDifference = Math.abs(targetTime - currentTime); // Math.abs : 양수표현

  const seconds = Math.floor(timeDifference / 1000); // 초단위
  const minutes = Math.floor(seconds / 60); // 분단위
  const hours = Math.floor(minutes / 60); // 시단위
  const days = Math.floor(hours / 24); // 일단위
  const years = Math.floor(days / 365); // 연단위

  if (years > 0) {
    return rtf.format(-1 * years, 'year');
  } else if (days > 0) {
    return rtf.format(-1 * days, 'day');
  } else if (hours > 0) {
    return rtf.format(-1 * hours, 'hour');
  } else if (minutes > 0) {
    return rtf.format(-1 * minutes, 'minute');
  } else {
    return rtf.format(-1 * seconds, 'second');
  }
  // return rtf.format(-2, 'day'); // 인자1. number, 인자2. 시간단위
  // return timeDifference; // 인자1. number, 인자2. 시간단위
}
