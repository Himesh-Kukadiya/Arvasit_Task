// Reverse words in a given sentence without using extra space 

function getReversedWords(str) {
    return str.split(" ").reverse().join(" ")
}

const str = "My name is Himesh"
console.log(getReversedWords(str))