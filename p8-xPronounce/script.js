function xPronounce(word) {
    let arr = word.split(" ")
    let newWord = String()
    for(let myword in arr){
        let len = arr[myword].length
        let start = arr[myword][0]
        if(len == 1 && start == "x") arr[myword] = arr[myword].replace("x", "ecks")
        else if(len != 1 && start == "x") arr[myword] = arr[myword].replace("x", "z")
        else if(len != 1 && start != "x") {
            for(let letter of arr[myword]) {
                if(letter == "x") arr[myword] = arr[myword].replace("x", "cks")
            }
        }
        newWord += arr[myword] + " "
    }
    return newWord
}
console.log(xPronounce("Inside the box was a xylophone")); // "Inside the bocks was a zylophone"
console.log(xPronounce("The x ray is excellent")); // "The ecks ray is eckscellent"
console.log(xPronounce("OMG x box unboxing video x D")); // "OMG ecks bocks unbocksing video ecks D"