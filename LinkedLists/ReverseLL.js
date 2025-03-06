class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    } 
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    push(data) {
        const newNode = new Node(data);
        if(this.isEmpty) newNode.next = this.head;
        this.head = newNode;
        this.size++;
        // console.log(data, "is pushed successfully")
    }

    print() {
        let curr = this.head;
        while(curr !== null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    reverse() {
        if (!this.isEmpty) return "Your list is empty!";
        let prev = null;
        let curr = this.head;
        while(curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
     
}

const ls = new LinkedList();
ls.push(1);
ls.push(2);
ls.push(4);
ls.push(5);
ls.print();
ls.reverse();
console.log()
ls.print();