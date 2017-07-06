var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    var i = 1;
    for (var key in this.storage) {
      this.storage[i] = this.storage[key];
      i++;
    }
    this.storage[0] = value;
  },
  dequeue: function(){
    var temp = this.storage[Object.keys(this.storage).length-1];
    delete(this.storage[Object.keys(this.storage).length-1]);
    return temp;
  },
  size: function(){
    return Object.keys(this.storage).length;
  }
};


