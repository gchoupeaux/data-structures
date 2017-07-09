

// Instantiate a new graph
var Graph = function() {
  this.nodes = []; 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push({
    value: node,
    edges: [],
  });
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  // remove node from graph
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      //console.log('before splice', this.nodes);
      this.nodes.splice(i, 1);
      //console.log('after splice', this.nodes);
      break;
    }
  }
  
  // remove node from edge of other node 
  for (let i = 0; i < this.nodes.length; i++) {
    for (var j = 0; j < this.nodes[i].edges.length; j++) {
      if (this.nodes[i].edges[j].value === node) {
        this.nodes[i].edges.splice(j, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // find the 2 nodes using value
  var nodeStartIndex = -1;
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      nodeStartIndex = i;
    }
  }
  if (nodeStartIndex > -1) {
    for (let i = 0; i < this.nodes[nodeStartIndex].edges.length; i++) {
      if (this.nodes[nodeStartIndex].edges[i].value === toNode) {
        return true;
      }
    }
  }

  var nodeEndIndex = -1;
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === toNode) {
      nodeEndIndex = i;
    }
  }
  if (nodeEndIndex > -1) {
    for (let i = 0; i < this.nodes[nodeEndIndex].edges.length; i++) {
      if (this.nodes[nodeEndIndex].edges[i].value === fromNode) {
        return true;
      }
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var nodeStartIndex, nodeEndIndex; 
  var nbrNodeFound = 0;

  // find the 2 nodes using value
  for (var i = 0; nbrNodeFound < 2 && i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      nodeStartIndex = i;
      nbrNodeFound++;
    }
    if (this.nodes[i].value === toNode) {
      nodeEndIndex = i;
      nbrNodeFound++;
    }
  }

  // update edges
  //console.log(this.nodes[nodeStartIndex].edges.push('start node', this.nodes[nodeStartIndex]));
  this.nodes[nodeStartIndex].edges.push(this.nodes[nodeEndIndex]);
  this.nodes[nodeEndIndex].edges.push(this.nodes[nodeStartIndex]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
  // find fromNode using value
  var nodeStartIndex = -1;
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      nodeStartIndex = i;
    }
  }

  // find toNode using value
  var nodeEndIndex = -1;
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === toNode) {
      nodeEndIndex = i;
    }
  }
  
  //find index of the edges
  if (nodeStartIndex > -1) {
    for (let i = 0; i < this.nodes[nodeStartIndex].edges.length; i++) {
      if (this.nodes[nodeStartIndex].edges[i].value === toNode) {
        // remove edge
        console.log(this.nodes[nodeStartIndex]);
        this.nodes[nodeStartIndex].edges.splice(i, 1);
      }
    }
  }

  //find index of the edges
  if (nodeEndIndex > -1) {
    for (let i = 0; i < this.nodes[nodeEndIndex].edges.length; i++) {
      if (this.nodes[nodeEndIndex].edges[i].value === fromNode) {
        // remove edge
        console.log(this.nodes[nodeEndIndex]);
        this.nodes[nodeEndIndex].edges.splice(i, 1);
      }
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate through nodes 
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
    //for each node, execute callback
};

Graph.prototype.maxEdgesNode = function() {
  var edges = [];
  for (var i = 0; i < this.nodes.length; i++) {
    edges.push(this.nodes[i].edges.length);
  }
  return Math.max.apply(null, edges);
};
























