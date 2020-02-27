import { all } from 'redux-saga/effects';

import { watchLoginUser, watchCheckEmailExist, watchSignUp } from './userSaga';

export default function* rootSaga() {
  yield all([watchLoginUser(), watchCheckEmailExist(), watchSignUp()]);
}
