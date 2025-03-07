class Stack {
    constructor() {
        this.arr = [];
        this.top = -1;
    }

    add(data) {
        this.arr[++this.top] = data;
    }

    reverse() {
        this.arr.reverse();
    }

    remove() {
        if(this.top === -1) {
            console.log("Your stack is going underflow");
            return;
        }
        else return this.arr[top--];
    }

    print() {
        return this.arr.join('->');
    }
}

let str = "my name is himesh";
let s = new Stack();
for(let i = 0; i < str.length; i++) {
    s.add(str[i]);
}
console.log("Stack :", s.print());
s.reverse();
console.log("reverse Stack :", s.print());