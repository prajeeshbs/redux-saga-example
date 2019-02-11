import { all } from 'redux-saga/effects';

import { watchBookFetchRequest } from './bookSaga'
import { watchAuthRequest, watchIsLoggedInRequest, watchLogoutRequest } from './authSaga'

export default function* rootSaga() {
   yield all([
    watchAuthRequest(),
    watchBookFetchRequest(),
    watchIsLoggedInRequest(),
    watchLogoutRequest()
   ]);
}