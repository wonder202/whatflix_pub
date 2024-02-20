import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from 'src/boot/firebase';
// uuid 파일을 저장할때 고유한 이름으로 저장하기위해 사용
import { v4 as uuidv4 } from 'uuid';
// readAndCompressImage 이미지 압축하기
import { readAndCompressImage } from 'browser-image-resizer';

// 이미지 업로드
export async function uploadImage(file) {
  const filename = `images/${uuidv4()}.${getExtension(file.name)}`;
  const storageRef = ref(storage, filename);
  const thumbnail = await compressImage(file);
  const uploadResult = await uploadBytes(storageRef, thumbnail);
  // getDownloadURL : 에디터에 이미지 띄우기
  // const downloadURL = await getDownloadURL(storageRef); // storageRef 참조객체
  const downloadURL = await getDownloadURL(uploadResult.ref); // ref 참조객체를 가리키는 프로퍼티

  return downloadURL;
}

// 파일 확장자 가져오기
function getExtension(filename) {
  return filename.split('.').pop(); // (파일명)split('.').pop(확장자) 분리
}

// 이미지 압축
async function compressImage(file) {
  return readAndCompressImage(file, {
    quality: 0.8, // quality옵션 default 0.5
  });
}
