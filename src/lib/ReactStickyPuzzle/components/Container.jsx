import React, { useCallback, useEffect, useReducer, useRef } from "react";
import "../css/index.css";
import Item from "./Item";
import { sumMatrixToSelectedIndex, transformMapToArray } from "../utils/stickyPuzzleUtils";
import { actionSetStickyItem , initialState, reducer } from "./reducer";

const Container = ({ children, onFixed, inElement }) => {  
  const [state, action] = useReducer(reducer, initialState);
  const refItems = useRef(new Map()).current;
  const refContainerElement = useRef(null);

  // Get elements with data in array of objects
  const getArrayElements = () => transformMapToArray(refItems,({key,value}) => ({
    key,
    isSticky : true, 
    element : value,
    bounding: value.getBoundingClientRect(),
  }));

  // Get data elements and length of elements
  const propsElements = () => {
    const elements = getArrayElements();
    const lengthElements = elements.length;
    return {
      elements,
      lengthElements
    }
  }

  // Emit and destroy scroll event 
  const onScrollEvent = (element,onScrollCallback) => {
    element.addEventListener("scroll",onScrollCallback);
    return () => element.removeEventListener("scroll",onScrollCallback);
  }

  // Dispatch event action to set sticky item
  const setActionSticky = (element,{key,isSticky}) => {
    if(element.isSticky === isSticky){
      element.isSticky = !isSticky;
      action(actionSetStickyItem({
        key,
        value : {
          isSticky
        }
      }))
    }
  }

  const dispatchOnFixedIsSticky = (element) => {
    if(element.isSticky) {
      onFixed && onFixed();
    }
  }

  // Get the sum total of the height of the elements up to an index  
  const getSumTotalOfHeightElementsLimit = (elements) => {
    const el = elements;
    return (index) => sumMatrixToSelectedIndex(el,index,item => item.bounding.height);
  }
  
  // Scrolling element
  useEffect(() => {
    const {  elements, lengthElements } = propsElements();
    const sumTotalHeight = getSumTotalOfHeightElementsLimit(elements);

    const onScroll = (e) => {
      const { scrollTop, offsetTop, offsetLeft, clientWidth } = e.target;
      for(let i = 0; i < lengthElements; i++) {
        let { key, bounding, element } = elements[i];
        let spaceFromTop = sumTotalHeight(i);
        const boundingMarginTop = (offsetTop - window.scrollY) + spaceFromTop;
        const isSticky = scrollTop > ( bounding.top - (elements[i - 1]?.bounding?.height || 0) - boundingMarginTop );
        if (isSticky) {
          let topPosition = boundingMarginTop - window.scrollY;
          element.style.position = "fixed";
          element.style.width = clientWidth + "px";
          element.style.top = topPosition + "px";
          element.style.left = offsetLeft + "px";
          dispatchOnFixedIsSticky(elements[i]);
        }
        else {
          element.style.removeProperty("position");
        }
        setActionSticky(elements[i],{ key, isSticky });
      }
    }
    if(inElement) {
      refContainerElement.current = refContainerElement.current.parentNode;
      return onScrollEvent(refContainerElement.current,onScroll);
    }
    // eslint-disable-next-line
  },[inElement])

  useEffect(() => {
    if(inElement) {
      const {  elements, lengthElements } = propsElements();
      const sumTotalHeight = getSumTotalOfHeightElementsLimit(elements);
      const onScroll = (e) => {
        const { offsetTop } = refContainerElement.current;
        for(let i = 0; i < lengthElements; i++) {
          let { element } = elements[i];
          let spaceFromTop = sumTotalHeight(i);
          element.style.top = ((offsetTop - window.scrollY) + spaceFromTop) + "px";
        }      
      }
      return onScrollEvent(window,onScroll);
    }
  // eslint-disable-next-line
  },[inElement]);


  // Scrolling in screen
  const scrollPage = useCallback(() => {
    const {  elements, lengthElements } = propsElements();
    const sumTotalHeight = getSumTotalOfHeightElementsLimit(elements);

    const onScroll = () => {
        for(let i = 0; i < lengthElements; i++) {
          let { key, bounding, element } = elements[i];
          let spaceFromTop = sumTotalHeight(i);
          let isSticky = window.scrollY > (bounding.top - (elements[i - 1]?.bounding?.height || 0));
          if(isSticky) {
            element.classList.add("sticky__item");
            element.style.marginTop = spaceFromTop + "px";
            element.nextSibling.style.height = bounding.height + "px";
            dispatchOnFixedIsSticky(elements[i]);
          } 
          else {
            element.classList.remove("sticky__item");
            element.nextSibling.style.height = "0px";
          }
          setActionSticky(elements[i],{ key, isSticky });
        }
    }
    return onScrollEvent(window,onScroll);
    // eslint-disable-next-line
  },[])

  // scrolling by default of type page
  useEffect(() => {
    !inElement && scrollPage();
  },[scrollPage,inElement]);

  return(
    <div ref={refContainerElement}>
    {React.Children.map(children, (e, i) => {
      if(e.type === Item) {
        const { isSticky } = state.items[i] || {};
        const ElementCloned = React.cloneElement(e,{
            refItem : node => refItems.set(i,node) ,
            isSticky
        })
        return ElementCloned;
      }
      return e;
    })}
    </div>
  )
};

export default Container;
