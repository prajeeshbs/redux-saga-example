import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from "axios";



function getAllBooks() {
  return axios({
    method: "get",
    url: "http://10.2.0.110:3002/api/v1/books"
  });
}

function* fetchBooks() {
  //const books = yield fetch('http://10.2.0.110:3002/api/v1/books')
  //                  .then(response => response.json() );
  try {
    const response = yield call(getAllBooks);
    const books = response.data;

    // dispatch a success action to the store
    yield put({ type: "BOOKS_RECEIVED", books});

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

export function* watchBookFetchRequest() {
  yield takeLatest('GET_BOOKS', fetchBooks)
}