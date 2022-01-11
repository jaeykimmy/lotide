const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😐😐😐 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {

  let joinedArrayOne = arr1.join('');
  let joinedArrayTwo = arr2.join('');
  console.log(joinedArrayTwo);
  if (joinedArrayOne === joinedArrayTwo) {
    return true;
  } else if (joinedArrayOne !== joinedArrayTwo) {
    return false;
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))