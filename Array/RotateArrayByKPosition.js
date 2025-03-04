// function rotateArrayByKPosition(arr, k) {
//     if(k >= arr.length) return "Invalid Position";
//     const resArr = []
    
//     for(let i = k; i < arr.length; i++)
//         resArr.push(arr[i])
//     for(let i = 0; i < k; i++)
//         resArr.push(arr[i]);
//     return resArr;
// }


function rotateArrayByKPosition(arr, k) {
    const n = arr.length;
    if(k >= n) return "Invalid Position"
    return [...arr.slice(k), ...arr.slice(0, k)]
}

let arr = [1,2,3,4,5,6];
const k = 2;
console.log(rotateArrayByKPosition(arr, k))