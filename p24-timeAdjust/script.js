function timeAdjust(now, hrs, min, sec) {
    return now.split(":").reverse().map(str => +str).map((num, index, array) => {
        if( index == 2 ) num = clearOverflow(num + hrs, 24)[0]
        if( index == 1 ) {
            let cleared = clearOverflow(num + min, 60)
            num = cleared[0]
            array[index + 1] += cleared[1]
        }
        if( index == 0 ) {
            let cleared = clearOverflow(num + sec, 60)
            num = cleared[0]
            array[index + 1] += cleared[1]
        }
        return String(num).length == 2 ? num : `0${num}`
    }).reverse().join(":")
}
console.log( timeAdjust("01:00:00", 1, 30, 10) ) // "02:30:10"
console.log( timeAdjust("18:22:30", 4, 60, 30) ) // "23:23:00"
console.log( timeAdjust("00:00:00", 72, 120, 120) ) // "02:02:00"
function clearOverflow(value, max, counter = 0) {
    if(value >= max) return clearOverflow(value - max, max, ++counter)
    return [value, counter]
}