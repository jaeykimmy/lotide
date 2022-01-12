const findKeyByValue = function(object, value) {
  //console.log(Object.keys(objectKey));
  if (!Object.values(object).includes(value)) {
    console.log(undefined);
  }
  for (let key of Object.keys(object)) {
    //console.log(key);
    if (object[key] === value) {
      console.log(key);
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama";
findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined;