import { HOME_PAGE_LOADED } from '../constants/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        articles: action.payload.articles,
      };
    default:
      return state;
  }
};
