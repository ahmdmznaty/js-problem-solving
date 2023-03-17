function multiplicationTable(n) {
    let arr = Array()
    let count = 1
    for(let i = 0; i < n; i++) {
        arr.push(Array())
        for(let o = 1; o <= n; o++)  arr[i].push(o * count)
        count ++
    }
    return arr
}
console.log(multiplicationTable(1)); // [[1]]
console.log(multiplicationTable(3)); // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
console.log(multiplicationTable(5)); // [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]