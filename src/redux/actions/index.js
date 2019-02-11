import * as types from '../constants/actionTypes'
export const getBooks = () => ({
  type: types.BOOKS_FETCH_REQUEST,
});

export const handleAuth = (username, password) => ({
  type: types.AUTH_REQUEST,
  payload: { username, password }
});

export const checkAlreadyLoggedIn = () => ({
  type: types.IS_LOGGED_IN_REQUEST,
});

export const logout = () => ({
  type: types.LOGOUT_REQUEST,
});