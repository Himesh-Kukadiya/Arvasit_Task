// Solve the Fibonacii sequence using dynamic programming.

function printFibonacii(turns) {
    let a = 0;
    let b = 1;
    let c = a + b;

    let arr = [];
    for(let i = 1; i <= turns; i++) {
        arr.push(a);
        a = b;
        b = c;
        c = a + b;
    }
    return arr;
}

let turns = 10;
console.log(printFibonachii(turns).join(" -> "))