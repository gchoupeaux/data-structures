var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {  
  console.log(this.value);
  if (this.value === target) {
    return true;
  } else if (this.children.length) {
    var result = false;
    for (var i = 0; result === false && i < this.children.length; i++) {
      result = this.children[i].contains(target);
    }
    return result;
  } else {
    return false;
  }
};