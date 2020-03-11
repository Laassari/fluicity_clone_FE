import { takeLatest, put } from 'redux-saga/effects';
import Api from 'Api';
import { POST } from '../constants';
import { http } from 'Api';

export function* watchCreatePost() {
  yield takeLatest(POST.CREATE_REQUEST, createPost);
}

export function* watchGetPost() {
  yield takeLatest(POST.GET_POST_REQUEST, getPost);
}

export function* createPost({ payload }) {
  const response = yield http().post('/posts', payload);

  if (response.ok) {
    yield put({ type: POST.SET, payload: response.data });
    yield put({ type: POST.CREATE_SUCCESS });
  } else {
    yield put({ type: POST.CREATE_FAIL, payload: response.data });
  }
}

function* getPost({ payload }) {
  const response = yield Api({
    url: '/posts/' + payload
  });

  if (response.id) {
    yield put({ type: POST.GET_POST_SUCCESS });
    yield put({ type: POST.SET, payload: response });
  } else {
    yield put({ type: POST.GET_POST_FAIL, payload: response });
  }
}
