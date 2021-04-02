import { REMOVE_ALERT, SET_ALERT } from '../types';

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return undefined;

    default:
      return state;
  }
};

export default alertReducer;
