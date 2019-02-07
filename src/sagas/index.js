import { put, takeLatest, all } from 'redux-saga/effects';
import axios from "axios";


import { watchBookFetchRequest } from './bookSaga'
import { watchAuthRequest } from './authSaga'

export default function* rootSaga() {
   yield all([
    watchAuthRequest(),
    watchBookFetchRequest(),
   ]);
}