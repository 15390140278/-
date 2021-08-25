// 输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

function fun(num) {
  // if (num == 0) {
  //   return ''
  // }
  // // let res = ''
  // // res += num % 10
  // // res += fun(Math.floor(num / 10))
  // // return res

  // return `${num % 10}${fun(Math.floor(num / 10))}`

  return num == 0 ? '' : `${num % 10}${fun(Math.floor(num / 10))}`
}

let a = fun(1234)
console.log(a)
console.log(typeof a)
