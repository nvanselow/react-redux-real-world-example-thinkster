import { createStore, applyMiddleware, combineReducers } from 'redux';
import { promiseMiddleware } from '../middleware/promiseMiddleware';
import auth from '../reducers/auth';
import common from '../reducers/common';
import home from '../reducers/home';

const reducer = combineReducers({
  auth,
  common,
  home,
});

const middleware = applyMiddleware(promiseMiddleware);

const Store = createStore(reducer, middleware);

export default Store;
