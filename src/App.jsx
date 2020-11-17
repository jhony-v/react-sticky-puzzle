import React from "react";
import "./App.css";
import ReactStickyPuzzle, { StickyPuzzleItem } from "./lib/ReactStickyPuzzle";

const App = () => {
  return (
    <div>
      <h1 className="sticky__title">STICKY DEMO</h1>
      <Box i={4} />
      <div className="container-sticky" style={{
        width:"300px",
        height:"400px",
        overflowY: "scroll",
        background:"rgba(0,0,100,.1)",
        margin:"auto"
      }}>
      <ReactStickyPuzzle inElement>
        <Box i={3} />
        <StickyPuzzleItem>
          <div> STICKY 1</div>
        </StickyPuzzleItem>
        <Box i={20} />
        <StickyPuzzleItem>
          <div> STICKY 2</div>
        </StickyPuzzleItem>
        <StickyPuzzleItem>
          <div style={{background:"green"}}> title 3</div>
        </StickyPuzzleItem>
        <StickyPuzzleItem>
          <div style={{background:"lime"}}> STICKY 4</div>
        </StickyPuzzleItem>
        <Box i={100} />
      </ReactStickyPuzzle>
      </div>
        
      <ReactStickyPuzzle>
        <Box i={3} />
        <StickyPuzzleItem styleSticky={{
          background : "gray"
        }}>
          <div className="sticky__root"> STICK 1</div>
        </StickyPuzzleItem>
        <Box i={20} />
        <StickyPuzzleItem>
          <div className="sticky__root"> STICKY 2</div>
        </StickyPuzzleItem>
        <StickyPuzzleItem styleSticky={{
          background : "red"
        }}>
          <div className="sticky__root">STICKY 3</div>
        </StickyPuzzleItem>
        <Box i={100} />
      </ReactStickyPuzzle>

    </div>
  );
};

export const Box = ({ i }) => {
  return Array(i)
    .fill(0)
    .map((e, i) => <h1 key={i} style={{border:"1px solid silver"}}>{i}</h1>);
};

export default App;