var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  delete(this._storage[item]);
};

setPrototype.size = function() {
  return Object.keys(this._storage).length;
};


//Using your understanding of hash tables, refactor your set implementation 
//from above to run in constant time

/*
 * Complexity: What is the time complexity of the above functions?
 */
