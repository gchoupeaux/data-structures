var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.index = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // 
  
  this._storage.set(index, v);
  
  
  /*
  
  
  //check if there is a value in the index
  if (this._storage.get(index)){
    var temp = this._storage.get(index);
    this._storage.set(index, [temp,v]);
  } else {
    
  }
*/
};

HashTable.prototype.retrieve = function(k) {
  // key, index association
  var index = getIndexBelowMaxForKey(k, this._limit);
  // returning value using index
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this.index.splice(index,1);
  this._storage.each(function(el, i, collection){
    if (i === index){
      collection.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


