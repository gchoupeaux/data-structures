var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    // 1rst case: we have not head
    if (list.head === null){
      // head = tail
      list.head = Node(value);
      list.tail = Node(value);
      //console.log('add head/tail', list.head.value);
    }
    // 2nd allreday a head
    else {
      var currentNode = list.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = Node(value);
      list.tail = currentNode.next;
      //console.log('add tail', list.tail.value);
    }
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    //console.log('new head', list.head.value);
    return formerHead;
  };

  list.contains = function(target) {
    var currentNode = list.head;
      while (currentNode) {
        if (currentNode.value === target){
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
  };
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
var linkedList = LinkedList();
linkedList.addToTail(4);
linkedList.addToTail(5);
linkedList.removeHead();
*/
/*
 * Complexity: What is the time complexity of the above functions?
 */
