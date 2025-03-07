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
        if(nodes[++this.idx] === -1)return null

        let root = new Node(nodes[this.idx])
        root.left = this.buildTree(nodes)
        root.right = this.buildTree(nodes)

        return root;
    }

    height(root) {
        if(root === null) return 0;
        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1]
let tree = new BinaryTree();
let root = tree.buildTree(nodes);

console.log("Height of tree is :", tree.height(root));