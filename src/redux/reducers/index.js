import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import authReducer from './authReducer';
import alertReducer from './alertReducer';

const appReducer = combineReducers({
  books: bookReducer,
  auth: authReducer,
  alert: alertReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};

export default rootReducer;
