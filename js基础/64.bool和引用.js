// 只有1 '1' [1] == true 结果为true
// 只有0 '0' [0] == false 结果为true
/**
 * if中为false情况：Boolean(expr)为false 或者 !!expr
 * 涉及到bool判断,都会自动执行Boolean() 
 *  0、-0、0.0、null、""、false、undefined、NaN
 * 其他情况下判断为 true，
包括："0"、"null"、"false"、"undefined"、"NaN"
 */
console.log([] == true) //false
console.log({} == true) //false
console.log(0 == false)
console.log([0] == false)
console.log('0' == false)
console.log(1 == true)
console.log([1] == true)
console.log('1' == true)
