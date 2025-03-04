function findNonRepeatingChar(str) {
    str = str.toLowerCase();
    let char = "";
    outer:for(let i = 0; i < str.length; i++) {
        for(let j = i+1; j < str.length; j++) 
            if(str[i] === str[j]) continue outer;
        return str[i];   
    }
}

const str = "My name is himesh";
console.log(findNonRepeatingChar(str))