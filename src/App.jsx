import React from "react";
import "./App.css";
import ReactStickyPuzzle, { StickyPuzzleItem } from "./lib/ReactStickyPuzzle";

const App = () => {
  return (
    <div>
      <ReactStickyPuzzle>
        <Box i={1} />
        <StickyPuzzleItem styleSticky={{
          background:"red"
        }}>
          <h1> title 1</h1>
        </StickyPuzzleItem>
        <Box i={20} />
        <StickyPuzzleItem styleSticky={{
          background : "blue"
        }}>
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
