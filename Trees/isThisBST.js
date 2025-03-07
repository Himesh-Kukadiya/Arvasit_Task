class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.idx = -1;
    }

    buildTree(nodes) {
        if(nodes[++this.idx] === -1) return null;

        let node = new Node(nodes[this.idx]);
        node.left = this.buildTree(nodes);
        node.right = this.buildTree(nodes);
        return node;
    }

    inOrderTraversal(root, inOrder = []) {
        if(root === null) return;

        this.inOrderTraversal(root.left, inOrder);
        inOrder.push(root.data);
        this.inOrderTraversal(root.right, inOrder);

        return inOrder;
    }

    isBinarySearchTree(root) {
        let inOrder = this.inOrderTraversal(root);
        return inOrder.join('') === inOrder.sort().join('');
    }
}


let nodes = [5, 1, -1, 3, 2, -1, -1, 4, -1, -1, 7, -1, -1] // Binary Search Tree
// let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1] // not a Binary Search Tree
let tree = new BinaryTree();
let rootOrBinaryTree = tree.buildTree(nodes);

// console.log(rootOrBinaryTree.data);

isBST = tree.isBinarySearchTree(rootOrBinaryTree);
console.log("is this BST ?", isBST);