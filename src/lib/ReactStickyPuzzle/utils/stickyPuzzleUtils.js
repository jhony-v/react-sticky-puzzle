/**
 * Perform the sum of the first index to a selected index
 * @param {Array} array
 * @param {number} limit
 * @returns {number}
 */
export const sumMatrixToSelectedIndex = (array, limit) => {
  return [...array.slice(0, limit)].reduce((i, j) => i + j);
};

/**
 * Transform Map iterator to an array of objects
 * @param {Map} map
 * @param {Function} callbackFilter
 * @returns {Array}
 */
export const transformMapToArray = (map, callbackFilter) => {
  const refArray = [...map];
  return refArray.map(([key, value]) =>
    callbackFilter ? callbackFilter({
      key,
      value,
    }) : {key,value}
  );
};
