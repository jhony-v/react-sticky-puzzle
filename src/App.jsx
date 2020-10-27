import React from "react";
import "./App.css";
import ReactStickyPuzzle, { StickyPuzzleItem } from "./lib/ReactStickyPuzzle";

const App = () => {
  return (
    <div>
      <ReactStickyPuzzle>
        <Box i={1} />
        <StickyPuzzleItem styleSticky={{background:"lime"}}>
          <div style={{background:"red",padding:"50px"}}> title 1</div>
        </StickyPuzzleItem>
        <Box i={20} />
        <StickyPuzzleItem styleSticky={{background:"orange"}}>
          <div style={{background:"blue"}}> title 3</div>
        </StickyPuzzleItem>
        <Box i={100} />
      </ReactStickyPuzzle>
    </div>
  );
};

export const Box = ({ i }) => {
  return Array(i)
    .fill(0)
    .map((e, i) => <h1 key={i}>{i}</h1>);
};

export default App;