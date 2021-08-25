// 1^ $
// let reg = /^\d/
// console.log(reg.test('0a')) //true
// console.log(reg.test('a1')) //false
// let reg1 = /^[0-9]/
// console.log(reg1.test('0a')) //true
// console.log(reg1.test('a1')) //false

// let reg2 = /\d$/
// console.log(reg2.test('a0'))
// console.log(reg2.test('aa'))

// ^/$都不加： 字符串中包含即可
// let reg3 = /\d+/
// // 都加 只能是
// let reg4 = /^\d+$/
// console.log(reg4.test('123'))
// console.log(reg4.test('a23'))
// console.log(reg4.test('12a'))

// // 验证手机号
// let reg = /^1\d{10}$/

// // 2转义符号
// let reg = /^2.3$/
// console.log(reg.test('2.3')) //true
// console.log(reg.test('2@3')) //true
// console.log(reg.test('23')) //false

// let reg = /^2\.3$/
// console.log(reg.test('2.3')) //true
// console.log(reg.test('2@3')) //false
// console.log(reg.test('23')) //false

// // 字符串中的\也有特殊含义，因此也要转义
// let str = '\\d'
// let reg = /^\\d$/ //=> 把特殊符号\d 转为普通符号
// console.log(reg.test(str)) //true

// // 3()
// // x|y 要用()分组，否则会出现优先级问题
// let reg = /^(18|29)$/

// 4[] 中括号中出现的字符一般都代表本身的含义
let reg = /^[@+]+$/
let str = '@@@+++'
let str1 = '@+'
let str2 = '@++++'
console.log(reg.test(str))
console.log(reg.test(str1))
console.log(reg.test(str2))
// \d 在[]还是0-9
reg = /^[\d]$/
console.log(reg.test('d')) //false
console.log(reg.test('\\')) //false
console.log(reg.test('9')) //true
reg = /^[\\d]$/
console.log(reg.test('d')) //true
console.log(reg.test('\\')) //true
console.log(reg.test('9')) //false
// []中不存在多位数
reg = /^[18]$/
console.log(reg.test('1')) //true
console.log(reg.test('8')) //true
console.log(reg.test('18')) //false
reg = /^[10-29]$/
console.log(reg.test('1')) //true
console.log(reg.test('9')) //true
console.log(reg.test('10')) //false
