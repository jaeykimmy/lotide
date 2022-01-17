const middle = function(arr) {
  let arrLength = arr.length;
  let mid = Math.floor(arr.length / 2);
  if (arrLength <= 2) {
    return [];
  } else if (arrLength % 2 === 1) {
    return [arr[mid]];
  } else if (arrLength % 2 === 0) {
    return [arr[mid - 1], arr[mid]];
  }
};

middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]

module.exports = middle;