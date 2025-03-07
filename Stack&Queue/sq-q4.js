class CircularQueue {
    constructor(size) {
        this.arr = [];
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }

    log() {
        console.log("front =", this.front)
        console.log("rear =", this.rear)
    }

    isEmpty() {
        return this.front === -1 && this.rear === -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }
    enQueue(data) {
        if(this.isFull()) {
            console.log("Queue is full");
            return;
        }
        if(this.front === -1) this.front = 0;
        this.rear = (this.rear + 1) % this.size;
        this.arr[this.rear] = data;
    }
    deQueue() {
        if(this.isEmpty()) {
            console.log("Queue is Empty");
            return -1;
        }
        let data = this.arr[this.front];
        if(this.front === this.rear) this.front = this.rear = -1;
        else this.front = (this.front + 1) % this.size;
        return data;
    }
}
let cq = new CircularQueue(5);
// cq.enQueue(0)
cq.enQueue(1)
cq.enQueue(2)
cq.enQueue(3)
cq.enQueue(4)
cq.enQueue(5)
cq.enQueue(6)

console.log(cq.deQueue());
console.log(cq.deQueue());

cq.enQueue(7)
cq.enQueue(8)
cq.enQueue(9)