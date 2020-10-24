import React, { useEffect, useReducer, useRef } from "react";
import "./index.css";
import Item from "./Item";
import { sumMatrixToSelectedIndex, transformMapToArray } from "../utils/stickyPuzzleUtils";
import { actionSetStickyItem , initialState, reducer } from "./reducer";

const Container = ({ children }) => {
  const [state, action] = useReducer(reducer, initialState);
  const refItems = useRef(new Map()).current;

  useEffect(() => {
    const elements = transformMapToArray(refItems,({key,value}) => ({
      key,
      value: value.getBoundingClientRect()
    }));
    const sizeElements = elements.length;

    const onScroll = () => {
        for(let i = 0; i < sizeElements; i++) {
          let { key , value } = elements[i];
          let spaceFromTop = sumMatrixToSelectedIndex(elements,i,eItem => eItem.value.height);
          let isSticky = window.scrollY > (value.top - (elements[i - 1]?.value?.height || 0));
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
    return () => window.removeEventListener("scroll",onScroll);
    // eslint-disable-next-line
  },[]);

  return <>
    {React.Children.map(children, (e, i) => {
      if(e.type === Item) {
        const { spaceFromTop, isSticky, height } = state.items[i] || {}; 
        const ElementCloned = React.cloneElement(e,{
            refItem : node => {
              refItems.set(i,node);
            },
            isSticky,
            styleElement : {
              marginTop : spaceFromTop + "px"
            },
            stylePlaceholder : {
              height : height + "px",
            }
        })
        return ElementCloned;
      }
      return e;
    })}
  </>;
};

export default Container;
