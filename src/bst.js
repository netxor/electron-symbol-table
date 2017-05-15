function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insertNode = function (val) {
  var node = {
    data : val,
    left : null,
    right : null
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
};

BinarySearchTree.prototype.contains = function (val) {
    var node = this.root;
    var traverse = function(node) {
        if (!node) return false;
        if (value === node.value) {
            return true;
        } else if (value > node.value) {
            return traverse(node.right);
        } else if (value < node.value) {
            return traverse(node.left);
        }
    };
    return traverse(node);
};
