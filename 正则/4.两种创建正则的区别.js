// let reg = /\d+/g
// reg = new RegExp('\\d+', 'g')

// 表达式中间部分内容是变量存储的值
let type = 'zhufeng'
// 字面量方式不能
reg = /^@"+type+"@$/
console.log(reg.test('@zhufeng@')) //false
console.log(reg.test('@"""typeeee"@')) //true

// 构造函数方式
reg = new RegExp('^@' + type + '@$')
console.log(reg.test('@zhufeng@')) //true
