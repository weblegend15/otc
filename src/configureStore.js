import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './redux/reducers';
import sagas from './redux/sagas';

export const history = createBrowserHistory();
const devToolsOptions = {};
const composeEnhancers = composeWithDevTools(devToolsOptions);

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(sagas);

export default store;