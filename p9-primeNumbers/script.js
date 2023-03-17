function PrimeNumbers(num) {
    this.arr = Array()
    for(let i = num; i > 1; i--){
        if(checkPrime(i)) this.arr.push(i)
    }
    return this.arr.length
}
console.log(PrimeNumbers(10))
console.log(new PrimeNumbers(10).arr)
console.log(PrimeNumbers(20))
console.log(new PrimeNumbers(20).arr)
console.log(PrimeNumbers(30))
console.log(new PrimeNumbers(30).arr)
function checkPrime(num) {
    for(let i = num - 1; i > 1; i--){
        if(Number.isInteger(num/i)){
            return false
        }
    }
    return true
}