// Find the duplicate number in an array where each number appears twice except one.

function getDuplicateElement(arr) {
    const duplicateEle = [];
    const n = arr.length;
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            if(arr[i] === arr[j])
                duplicateEle.push(arr[i]);
        }
    }
    return duplicateEle;
}

const arr = [1,2,2,3,4,5,4];
console.log(getDuplicateElement(arr))