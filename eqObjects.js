const eqArrays = require('./eqArrays');

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
    }
  }
  return true;
};

module.exports = eqObjects;
