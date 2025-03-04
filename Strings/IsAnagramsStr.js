// Implement a function to check if two strings are anagrams.

function isAnagramsStr(str1, str2) {
    if(str1.length !== str2.length) return false;
    outer:for(let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str1.length; j++) {
            if(str1[i] === str2[j]) continue outer;
        }
        return false;
    }
    return true;
}

const str1 = "listen"
const str2 = "silent"
console.log(isAnagramsStr(str1, str2));