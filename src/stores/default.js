import { createStore, applyMiddleware } from 'redux';
import { TOGGLE, HOME_PAGE_LOADED } from '../constants/actions';
import { promiseMiddleware } from '../middleware/promiseMiddleware';

const defaultState = {
  checked: false,
  appName: 'conduit',
  articles: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, checked: !state.checked };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        articles: action.payload.articles,
      };
    default:
      return state;
  }
};

const Store = createStore(reducer, applyMiddleware(promiseMiddleware));

export default Store;
