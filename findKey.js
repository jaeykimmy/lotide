const findKey = function(object, value) {
  //console.log(Object.keys(objectKey));
  /*if (!Object.values(object).includes(value)) {
    console.log(undefined);
  }*/
  for (let key of Object.keys(object)) {
    //console.log(key);
    //console.log(value(object[key]))
    if (value(object[key])) {
      console.log(key);
      break;
    }
  }
}

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"