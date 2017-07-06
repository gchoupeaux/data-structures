var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};

};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value){
  var i = 1;
  for (let key in this.storage){
    this.storage[i] = this.storage[key];
    i++;
  }
  this.storage[0] = value;
};

Queue.prototype.dequeue = function(){
  var deleted = this.storage[Object.keys(this.storage).length-1];
  delete(this.storage[Object.keys(this.storage).length-1]);
  return deleted;
};


//assuming(referencesReturn).expect(/return/.test(constructor)).to.be.true;
