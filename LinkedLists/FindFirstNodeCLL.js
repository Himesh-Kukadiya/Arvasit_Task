// // Detect a cycle in a linked list and find the starting node of the cycle.

class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    addFirst(data) {
        let node = new Node(data);
        node.next = this.head;
        if(this.tail === null) this.tail = node;
        this.head = node;
        console.log(data, "inserted at first");
    }

    addLast(data) {
        let node = new Node(data);
        node.next = this.head;
        this.tail = node;
        console.log(data, "inserted at last");
    }

    findCirclesFirstNode() {
        return this.tail.next.data;
    }
}

let cl = new CircularList();

cl.addFirst(1);
cl.addFirst(2);
cl.addFirst(3);
cl.addLast(4);
cl.addLast(5);
cl.addLast(6);

console.log(cl.findCirclesFirstNode())