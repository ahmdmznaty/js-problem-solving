function divide(arr, num) {
    let chunks = []
    let count = 0
    function shi(x) {
        if(!x.length == 0) {
            if(!chunks[chunks.length]) {
                chunks[chunks.length] = []
                chunks[chunks.length - 1].push(x[0])
                x.shift()
                x.forEach(ele => {
                    count += ele
                });
                console.log(count);
                count = 0
                if(!x.length == 0) shi(x)
            }
        }
    }
    shi(arr)
    return chunks
}

console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5));     // [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([1, 0, 1, 1, -1, 0, 0], 1));       // [[1, 0], [1], [1, -1, 0, 0]]
console.log(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3)); // [[2, 1, 0, -1, 0, 0], [2, 1], [3]]