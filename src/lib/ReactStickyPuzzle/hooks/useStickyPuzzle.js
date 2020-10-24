import { useReducer, useEffect, useRef } from "react";
import { sumMatrixToSelectedIndex, transformMapToArray } from "../utils/stickyPuzzleUtils";

const initialState = {
  items: {},
};

export const TYPE = {
  SET_STICKY_ITEM: "SET_STICKY_ITEM",
};

export const actionSetStickyItem = payload => ({
  type : TYPE.SET_STICKY_ITEM,
  payload
})

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.SET_STICKY_ITEM:
      const { key, values } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [key]: {
            ...state.items[key],
            ...values,
          },
        },
      };
    default:
      return state;
  }
};

const useStickyPuzzle = () => {
  const [state, action] = useReducer(reducer, initialState);
  const refItems = useRef(new Map()).current;

  useEffect(() => {
    const elements = transformMapToArray(refItems,(e) => ({
      key : e.key,
      value : e.value.getBoundingClientRect()
    }));
    const sizeElements = elements.length;

    const onScroll = () => {
        for(let i = 0; i < sizeElements; i++) {
          let { key , value } = elements[i];
          let isSticky = window.scrollY > (value.top - (elements[i - 1]?.value?.top || 0));
          let spaceFromTop = sumMatrixToSelectedIndex(elements,i);

          action(actionSetStickyItem({
             key,
             value: {
               isSticky,
               spaceFromTop,
               height : value.height,
             }
          }))
        }
    }
    window.addEventListener("scroll",onScroll);
    return () => {
      window.removeEventListener("scroll",onScroll);
    }
  },[])

  return {
    state,
  }
};

export default useStickyPuzzle;
