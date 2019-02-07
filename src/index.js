import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';
import './index.css';
import App from './App';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   rootReducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
     <App />
   </Provider>,
document.getElementById('root'),
);