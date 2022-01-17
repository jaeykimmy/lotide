const tail = function(arr) {
  return arr.filter(i => i !== arr[0]);
};

module.exports = tail;
