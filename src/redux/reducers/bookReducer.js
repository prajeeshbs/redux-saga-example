import * as types from '../constants/actionTypes'
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case types.BOOKS_FETCH_REQUEST:
        return { ...state, loading: true };
    case types.BOOKS_FETCH_SUCCESS:
      return {
        ...state,
        books: action.books,
        loading: false
      };
    default:
      return state;
  }
}

