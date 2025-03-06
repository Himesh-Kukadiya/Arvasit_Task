// Solve the 0/1 knapsack problem.

function knapsack(w, p, m) {
    let n = w.length;

    let bt = getBaseTable(n, m);
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(w[i-1] <= j) bt[i][j] = Math.max(bt[i-1][j], bt[i-1][j - w[i-1]] + p[i - 1])
            else bt[i][j] = bt[i-1][j];
        }
    }

    console.log(bt);
    return bt[n][m];
}

function getBaseTable(n, m) {
    let bt = new Array(n + 1);

    for(let i = 0; i < bt.length; i++) {
        bt[i] = new Array(m + 1).fill(0);
    }
    return bt;
}

let w = [2, 3, 4, 5];
let p = [3, 4, 5, 6];
let m = 5;

console.log(knapsack(w, p, m));