// Find the longest increasing subsequences in an array.

let arr = [9, 21, 4, 5, 32, 20, 49, 40, 60, 70];
findLongestIncresingSubsequence(arr)
function findLongestIncresingSubsequence(arr) {
    let incresingSubsequence = [];
    arr.forEach((e, i) => {
        let max = e;        
        let subsequence = [];
        for(let j = i; j < arr.length; j++) {
            if(arr[j] >= max) {
                subsequence.push(arr[j]);
                max = arr[j];
            }
        }
        incresingSubsequence.push(subsequence)
    })
    let maxSucsequence = incresingSubsequence.reduce((acc, curr) => {
        return acc.length >= curr.length ? acc : curr;
    }, [])
    console.log("longestIncreasingSubsquence is =>", maxSucsequence.join(", "));
    
}

//output => 9, 21, 32, 49, 60, 70   ==> 6
// 21, 32, 49, 60, 70
// 8, 32, 49, 60, 70
// 32, 49, 60, 70.
// 20, 49, 60, 70
// 49, 60, 70
// 40, 60, 70,
// 60, 70
// 70
