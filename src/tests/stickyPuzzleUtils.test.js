import { sumMatrixToSelectedIndex, transformMapToArray } from "../lib/ReactStickyPuzzle/utils/stickyPuzzleUtils";

describe("stickyPuzzleUtils functions", () => {
  test("should sum array to index is correct", () => {
    const data = [2, 4, 3];
    let index = 1;
    let sumArray = 0;
    sumArray = sumMatrixToSelectedIndex(data, index,(e)=>e);
    expect(sumArray).toEqual(2);
    index = 3;
    sumArray = sumMatrixToSelectedIndex(data, index,(e)=>e);
    expect(sumArray).toEqual(9);
  });

  test("convert map to array of objects", () => {
    const dataObject = [
      {
        key: "a",
        value: 1,
      },
      {
        key: "b",
        value: 2,
      },
    ];
    const mapValues = [["a",1],["b",2]];
    const transform = transformMapToArray(new Map(mapValues));
    expect(transform).toEqual(dataObject)
  });
});
