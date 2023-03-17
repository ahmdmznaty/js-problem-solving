function nearestChapter(obj, num) {
    let objArr = Object.entries(obj)
    for(let key = 0; key < (objArr.length - 1); key++) {
        if(objArr[key][1] < num && objArr[key+1][1] > num) {
            if(
                (objArr[key+1][1] - num) > (num - objArr[key][1])
            ) return objArr[key][0]
            else return objArr[key+1][0]
        }
    }
}
console.log(
    nearestChapter({
        "Chapter 1" : 1,
        "Chapter 2" : 15,
        "Chapter 3" : 37
    }, 10)
) // "Chapter 2"
console.log(
    nearestChapter({
        "New Beginnings" : 1,
        "Strange Developments" : 62,
        "The End?" : 194,
        "The True Ending" : 460
    }, 200)
) // "The End?"
console.log(
    nearestChapter({
        "Chapter 1a" : 1,
        "Chapter 1b" : 5
    }, 3)
) // "Chapter 1b"