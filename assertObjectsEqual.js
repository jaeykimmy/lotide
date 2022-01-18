const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    return `💯💯💯 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    return `😐😐😐 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
};

module.exports = assertObjectsEqual;
