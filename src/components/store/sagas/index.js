import { all } from 'redux-saga/effects';

import { watchLoginUser, watchCheckEmailExist } from './userSaga';

export default function* rootSaga() {
  yield all([watchLoginUser(), watchCheckEmailExist()]);
}
