// implement follwing travarsal methods.
// 1. pre-order
// 2. in-order
// 3. post-order

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
        node.left = this.buildTree(nodes)
        node.right = this.buildTree(nodes)
        return node;
    }

    preOrderTraversal(root) {
        if(root === null) return;
        console.log(root.data);
        this.preOrderTraversal(root.left)
        this.preOrderTraversal(root.right)
    }
    
    inOrderTraversal(root) {
        if(root === null) return;
        this.inOrderTraversal(root.left)
        console.log(root.data);
        this.inOrderTraversal(root.right)
    }
    
    postOrderTraversal(root) {
        if(root === null) return;
        this.postOrderTraversal(root.left)
        this.postOrderTraversal(root.right)
        console.log(root.data);
    }
}

let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1]
let tree = new BinaryTree();
let root = tree.buildTree(nodes);

console.log("Pre Order Traversal");
tree.preOrderTraversal(root)
console.log("In Order Traversal");
tree.inOrderTraversal(root)
console.log("Post Order Traversal");
tree.postOrderTraversal(root)
