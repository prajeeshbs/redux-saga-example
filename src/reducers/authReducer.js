import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';



// const initialState = {
//   token: localStorage.getItem('token'),
//   error: null
// };

// const authReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case AUTH_REQUEST:
//         return { ...state, loading: true };
//     case AUTH_SUCCESS: {
//       debugger
//       return { ...state, token: payload };
//     }
//     case AUTH_FAILURE: {
//       return { ...state, error: payload }
//     }
//     default:
//       return state;
//   }
// };



export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case AUTH_REQUEST:
        return { ...state, loading: true };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false
      };
    default:
      return state;
  }
}


