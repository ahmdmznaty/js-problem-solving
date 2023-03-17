function oddishOrEvenish(num){
    let sum = 0
    for(i of String(num)){
        sum += Number(i)
    }
    if(sum % 2 == 0){
        return "Evenish"
    }
    return "Oddish"
}
console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(41));
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));