import { ADD_NOTIFICATION } from "../actions/messageActions";

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.message];
    default:
      return state;
  }
};

export default messageReducer;