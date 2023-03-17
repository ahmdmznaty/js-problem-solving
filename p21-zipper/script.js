function zipper(arr1, arr2) {
    if(arr1[arr1.length-1] != arr2[arr2.length-1]) return false
    if(checkEquality(arr1, arr2)) return true
    if(checkZipped(arr1, arr2)[0]) return checkZipped(arr1, arr2)[1]
}
console.log(zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2])) // [4, 7]
console.log(zipper([5, 4, 3, 2, 6], [6, 4, 3, 2, 6])) // [0, 0]
console.log(zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6])) // false
console.log(zipper([5, 4, 3, 2, 6], [5, 4, 3, 2, 6])) // true
function checkEquality(a1, a2) {
    if(a1.length == a2.length) {
        let newa = a1.map( (x, i) => {if(x == a2[i]) return true} )
        if(!newa.includes(undefined)) return true
    }
}
function checkZipped(a1, a2) {
    let arr = []
    function popEquals(x, y) {
        if(x[x.length-1] == y[y.length-1]) {
            x.pop()
            y.pop()
            return popEquals(x, y)
        }
        else {
            arr = [x.length-1, y.length-1]
            return arr
        }
    }
    popEquals(a1, a2)
    return [ true, arr ]
}