class Stack {
    constructor(max) {
        this.arr = [];
        this.max = max;
        this.top = -1;
    }

    overflow() {
        if(this.top === this.max - 1) return true;
        return false;
    }

    underflow() {
        if(this.top === -1) return true;
        return false;
    }

    add(data) {
        if(this.overflow()) console.log("Your stack is going overflow")
        else this.arr[++this.top] = data
    }

    remove() {
        if(this.underflow()) console.log("Your stack is going underflow")
        else return this.arr[this.top--];
    }

    print() {
        while(!this.underflow()) {
            console.log(this.arr[this.top--]);
        }
    }
}

const s = new Stack(5);

s.add(1)
s.add(1)
s.add(1)
s.add(1)
s.add(1)
s.add(1)

s.remove()
s.remove()
s.remove()
s.remove()
s.remove()
s.remove()