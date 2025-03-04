function getMissingNumberFromAnArray(arr, _1_to_) {
    if(_1_to_ <= 0) return "Please enter range grater that the Zero!"
    const missingNum = [];
    
    for(let i = 1; i <= _1_to_; i++)
        if(!arr.includes(i)) missingNum.push(i);

    return missingNum;
}

const arr = [1,3,5,7,8];
let n = 15;
console.log(getMissingNumberFromAnArray(arr, n));