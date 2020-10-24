import React from "react";

const Item = ({ children, itemRef, ...restProps }) => {
  return (
    <div {...restProps} ref={itemRef}>
      {children}
    </div>
  );
};

export default Item;
