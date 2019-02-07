import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import authReducer from './authReducer';

const appReducer = combineReducers({
  books: bookReducer,
  token: authReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};

export default rootReducer;
