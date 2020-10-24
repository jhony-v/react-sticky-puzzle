import React from "react";
import "./App.css";
import ReactStickyPuzzle, { StickyPuzzleItem } from "./lib/ReactStickyPuzzle";

const App = () => {
  return (
    <div>
      <ReactStickyPuzzle>
        <Box i={1} />
        <StickyPuzzleItem>
          <h1> title 1</h1>
        </StickyPuzzleItem>
        <Box i={20} />
        <StickyPuzzleItem>
          <h3> title 3</h3>
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