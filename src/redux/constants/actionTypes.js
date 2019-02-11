/*API Constants Begin*/
//API headers are managed in middleware
export let API_BASE_URL = process.env.NODE_ENV === 'production' ? 'http://xx.xxx.xxx.x:xxxx/' : 'http://10.2.0.110:3002/';
export let API_VERSION = 'api/v1/';
export let API_URL = `${API_BASE_URL}${API_VERSION}`;


export const API_URL_BOOKS = `${API_URL}books/`;
export const API_URL_AUTHENTICATE = `${API_URL}authenticate/`;





/*Action Types Begin*/

export const BOOKS_FETCH_REQUEST = 'BOOKS_FETCH_REQUEST';
export const BOOKS_FETCH_SUCCESS = 'BOOKS_FETCH_SUCCESS';
export const BOOKS_FETCH_FAILURE = 'BOOKS_FETCH_FAILURE';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const IS_LOGGED_IN_REQUEST = 'IS_LOGGED_IN_REQUEST';
export const IS_LOGGED_IN_SUCCESS = 'IS_LOGGED_IN_SUCCESS';
export const IS_LOGGED_IN_FAILURE = 'IS_LOGGED_IN_FAILURE';

export const SHOW_ALERT_MESSAGE = 'SHOW_ALERT_MESSAGE';
export const HIDE_ALERT_MESSAGE = 'HIDE_ALERT_MESSAGE';
