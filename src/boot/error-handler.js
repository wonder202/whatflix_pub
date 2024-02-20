import { boot } from 'quasar/wrappers';
// vue컴포넌트가 아닌 파일에서 notify가져오는 법
import { Notify } from 'quasar';
import { getErrorMessage } from 'src/utils/firebase/error-message';

export default boot(async ({ app }) => {
  app.config.errorHandler = (err, instance, info) => {
    Notify.create(getErrorMessage(err.code));
  };
});
