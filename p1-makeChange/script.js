function makeChange(dollarpart) {
    let obj = {"q": 0, "d": 0, "n": 0, "p": 0}
    let arr, remain
    if(dollarpart > 0 && dollarpart < 100){
        arr = countQ(dollarpart)
        obj.q = arr[1]; remain = arr[0]
        arr = countD(remain)
        obj.d = arr[1]; remain = arr[0]
        arr = countN(remain)
        obj.n = arr[1]; remain = arr[0]
        arr = countP(remain)
        obj.p = arr[1]; remain = arr[0]
    }
    return obj
}
console.log(makeChange(47))
console.log(makeChange(24))
console.log(makeChange(92))
function countQ(dollarpart){
    let remain = dollarpart, count = 0
    for(let i = 25; i <= dollarpart; i += 25){
        count++; remain -= 25
    }
    return [remain, count]
}
function countD(dollarpart){
    let remain = dollarpart, count = 0
    for(let i = 10; i <= dollarpart; i += 10){
        count++; remain -= 10
    }
    return [remain, count]
}
function countN(dollarpart){
    let remain = dollarpart, count = 0
    for(let i = 5; i <= dollarpart; i += 5){
        count++; remain -= 5
    }
    return [remain, count]
}
function countP(dollarpart){
    let remain = dollarpart, count = 0
    for(let i = 1; i <= dollarpart; i += 1){
        count++; remain -= 1
    }
    return [remain, count]
}