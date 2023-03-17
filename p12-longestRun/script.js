function longestRun(arr) {
    let longestnum = []
    for(let i = 0; i < arr.length; i++) longestnum[i] = 1
    let o = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == (arr[i + 1]) - 1) {
            longestnum[o] += 1
            if(arr[i] != (arr[i + 2]) - 2) o++
        }
        else if(arr[i] == (arr[i + 1]) + 1) {
            longestnum[o] += 1
            if(arr[i] != (arr[i + 2]) + 2) o++
        }
        else {
            o++
        }
    }
    // return longestnum.join("")
    return Math.max(...longestnum)
}
console.log(longestRun([1, 2, 3, 10, 11, 15])); // 3
console.log(longestRun([5, 4, 2, 1])); // 2
console.log(longestRun([3, 5, 7, 10, 15])); // 1
console.log(longestRun([1, 2, 3, 5, 6, 7, 8, 9])); // 5