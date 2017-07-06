var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  return someInstance; 
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  size : function(){
    return Object.keys(this.storage).length;
  },
  push : function(value){
    this.storage[Object.keys(this.storage).length] = value; 
  },
  pop : function() {
    var deleted = this.storage[Object.keys(this.storage).length-1];
    delete this.storage[Object.keys(this.storage).length-1];
    return deleted;
  }
};


