var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  // storage.size = stackMethods.size;
  // storage.push = stackMethods.push;
  // storage.pop = stackMethods.pop;
  jQuery.extend(storage, stackMethods);
  //storage.stackMethods = Stack.stackMethods
  return storage; 
};


  // var size = function() {
  //   return Object.keys(this).length;
  // };


  var stackMethods = {
  size : function(){
    return Object.keys(this).length-3;
  },
  push : function(value){
   this[Object.keys(this).length] = value; 
  },
  pop : function() {
    var deleted = this[Object.keys(this).length-1];
    delete this[Object.keys(this).length-1];
    return deleted;
  }
};


