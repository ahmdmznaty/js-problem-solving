function bucketize(phrase, num) {
    let buckets = []
    let i = num
    if(!phrase.includes(" ")) return buckets
    while(true) {
        if(phrase.length == 0 || i < 0) break
        else if(phrase[i] == " " || phrase[i] == undefined){
            buckets.push(phrase.slice(0, i))
            for(let o = i; o >= 0; o--) {
                phrase = phrase.slice(1)
            }
            i = num
        }
        else i--
    }
    return buckets
}
console.log(bucketize("she sells sea shells by the sea", 10)); // ["she sells", "sea shells", "by the sea"]
console.log(bucketize("the mouse jumped over the cheese", 7)); // ["the", "mouse", "jumped", "over", "the", "cheese"]
console.log(bucketize("fairy dust coated the air", 20));       // ["fairy dust coated", "the air"]
console.log(bucketize("a b c d e", 2));                        // ["a", "b", "c", "d", "e"]
console.log(bucketize("ahmed", 5));                            // []
console.log(bucketize("welcome here", 0));                     // []