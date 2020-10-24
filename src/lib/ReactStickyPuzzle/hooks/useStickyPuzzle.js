import { useReducer, useEffect, useRef } from "react";

const initialState = {
  items: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const useStickyPuzzle = () => {
  const [state, action] = useReducer(reducer, initialState);
  return {};
};

export default useStickyPuzzle;
