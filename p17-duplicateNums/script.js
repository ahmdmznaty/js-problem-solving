function duplicateNums(nums) {
    let duplicated = []
    for(let i = 0; i < nums.length; i++) {
        for(let o = (i + 1) ; o < nums.length ; o++) {
            if(nums[i] == nums[o]) {
                duplicated.push(nums[i])
                break
            }
        }
    }
    return (duplicated.length == 0 ? null: duplicated.sort((a, b) => a - b))
}
console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6])) // [3]
console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54])) // [72, 81, 99]
console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // null