import * as types from '../constants/actionTypes'
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case types.SHOW_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.msg,
        showAlert: true
      };
    case types.HIDE_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: {},
        showAlert: false
      };
    default:
      return state;
  }
}