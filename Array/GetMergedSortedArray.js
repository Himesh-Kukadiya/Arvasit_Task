// implement a function to merge two sorted arrays into a single sorted array.

function getMergedSortedArray(arr1, arr2) {
    return [...arr1, ...arr2].sort();
}

let arr1 = [1,2,4,7,8,9]
let arr2 = [2,3,5,6,8];

console.log(getMergedSortedArray(arr1, arr2));