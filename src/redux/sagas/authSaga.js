import { call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import * as types from '../constants/actionTypes';
import utils from '../../utils';

const validateLogin = credentials => {
  return axios.post(types.API_URL_AUTHENTICATE, credentials);
}

function * authorize (action) {
  try {
    const res = yield call(validateLogin, action.payload)
    let token = res.data.auth_token;
    utils.storeUserToken(token)
    yield put({ type: types.AUTH_SUCCESS, token })
    yield put({ type: types.SHOW_ALERT_MESSAGE, msg: 'Logged in Successfully' })
  } catch (err) {
    yield put({ type: types.AUTH_FAILURE, err })
  }
}

export function* watchAuthRequest() {
  yield takeLatest(types.AUTH_REQUEST, authorize)
}


function * checkUserIsLoggedIn () {
  let token = localStorage.getItem("token");
  if(token && token.length > 0) {
    yield put({ type: types.IS_LOGGED_IN_SUCCESS, token })
  } else {
    yield put({ type: types.IS_LOGGED_IN_FAILURE});
  }
}

export function* watchIsLoggedInRequest() {
  yield takeLatest(types.IS_LOGGED_IN_REQUEST, checkUserIsLoggedIn)
}

function * logout (action) {
  try {
    utils.removeUserToken()
    yield put({ type: types.SHOW_ALERT_MESSAGE, msg: 'Logged out Successfully' })
  } catch (err) {
    yield put({ type: types.AUTH_FAILURE, err })
  }
}


export function* watchLogoutRequest() {
  yield takeLatest(types.LOGOUT_REQUEST, logout)
}