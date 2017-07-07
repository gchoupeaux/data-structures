var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  if (bucket.length){
    for (var i = 0; i<bucket.length; i++){
      if (bucket[i][0] === k){
        bucket[i][1] = v;
      }
    }
  }

  bucket.push([k, v]);
  this._storage.set(index,bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i<bucket.length; i++){
    if (bucket[i][0] === k){
      return bucket[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // from the storage index return the bucket
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k){
      bucket.splice(i, 1);
    }
  }
};




/*
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(el, i, collection){
    if (i === index){
      collection.splice(i, 1);
    }
  });
};
*/


