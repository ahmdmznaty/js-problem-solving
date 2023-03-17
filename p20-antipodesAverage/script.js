function antipodesAverage(arr) {
    let x = Math.floor((arr.length) / 2)
    let arr1 = arr, arr2 = arr
    let left = buildLeft( arr1, x )
    let right = buildRight( arr2, x )
    let final = buildFinal(left, right)
    return final.map(
        (a) => {
            return a/2
        }
    )
}
console.log(antipodesAverage([1, 2, 3, 4])) // [2.5, 2.5]
// Left part = [1, 2]
// Reversed right part = [4, 3]
// Array resulting from the sum of each pair = [5, 5]
// Each number is divided by two = [2.5, 2.5]
console.log(antipodesAverage([1, 2, 3, 4, 5])) // [3, 3]
// The length of array is odd, number 3 (in the middle) is eliminated
// Left = [1, 2]
// Reversed right = [5, 4]
// Sum = [6, 6]
// Division by two = [3, 3]
console.log(antipodesAverage([-1, -2])) // [-1.5]
//  (-1 + -2) / 2 = [-1.5]
function buildLeft(arr, x) {
    let result = []
    for(let i = 0; i < x; i++) {
        result.push(arr.shift())
    }
    return result
}
function buildRight(arr, x) {
    let result = []
    for(let i = 0; i < x; i++) {
        result.push(arr.pop())
    }
    return result
}
function buildFinal(left, right) {
    let result = []
    for(let i = 0; i < left.length; i++) {
        result.push(left[i] + right[i])
    }
    return result
}