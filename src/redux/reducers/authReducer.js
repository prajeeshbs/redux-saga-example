import * as types from '../constants/actionTypes'
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case types.AUTH_REQUEST:
        return { ...state, loading: true };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false
      };
    case types.AUTH_FAILURE:
      return {
        ...state,
        invalidLogin: true,
        loading: false
      };
    case types.IS_LOGGED_IN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false
      }
    default:
      return state;
  }
}


