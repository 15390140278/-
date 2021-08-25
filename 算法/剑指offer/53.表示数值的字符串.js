// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

let str = '123'
str = '-123'
str = '+123'
str = '3.14'
str = '5e2'
str = '+-5'
str = '12e+4.3'
str = '12e'
str = '1.1e3'

function isNum(str) {
  let reg = /^([+-]?)(\d+)(\.\d+)?([eE]?)([+-]?)(\d+)$/g

  return reg.test(str)
}

console.log(isNum(str))
