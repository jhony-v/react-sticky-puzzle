import React, { memo } from "react";

const Item = (props) => {
  const {
    children,
    isSticky,
    styleSticky,
    styleElement,
    stylePlaceholder,
    refItem,
    ...restProps
  } = props;

  const selfStyleElement = {
    ...isSticky && {
      ...styleElement,
      ...styleSticky ? styleSticky : {
        backgroundColor : "white"
      }
    }
  }
  const classNameElement = isSticky ? "sticky__item" : "";
  return (
    <>
      <div {...restProps} ref={refItem} className={classNameElement} style={selfStyleElement}>
        {children}
      </div>
      {isSticky && (
        <div className="sticky__placeholder" style={stylePlaceholder} />
      )}
    </>
  );
};

export default memo(Item);
  