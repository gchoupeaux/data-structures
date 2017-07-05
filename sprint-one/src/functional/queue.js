var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var temp = {};
    var i = 1;
    for (var key in storage) {
      temp[i] = storage[key];
      i++;
    }
    temp[0] = value;
    storage = temp;
  };

  someInstance.dequeue = function() {
    var deletedElement = storage[Object.keys(storage).length-1];
    delete(storage[Object.keys(storage).length-1]);
    return deletedElement;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
