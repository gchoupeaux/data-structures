var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  console.log(this._limit);
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  if (bucket.length) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      }
    }
  }
  bucket.push([k, v]);
  this._storage.set(index, bucket);
  
  // check ratio and resize if necessary.
  if (this.ratio() > 75) {
    console.log('insert over', this.ratio());
    this.resize(this._limit * 2);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // from the storage index return the bucket
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  
  // check ratio and resize if necessary.
  if (this.ratio() < 25) {
    
    if (this._limit > 8) {
      console.log('remove under', this.ratio());  
      this.resize(this._limit / 2);
    }
  }
};

HashTable.prototype.ratio = function() {
  var bucket = [];
  var nbrKeyValues = 0;
  for (var i = 0; i < this._limit; i++) {
    bucket = this._storage.get(i);
    if (bucket) {
      nbrKeyValues += bucket.length;
    } 
  }
  return (nbrKeyValues / this._limit) * 100;
};

HashTable.prototype.resize = function(length) {
  
  var tempArr = [];
  var bucket = [];
  
  // put each kv in our temp array
  for (var i = 0; i < this._limit; i++) {
    bucket = this._storage.get(i);
    if (bucket) {
      bucket.forEach(function(kv, i, colection) {
        tempArr.push(kv);
      });
    }
  }

  // resize storage
  this._limit = length;
  this._storage = LimitedArray(this._limit);
  
  console.log('insert in new table');
  

  for (var i = 0; i < tempArr.length; i++) {
    this.insert(tempArr[i][0], tempArr[i][1]);
  }
  //rehash
  // tempArr.forEach(function(kv){
  //   console.log(kv[0], kv[1]);
  //   this.insert(kv[0], kv[1]);
  // });
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


