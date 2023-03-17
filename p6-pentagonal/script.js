function pentagonal(num) {
    let x = 0
    function inner(num){
        if(num > 0){
            x += (num * 5 - 5)
            num--
            if(num > 1){
                return inner(num)
            }
        }
        return x
    }
    inner(num)
    return x + 1
}
console.log(pentagonal(1));
console.log(pentagonal(2));
console.log(pentagonal(3));
console.log(pentagonal(4));
console.log(pentagonal(5));
console.log(pentagonal(6));
console.log(pentagonal(7));
console.log(pentagonal(8));
console.log(pentagonal(9));
console.log(pentagonal(10));
console.log(pentagonal(11));
console.log(pentagonal(12));
console.log(pentagonal(13));
console.log(pentagonal(14));
console.log(pentagonal(15));
console.log(pentagonal(16));
console.log(pentagonal(17));
console.log(pentagonal(18));
console.log(pentagonal(19));
console.log(pentagonal(20));
console.log(pentagonal(21));