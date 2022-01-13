const takeUntil = function(array, callback) {
  let newArr = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};

/*const takeUntil = (array, callback) => {
  const returnArr = [];
  for (const value of array) {
    // console.log("callback(value)", callback(value));
    if (!callback(value)) {
      returnArr.push(value);
    } else if (callback(value)) {
      return returnArr;
    }
  }
  return returnArr;
};*/

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
