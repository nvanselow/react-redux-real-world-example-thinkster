import { createStore } from 'redux';
import { TOGGLE } from '../constants/actions';

const defaultState = { checked: false };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, checked: !state.checked };
    default:
      return state;
  }
};

const Store = createStore(reducer);

export default Store;
