import { all } from 'redux-saga/effects';

import { watchLoginUser, watchCheckEmailExist, watchSignUp } from './userSaga';
import { watchCreatePost, watchGetPost } from './postSaga';

export default function* rootSaga() {
  yield all([
    watchLoginUser(),
    watchCheckEmailExist(),
    watchSignUp(),
    watchCreatePost(),
    watchGetPost()
  ]);
}
