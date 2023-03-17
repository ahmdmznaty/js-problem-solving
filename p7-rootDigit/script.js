function rootDigit(num) {
    let result = 0
    str = String(num)
    for(i of str) {
        if( String(result + Number(i)).length >= 2 ) break
        result += Number(i)
    }
    return result
}
console.log(rootDigit(123));
console.log(rootDigit(999888777));
console.log(rootDigit(123876));
console.log(rootDigit(2435));
console.log(rootDigit(8173));
console.log(rootDigit(123876));
console.log(rootDigit(123876));