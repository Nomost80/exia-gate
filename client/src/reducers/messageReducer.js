import { NOTIFICATION_ADDED } from "../actions/messageActions";

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case NOTIFICATION_ADDED:
      return [...state, action.message];
    default:
      return state;
  }
};

export default messageReducer;