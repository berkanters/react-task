import { INCREMENT, DECREMENT } from "../types";

export const Increment = () => {
  return {
    type: INCREMENT,
  };
};

export const Decrement = () => {
  return {
    type: DECREMENT,
  };
};
