function numToEng(num) {
    let first = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen"]
    let second = ["twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninty"]
    let third = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]

    let x = num > 99 ? Number(String(num).slice(1)) : num

    let first1 = first[x - 1] ?? ""
    let first2 = first[Number(String(x)[1]) - 1] ?? ""
    let second1 = second[Number(String(x)[0]) - 2] ?? ""
    let third1 = third[Number(String(num)[0]) - 1] ?? ""

    if(num === 0) return "zero"
    else if(num <= 20) return first1
    else if(num <= 99) return second1 + " " + first2
    else if(num <= 999) {
        if(x <= 20) return third1 + " " + first1
        if(x <= 99) return third1 + " " + second1 + " " + first2
    }
}
console.log("0: " + numToEng(0));     // "0: zero"
console.log("15: " + numToEng(15));   // "15: fifteen"
console.log("18: " + numToEng(18));   // "18: eighteen"
console.log("21: " + numToEng(21));   // "21: twenty one"
console.log("37: " + numToEng(37));   // "37: thirty seven"
console.log("74: " + numToEng(74));   // "74: seventy four"
console.log("126: " + numToEng(126)); // "126: one hundred twenty six"
console.log("397: " + numToEng(397)); // "397: three hundred ninty seven"
console.log("400: " + numToEng(400)); // "400: four hundred "
console.log("909: " + numToEng(909)); // "909: nine hundred nine"