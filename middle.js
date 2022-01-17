const middle = function(arr) {
  let arrLength = arr.length;
  let mid = Math.floor(arr.length / 2);
  if (arrLength <= 2) {
    console.log([]);
  } else if (arrLength % 2 === 1) {
    console.log([arr[mid]]);
  } else if (arrLength % 2 === 0) {
    console.log([arr[mid - 1], arr[mid]]);
  }
};

module.exports = middle;