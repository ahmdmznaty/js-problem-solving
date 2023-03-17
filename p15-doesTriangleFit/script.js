function doesTriangleFit(brick, hole) {
    let tri11 = brick[0]
    let tri12 = brick[1]
    let tri13 = brick[2]
    let tri21 = hole[0]
    let tri22 = hole[1]
    let tri23 = hole[2]
    if( !(
        (tri11 + tri12) > tri13 && (tri13 + tri11) > tri12 && (tri12 + tri13) > tri11 &&
        (tri21 + tri22) > tri23 && (tri23 + tri21) > tri22 && (tri22 + tri23) > tri21
        ) ) return false
    if(Math.max(...hole) >= Math.max(...brick)) return true
}
console.log(doesTriangleFit([1, 1, 1], [1, 1, 1])); // true
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2])); // true
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2])); // false
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6])); // false