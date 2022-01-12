const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😐😐😐 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  //set an empty array for final result
  const result = {};
  //current string has spaces which will be returned, this deletes any space
  const noSpaceString = string.split(" ").join("");
  //loop through the letters of the string
  for (const letter of noSpaceString) {
    //make sure it is iterating correctly
    //console.log(letter);
    //conditional to add instance of letter to the result
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    };
  }
  return result;
};

console.log(countLetters("lighthouse in the house"))