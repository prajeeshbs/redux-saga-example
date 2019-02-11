import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import './index.css';
import App from './App';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
   rootReducer,
   composeEnhancer(applyMiddleware(sagaMiddleware, logger)),
);
sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
     <App />
   </Provider>,
document.getElementById('root'),
);