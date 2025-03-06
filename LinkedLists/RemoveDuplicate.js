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

    push(data) {
        let node = new Node(data);
        if(this.head != null) node.next = this.head;
        this.head = node;
        this.size++;
    }

    removeDuplicate() {
        if(this.head === null) {
            console.log("your list is empty");
            return;
        }
        let curr = this.head;
        while(curr != null && curr.next != null) {
            if(curr.data == curr.next.data) curr.next = curr.next.next;
            else curr = curr.next;
        }
    }

    print() {
        let curr = this.head;
        while(curr != null) {
            console.log(curr.data)
            curr = curr.next;
        }
    }
}

let list = new LinkedList();

list.push(5);
list.push(5);
list.push(5);
list.push(5);
list.push(5);
list.push(3);
list.push(3);
list.push(3);
list.push(2);
list.push(1);
list.push(1);
list.push(1);
list.push(1);
list.push(1);
list.removeDuplicate()
list.print();