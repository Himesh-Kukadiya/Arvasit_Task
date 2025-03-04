// Check if a string is a plindrome.

function isPalindromeStr(str) {
    let revStr = str.split("").reverse().join("");
    return `${str} is a ${revStr === str ? "palindrome" : "non palindrome"} string`;
}

let str = "aabaa";
console.log(isPalindromeStr(str))