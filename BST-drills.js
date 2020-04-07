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

//if !tree.parent.left tree.parent.parent
//else tree.parent.left
function thirdLargest(tree) {
  let largest = tree.right;
  while(largest.right) {
    largest = largest.right;
  }
  if(!largest.parent.left) {
    return largest.parent.parent;
  } else {
    largest = largest.parent.left;
    while(largest.right) {
      largest = largest.right;
    }
    return largest;
  }
}

function isBalancedBST(tree) {
  if (!tree) {
    return true;
  }
  let heightDifference = Math.abs(treeHeight(tree.left) - treeHeight(tree.right));
  if (heightDifference > 1) {
    return false;
  } else {
    return isBalancedBST(tree.left) && isBalancedBST(tree.right);
  }
}

function isOneOfTheseThingsNotLikeTheOther(arr1, arr2) {
  if (arr1[0] != arr2[0]) {
    return false;
  }
  console.log(arr1.sort(), arr2.sort());
  if (arr1.sort().join(',') === arr2.sort().join(',')) {
    return true;
  } else {
    return 'Wat';
  }

}

function main() {
  let bst = new BST;
  
  bst.insert(3);
  bst.insert(6);
  bst.insert(4);
  bst.insert(5);
  bst.insert(7);
  bst.insert(8);
  bst.insert(9);
  bst.insert(1);
  bst.insert(0);
  bst.insert(2);
  return isOneOfTheseThingsNotLikeTheOther([3, 1, 5, 2, 4, 6, 0], [3, 5, 4, 6, 1, 0, 2]);
}

console.log(main());