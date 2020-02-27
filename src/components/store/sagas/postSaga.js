import { takeLatest, put, delay, takeEvery } from 'redux-saga/effects';
import Api from 'Api';
import { POST } from '../constants';

export function* watchCreatePost() {
  yield takeLatest(POST.CREATE_REQUEST, createPost);
}

export function* createPost({ payload }) {
  // fake async. TODO: integrate with the backend
  yield delay(1000);
  yield put({ type: POST.CREATE_SUCCESS });
}
