import React, { memo } from "react";

const Item = (props) => {
  const {
    children,
    isSticky,
    styleSticky,
    refItem,
    ...restProps
  } = props;

  const selfStyleElement = {
    ...isSticky && {
      ...styleSticky ? styleSticky : {
        backgroundColor : "white"
      }
    }
  }
  return (
    <>
      <div {...restProps} ref={refItem} style={selfStyleElement}>
        {children}
      </div>
      <div className="sticky__placeholder"></div>
    </>
  );
};

export default memo(Item);
  