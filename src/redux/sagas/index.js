import { all, fork } from 'redux-saga/effects';

import authSaga from './authSaga'
import bookSaga from './bookSaga'

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(bookSaga)
  ]);
}