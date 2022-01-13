const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  } else {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
}
  return true;
};

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  //console.log(arr1)
  let arr2 = Object.keys(object2);
  //console.log(arr2)
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let key of arr1) {
      //console.log(object1[key])
      //console.log(object2[key])
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    }
    else if (object1[key] !== object2[key]) {
    return false;
  }
}
  }
  return true;
}

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`💯💯💯 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`😐😐😐 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false