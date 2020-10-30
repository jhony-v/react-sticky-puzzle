import React from "react";
import "./App.css";
import ReactStickyPuzzle, { StickyPuzzleItem } from "./lib/ReactStickyPuzzle";

const App = () => {
  return (
    <div>
      <Box i={4} />
      <div className="container-sticky" style={{
        width:"300px",
        height:"400px",
        overflowY: "scroll",
        background:"rgba(0,0,100,.1)",
        margin:"auto"
      }}>
      <ReactStickyPuzzle isInElement>
        <Box i={3} />
        <StickyPuzzleItem>
          <div> title 1</div>
        </StickyPuzzleItem>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex maiores impedit sed porro natus animi in dolorum, eaque ipsa officiis voluptatum blanditiis? Quas totam fugiat dolorem expedita vero. Illum!
        <Box i={20} />
        <StickyPuzzleItem>
          <div> title 3</div>
        </StickyPuzzleItem>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex maiores impedit sed porro natus animi in dolorum, eaque ipsa officiis voluptatum blanditiis? Quas totam fugiat dolorem expedita vero. Illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex maiores impedit sed porro natus animi in dolorum, eaque ipsa officiis voluptatum blanditiis? Quas totam fugiat dolorem expedita vero. Illum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex maiores impedit sed porro natus animi in dolorum, eaque ipsa officiis voluptatum blanditiis? Quas totam fugiat dolorem expedita vero. Illum!
        <StickyPuzzleItem>
          <div style={{background:"green"}}> title 3</div>
        </StickyPuzzleItem>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex maiores impedit sed porro natus animi in dolorum, eaque ipsa officiis voluptatum blanditiis? Quas totam fugiat dolorem expedita vero. Illum!
        <StickyPuzzleItem>
          <div style={{background:"lime"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel tempore facilis dolore molestiae adipisci, dolorem, nostrum veritatis nisi laudantium ipsam fuga, placeat asperiores officiis! Quae incidunt porro a in!</div>
        </StickyPuzzleItem>
        <Box i={100} />
      </ReactStickyPuzzle>
      </div>
        
      <ReactStickyPuzzle>
        <Box i={3} />
        <StickyPuzzleItem styleSticky={{
          background : "gray"
        }}>
          <div> title 1</div>
        </StickyPuzzleItem>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex maiores impedit sed porro natus animi in dolorum, eaque ipsa officiis voluptatum blanditiis? Quas totam fugiat dolorem expedita vero. Illum!
        <Box i={20} />
        <StickyPuzzleItem>
          <div> title 3</div>
        </StickyPuzzleItem>
        <StickyPuzzleItem>
          <div style={{background:"lime"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel tempore facilis dolore molestiae adipisci, dolorem, nostrum veritatis nisi laudantium ipsam fuga, placeat asperiores officiis! Quae incidunt porro a in!</div>
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