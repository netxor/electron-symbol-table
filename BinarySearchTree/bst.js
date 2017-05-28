import * as global from './global';

export function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.makeNode = function(value) {
    var node = {};
    node.value = value;
    node.left = null;
    node.right = null;
    return node;
};

BinarySearchTree.prototype.add = function(value) {
    var currentNode = this.makeNode(value);
    if (!this.root) {
        this.root = currentNode;
    } else {
        this.insert(currentNode);
    }
    return this;
};

BinarySearchTree.prototype.insert = function(currentNode) {
    var value = currentNode.value;
    var traverse = function(node) {
        if (value > node.value) {
            if (!node.right) {
                node.right = currentNode;
                return;
            } else traverse(node.right);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = currentNode;
                return;
            } else traverse(node.left);
        }
    };
    traverse(this.root);
};

BinarySearchTree.prototype.contains = function(value) {
    var node = this.root;
    var traverse = function(node) {
        if (!node) return false;
        if (value === node.value) {
            console.log("true");
            return true;
        } else if (value > node.value) {
            return traverse(node.right);
        } else if (value < node.value) {
            return traverse(node.left);
        }
    };
    return traverse(node);
};

export const binaryTree = () => {
  const bst = new BinarySearchTree();

  for (let i = 0; i < global.list.length; i++) {
    bst.contains(global.list[i]);
  }

  //console.log(bst);
}

//export default binaryTree;
//export default BinarySearchTree;

/*
class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    insertNode (val) {
      var node = {
        data: val,
        left: null,
        right: null
      };

      var currentNode;

      if (!this.root) {
        this.root = node;
      } else {
        currentNode = this.root;
        while (currentNode) {
          if (val < currentNode.data) {
            if (!currentNode.left) {
              currentNode.left = node;
              break;
            } else {
              currentNode = currentNode.left;
            }
          } else if (val > currentNode.data) {
            if (!currentNode.right) {
              currentNode.right = node;
              break;
            } else {
              currentNode = currentNode.right;
            }
          } else {
            console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
            break;
          }
        }
      }
    }

    containsNode (val) {
      var node = this.root;
      var traverse = function(node) {
          if (!node) return false;
          if (value === node.value) {
                            console.log(value + " found");
              return true;
          } else if (value > node.value) {
              return traverse(node.right);
          } else if (value < node.value) {
              return traverse(node.left);
          }
      };
      return traverse(node);
    }
  }

export default BinarySearchTree;
*/
