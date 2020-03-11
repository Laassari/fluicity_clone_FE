import { takeLatest, put } from 'redux-saga/effects';
import Api from 'Api';
import { POST } from '../constants';

export function* watchCreatePost() {
  yield takeLatest(POST.CREATE_REQUEST, createPost);
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
  const response = yield Api({
    method: 'POST',
    url: '/posts',
    data: payload
  });

  if (response.id) {
    yield put({ type: POST.CREATE_SUCCESS });
    yield put({ type: POST.SET, payload: response });
  } else {
    yield put({ type: POST.CREATE_FAIL, payload: response });
  }
}
