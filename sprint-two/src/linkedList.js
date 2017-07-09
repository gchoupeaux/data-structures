var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    
    // 1rst case: we have not head
    // if (list.head === null) {
    //   // head = tail
    //   list.head = Node(value);
    //   list.tail = Node(value);
    //   //console.log('add head/tail', list.head.value);
    // } else {
    //   var currentNode = list.head;
    //   while (currentNode.next) {
    //     currentNode = currentNode.next;
    //   }
    //   currentNode.next = Node(value);
    //   list.tail = currentNode.next;
    //   //console.log('add tail', list.tail.value);
    // }
  
    if (list.head === null){
      list.head = Node('head');
      list.tail = Node('tail');
      var newNode = Node(value);
      list.head.next = newNode;
      list.head.value = newNode.value;
      list.tail.next = newNode;
      list.tail.value = newNode.value;
    } else {
      //  we need:
      // - to connect new node to the last node
      lastNode = list.tail.next;
      lastNode.next = Node(value);
      // - connect tail to the new last node
      list.tail.next = lastNode.next;
      list.tail.value = lastNode.next.value;
    }
    list.length++;
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next.next;
    //console.log('new head', list.head.value);
    list.length--;
    return formerHead;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  
  list.size = function() {
    return list.length;
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
