const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💯💯💯 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😐😐😐 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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
middle([1]);
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 3, 5, 8, 10, 15]);