const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
//console.log(eqArrays([1, 2, 3], [1, 2, 3]))
//console.log(eqArrays([1, 2, 3], [3, 2, 1]))

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`💯💯💯 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😐😐😐 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (Array.isArray(item)) {
      console.log(finalArr.push(item))
    }
  }
};
flatten([1, 2, [3, 4], 5, [6]]);

//recursion
// const flatten = function(arr) {
//   let finalArr = [];
//   finalArr.push(arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       flatten(item);
//     } else {
//       console.log(item)
//     }
//   }))
// };
// flatten([1, 2, [3, 4], 5, [6]])