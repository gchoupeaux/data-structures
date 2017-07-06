var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  jQuery.extend(storage, queueMethods);
  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    //var temp = {};
    var i = 1;
    for (var key in this){
      this[i] = this[key];
    }
    this[0] = value;
    //this = temp;
  },
  dequeue: function() {
    var temp = this[Object.keys(this).length-4];
    console.log('test');
    delete this[Object.keys(this).length-4];
    
    return temp;
  },
  size: function() {
    return Object.keys(this).length-3;
  }
};


