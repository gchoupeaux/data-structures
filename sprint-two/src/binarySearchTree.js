var BinarySearchTree = function(value) {
  this.left = {};
  this.right = {};
  this.value = value;
  
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left.value === undefined) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    } 
  } else {
    if (this.right.value === undefined) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);  
    } 
  }
};

BinarySearchTree.prototype.contains = function(target) {
  //check if root is target
  if (this.value === target) {
    return true;
  } else {
    if (this.right.value) {
      return this.right.contains(target);
    }
    if (this.left.value) {
      return this.left.contains(target);
    }
  } 
  return false;
};

//should execute a callback on every value in a tree using "depthFirstLog"
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //check if root is target
  if (this.value) {
    //console.log(this.value);
    callback(this.value);
    if (this.right.value) {
      this.right.depthFirstLog(callback);
    }
    if (this.left.value) {
      this.left.depthFirstLog(callback);
    }
  } 
};

// BinarySearchTree.prototype.findNearestNum = function(target){
//   //
//   this.depthFirstLog(function(){

//   });
// }


BinarySearchTree.prototype.minVal = function(){
  var n = 0;
  var node = this;
  while(node.left.value){
    console.log('node value' + n + ' ' + node.value);
    node = node.left;
    n ++;
    console.log('node value' + n + ' ' + node.value);
  }
  return node.value;
};


































