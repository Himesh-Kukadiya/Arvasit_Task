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
        const node = new Node(data);
        if(this.head !== null) node.next = this.head;
        this.head = node;
        this.size++;
    }

    print() {
        let curr = this.head;
        while(curr !== null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    isEmpty() {
        return this.head === null;
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

const l1 = new LinkedList();
l1.push(8);
l1.push(6);
l1.push(4);
l1.push(2);
l1.push(0);
// l1.print()
// console.log();

const l2 = new LinkedList();
l2.push(11);
l2.push(10);
l2.push(9);
l2.push(7);
l2.push(5);
l2.push(3);
l2.push(1);
// l2.print()


function mergeSortedList(l1, l2) {
    let curr1 = l1.head;
    let curr2 = l2.head;
    
    let l3 = new LinkedList();

    while(curr1 !== null && curr2 !== null) {
        if(curr1.data < curr2.data) {
            l3.push(curr1.data)
            curr1 = curr1.next;
        }
        else {
            l3.push(curr2.data);
            curr2 = curr2.next;
        }
    }
    while(curr1 !== null) {
        l3.push(curr1.data)
        curr1 = curr1.next;
    }
    while(curr2 !== null) {
        l3.push(curr2.data)
        curr2 = curr2.next;
    }
    l3.reverse();
    l3.print();
}

mergeSortedList(l1, l2);