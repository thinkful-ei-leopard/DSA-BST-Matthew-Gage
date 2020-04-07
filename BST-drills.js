const BST = require('./BinarySearchTree');

function treeHeight(tree) {
  if (!tree) {
    return 0;
  }
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}

function isBST(tree) {
  if(!tree) {
    return true;
  }
  if(tree.left > tree.parent || tree.right < tree.parent) {
    return false;
  }
  if(!isBST(tree.left) || !isBST(tree.right)) {
    return false;
  }
  return true;
}

function main() {
  let bst = new BST;
  bst.insert('E');
  bst.insert('A');
  bst.insert('S');
  bst.insert('Y');
  bst.insert('Q');
  bst.insert('U');
  bst.insert('E');
  bst.insert('S');
  bst.insert('T');
  bst.insert('I');
  bst.insert('O');
  bst.insert('N');
  return isBST(bst);
}

console.log(main());