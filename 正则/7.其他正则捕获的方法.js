/**
 * test也能捕获
 * RegExp.$1 - RegExp.$9 获取当前本次正则匹配后，第一个到第九个分组的信息
 */
// let str = '{0}年{1}月{2}日'
// let reg = /\{(\d+)\}/g
// console.log(reg.test(str)) //true
// console.log(RegExp.$1) //0
// console.log(reg.test(str)) //true
// console.log(RegExp.$1) //1
// console.log(reg.test(str)) //true
// console.log(RegExp.$1) //2
// console.log(reg.test(str)) //false
// console.log(RegExp.$1) //2

/**
 * replace
 */
// let str = 'zhufeng@2019|zhufeng@2020'
// str = str.replace('zhufeng', '珠峰')
// console.log(str) //珠峰@2019|zhufeng@2020
// str = str.replace('zhufeng', '珠峰').replace('zhufeng', '珠峰')
// console.log(str) //珠峰@2019|珠峰@2020
// str = str.replace('zhufeng', 'zhufengpeixun').replace('zhufeng', 'zhufengpeixun')
// // 懒惰性
// console.log(str) //zhufengpeixunpeixun@2019|zhufeng@2020

// 用正则
// str = str.replace(/zhufeng/g, '珠峰')
// console.log(str)

// str = str.replace(/zhufeng/g, 'zhufengpeixun')
// console.log(str)

// 案例
// let time = '2021-07-03' // => 2021年07月03日
// let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})/
// time = time.replace(reg, '$1年$2月$3日')
// console.log(time)

/**
 * 还可以 [str].replace([reg], [function])
 * 1. 首先拿reg和time进行匹配捕获，能匹配几次就会把传递的函数执行几次(匹配一次就执行一次)
 * 2. 不仅把方法执行，而且replace还给方法传递了实参信息(和exec捕获的内容一致的信息: 大正则匹配的内容，小分组匹配的信息)
 * 3. 函数返回的啥，就把当前大正则匹配的内容替换成啥
 */
// time = time.replace(reg, (big, $1, $2, $3) => {
//   console.log(big, $1, $2, $3)
// })
// time = time.replace(reg, (big, ...args) => {
//   let [$1, $2, $3] = args
//   $2.length < 2 ? ($2 = '0') : null
//   $3.length < 2 ? ($3 = '0') : null
//   return `${$1}年${$2}月${$3}日`
// })
// console.log(time) //2021年07月03日

// 单词首字母大写
let str = 'good good study, day day up!'
let reg = /\b([a-zA-Z])[a-zA-Z]*\b/g
// 函数执行6次
str = str.replace(reg, (...args) => {
  let [content, $1] = args
  $1 = $1.toUpperCase()
  content = content.substring(1)
  return $1 + content
})

console.log(str)
