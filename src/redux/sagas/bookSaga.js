import { put, takeLatest, call } from 'redux-saga/effects';
import axios from "axios";
import * as types from '../constants/actionTypes';

function getAllBooks() {
  return axios.get(types.API_URL_BOOKS);
}

function* fetchBooks() {
  //const books = yield fetch('http://10.2.0.110:3002/api/v1/books')
  //                  .then(response => response.json() );
  try {
    const response = yield call(getAllBooks);
    const books = response.data;

    // dispatch a success action to the store
    yield put({ type: types.BOOKS_FETCH_SUCCESS, books});

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.BOOKS_FETCH_FAILURE, error });
  }
}

export function* watchBookFetchRequest() {
  yield takeLatest(types.BOOKS_FETCH_REQUEST, fetchBooks);
}