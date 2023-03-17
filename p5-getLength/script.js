function getLength(arr) {
    let count = Number()
    count += arr.length
    function checkIn(arr){
        for(let i in arr){
            if(arr[i].length){
                count += arr[i].length - 1
                checkIn(arr[i])
            }
        }
    }
    checkIn(arr)
    return count
}
console.log(getLength([5, 3, 7, [3, [5, 4, 2, 0, 1], 0]]));
console.log(getLength([1, [2, 3]]));
console.log(getLength([1, [2, [3, 4]]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
console.log(getLength([1, [2], 1, [2], 1]));