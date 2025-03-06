// Find the minimum number of coins required to make a given amount.

let amt = 115;
let coinsUsed = {1: 0, 2: 0, 5: 0, 10: 0}

function coinCounting(amt) {
    let coin = [10, 5, 2, 1];
    n = amt;
    let totalCoins = 0;
    for(let i = 0; i < coin.length && n != 0; i++) {
        if(n % coin[i] != n) {
            let times =  Math.floor(n / coin[i]);
            totalCoins += times;
            console.log(coin[i], " is used", times, "times");
            n = n % coin[i];
        }
    }
    console.log("total", totalCoins, "coins used");
    
}

coinCounting(amt);

// 108
// 10 - 10
// 5 - 1
// 2 - 1
// 1 - 1

// console.log(30%10)

// if(amt%10 === amt) {
//     console.log("you can not use 10's coin")
// }
// if(amt%5 === amt) {
//     console.log("you can not use 5's coin")
// }
// if(amt%2 === amt) {
//     console.log("you can not use 2's coin")
// }