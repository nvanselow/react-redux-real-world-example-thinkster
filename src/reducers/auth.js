import * as Actions from '../constants/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null,
      };
    case Actions.ASYNC_START:
      if (action.subtype === Actions.LOGIN || action.subtype === Actions.REGISTER) {
        return { ...state, inProgress: true };
      }
      break;
    case Actions.UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
