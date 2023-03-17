function reverseOdd(str) {
    let reversed = []
    let arr = str.split(" ")
    for(let i = 0; i < arr.length; i++) {
        if( (arr[i].length % 2) != 0 ) {
            reversed.push(
                arr[i].split("").reverse().join("")
            )
        }
        else {
            reversed.push(arr[i])
        }
    }
    return reversed.join(" ")
}
console.log(reverseOdd("Bananas")) // "sananaB"
console.log(reverseOdd("One two three four")) // "enO owt eerht four"
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))
// "Make sure you only reverse words of odd length"