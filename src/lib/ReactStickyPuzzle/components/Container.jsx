import React, { useEffect, useReducer, useRef } from "react";
import "../css/index.css";
import Item from "./Item";
import { sumMatrixToSelectedIndex, transformMapToArray } from "../utils/stickyPuzzleUtils";
import { actionSetStickyItem , initialState, reducer } from "./reducer";

const Container = ({ children, onFixed }) => {  
  const [state, action] = useReducer(reducer, initialState);
  const refItems = useRef(new Map()).current;

  useEffect(() => {
    const elements = transformMapToArray(refItems,({key,value}) => ({
      key,
      isSticky : true, 
      element : value,
      value: value.getBoundingClientRect(),
    }));
    const sizeElements = elements.length;

    const onScroll = () => {
        for(let i = 0; i < sizeElements; i++) {
          let { key, value, element } = elements[i];
          let spaceFromTop = sumMatrixToSelectedIndex(elements,i,item => item.value.height);
          let isSticky = window.scrollY > (value.top - (elements[i - 1]?.value?.height || 0));
          let verifiyStickyChange = () => {
            if(elements[i].isSticky === isSticky){
              elements[i].isSticky = !isSticky;
              action(actionSetStickyItem({
                key,
                value : {
                  isSticky
                }
              }))
              }
          }
          if(isSticky) {
            element.classList.add("sticky__item");
            element.style.marginTop = spaceFromTop + "px";
            element.nextSibling.style.height = value.height + "px";
            if(elements[i].isSticky) {
              onFixed && onFixed();
            }
          } 
          else {
            element.classList.remove("sticky__item");
            element.nextSibling.style.height = "0px";
          }
          verifiyStickyChange();
        }
    }
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll);
    // eslint-disable-next-line
  },[]);

  return React.Children.map(children, (e, i) => {
      if(e.type === Item) {
        const { isSticky } = state.items[i] || {};
        const ElementCloned = React.cloneElement(e,{
            refItem : node => {
              refItems.set(i,node);
            },
            isSticky
        })
        return ElementCloned;
      }
      return e;
  });
};

export default Container;
