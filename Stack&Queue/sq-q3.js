class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
    }

    underflow() {
        return this.top === -1;
    }

    add(data) {
        this.arr[++this.top] = data;
    }

    remove() {
        if(!this.underflow()) return this.arr[this.top--];
    }

    print() {
        return this.arr.join(" -> ")
    }
}

let s1 = new Stack();

s1.add(1)
s1.add(2)
s1.add(3)
s1.add(4)
s1.add(5)
console.log("Stack 1:", s1.print())

let s2 = new Stack();
s2.add(6)
s2.add(7)
s2.add(8)
s2.add(9)
s2.add(10)
console.log("Stack 2:", s2.print())

class Queue {
    constructor() {
        this.arr = [];
        this.front = -1;
        this.top = -1;
    }

    isEmpty() {
        return this.front === this.top+1;
    }

    enQueue(data) {
        if(this.front == -1) this.front++;
        this.arr[++this.top] = data;
    }

    deQueue() {
        if(!this.isEmpty()) return this.arr[this.front++];
        return "Queue is gone an empty"
    }
    print() {
        return this.arr.join(" -> ");
    }
}

let q = new Queue();
function mergeStacksIntoQueue([...stacks], queue) {
    for(let i = 0; i < stacks.length; i++) {
        while(!stacks[i].underflow()) {
            queue.enQueue(stacks[i].remove())
        }
    }
    return queue;
}
console.log("Queue :", mergeStacksIntoQueue([s1, s2], q).print())