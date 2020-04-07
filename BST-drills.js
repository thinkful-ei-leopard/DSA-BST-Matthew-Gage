const BST = require('./BinarySearchTree');

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
  return bst;
}

console.log(main());