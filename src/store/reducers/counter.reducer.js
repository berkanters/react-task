import { INCREMENT, DECREMENT } from "../types";

const INITIAL_STATE = {
  val: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, val: state.val + 1 };

    case DECREMENT:
      return { ...state, val: state.val - 1 };

    default:
      return state;
  }
};

export default reducer;
