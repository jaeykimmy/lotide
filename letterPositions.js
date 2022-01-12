const letterPositions = function(sentence) {
  //set an object for final result
  const results = {};
  //loop through the letters of the string
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    //account for possible spaces in the sentence, if there are then skip it with continue
    if (letter === " ") {
      continue;
    }
    //push each instance to array
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
      //longer version:
      //results[letter] = [];
      //results[letter].push(i)
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));