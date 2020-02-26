import { takeLatest, put, takeEvery } from 'redux-saga/effects';
import Api from 'Api';
import { USER } from '../constants';

export function* watchLoginUser() {
  yield takeLatest(USER.LOGIN_REQUEST, loginUser);
}

export function* loginUser({ payload }) {
  const response = yield Api({
    url: '/authenticate/login',
    method: 'POST',
    data: payload
  });
  if (response.errors) {
    yield put({ type: USER.LOGIN_FAIL, payload: response });
  } else {
    yield put({ type: USER.SET, payload: response });
    yield put({ type: USER.LOGIN_SUCCESS });
  }
}

export function* watchCheckEmailExist() {
  yield takeEvery(USER.CHECK_EMAIL_EXISTS_REQUEST, checkEmailExist);
}

function* checkEmailExist({ payload }) {
  const response = yield Api({
    url: '/authenticate/email_exists',
    method: 'POST',
    data: payload
  });

  if (response.success) {
    yield put({
      type: USER.CHECK_EMAIL_EXISTS_SUCCESS
    });
  } else {
    yield put({
      type: USER.CHECK_EMAIL_EXISTS_FAIL,
      payload: response.success
    });
  }
}
