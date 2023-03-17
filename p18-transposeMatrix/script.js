function transposeMatrix(mtx) {
    let sentence = []
    for(let i = 0; i < mtx.length; i++) {
        sentence.push(mtx[i][0])
        mtx[i].shift()
        if(mtx[i].length != 0 && i == (mtx.length - 1)) i = -1
    }
    return sentence.join(" ")
}
console.log(
    transposeMatrix([
        ["Enter"],
        ["the"],
        ["Matrix!"]
    ])
) // "Enter the Matrix!"
console.log(
    transposeMatrix([
        ["The", "are"],
        ["columns", "rows."]
    ])
) // "The columns are rows."
console.log(
    transposeMatrix([
        ["You", "the"],
        ["must", "table"],
        ["transpose", "order."]
    ])
); // "You must transpose the table order."