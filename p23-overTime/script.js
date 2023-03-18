function overTime([start, end, rate, multiplier]) {
    let normal = (start < 17 ? (17 < end ? 17 : end) - start : 0) * rate
    let over = (end > 17 ? end - (17 < start ? start : 17) : 0) * (rate * multiplier)
    let overTimeRate = normal + over
    return `$${overTimeRate.toFixed(2)}`
}
console.log( overTime([9, 17, 30, 1.5]) ) // "$240.00"
console.log( overTime([16, 18, 30, 1.8]) ) // "$84.00"
console.log( overTime([13.25, 15, 30, 1.5]) ) // "$52.50"