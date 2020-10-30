# REACT-STICKY-PUZZLE

Library to place the items you want on top in a sticky sequential way.

## Installation

```console
$ npm i react-sticky-puzzle
```

```console
$ yarn add react-sticky-puzzle
```

## Overview code

An easy way to integrate.

```javascript
import React from "react";
import ReactStickyPuzzle, { StickyPuzzleItem } from "react-sticky-puzzle";

function App() {
  return (
    <ReactStickyPuzzle>
      <StickyPuzzleItem styleSticky={{
        backgroundColor: "red"
      }}>
       ...
      </StickyPuzzleItem>
      <StickyPuzzleItem>
       ...
      </StickyPuzzleItem>
    </ReactStickyPuzzle>
  );
}

export default App;
```

Adapt component to scroll container
```javascript
import ReactStickyPuzzle, { StickyPuzzleItem } from "react-sticky-puzzle";

function App() {
  return (
    <div style={{
        width:"300px",
        height:"400px",
        overflowY: "scroll",
        background:"rgba(200,200,255)",
        margin:"auto"
      }}>
    <ReactStickyPuzzle inElement>
      <StickyPuzzleItem>
       ...
      </StickyPuzzleItem>
      <StickyPuzzleItem>
       ...
      </StickyPuzzleItem>
    </ReactStickyPuzzle>
  );
}

export default App;
```

## ReactStickyPuzzle

This component is the main one to encapsulate all the child components. Components that are inside a **StickyPuzzle** component will be affected in order to have a position in the header.

| property | description | type |
| - | - | - |
| onFixed | Emit an event when an item is in fixed position | event |
| inElement | Adapt container to element with scroll | boolean |

## StickyPuzzleItem

Component that will be affected by being inside the* ReactStickyPuzzle* component. These components will be positioned in the header firmly one below the other.
You can customize the styles to your way when you are in fixed position on header.

| property | description | type |
| - | - | - |
| styleSticky | Set style to component when the position is sticky | style |