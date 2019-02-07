import { call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';


const validateLogin = credentials => {
  const payload = {
    method: 'post',
    data: credentials,
    url: `http://10.2.0.110:3002/api/v1/authenticate`
  }
  return axios(payload)
}

function * authorize (action) {
  try {
    const res = yield call(validateLogin, action.payload)
    //utils.storeSessionData(res.data)
    yield put({ type: AUTH_SUCCESS, token: res.data.auth_token })
  } catch (err) {
    yield put({ type: AUTH_FAILURE, err })
  }
}

export function* watchAuthRequest() {
  yield takeLatest(AUTH_REQUEST, authorize)
}