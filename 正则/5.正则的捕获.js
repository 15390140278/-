// 实现正则捕获的办法
/**
 * RegExp.prototype上的方法
 * exec
 * test
 * 字符串String.prototype
 * replace
 * match
 * split
 */

let str = 'zhufeng2019yangfan2020qihang2021'
let reg = /^\d+$/
/**
 * reg.lastIndex:当前正则下一次匹配的起始索引位置
 * 懒惰性的原因：默认情况下lastIndex不会被改变
 * 解决办法：全局修饰符/g
 */
// reg = /\d+/
// 实现正则捕获的前提是：当前正则要和字符串匹配
// console.log(reg.lastIndex) //0
// console.log(reg.exec(str))
// console.log(reg.lastIndex) //0
/**
 * [
  '2019',
  index: 7,
  input: 'zhufeng2019yangfan2020qihang2021',
  groups: undefined
]
 */
/**
 * 基于exec实现正则捕获
 * 1.捕获到的结果是null或者一个数组
 *  数组第一项：本次捕获到的内容
 *  其余项：对应小分组本次单独捕获的内容
 *  index:  捕获内容在字符串的起始索引
 *  input: 原始字符串
 * 2.每执行一次exec,只能捕获到一个符合正则规则的，无论执行多少次，结果都是第一个匹配到的，正则捕获的懒惰性
 */
// reg = /\d+/g
// // 设置/g后匹配后就会修改lastIndex
// console.log(reg.lastIndex) //0
// console.log(reg.exec(str)) //[2019...]
// console.log(reg.lastIndex) //11
// console.log(reg.exec(str)) //[2020...]
// console.log(reg.lastIndex) //22
// console.log(reg.exec(str)) //[2021...]
// console.log(reg.lastIndex) //32
// console.log(reg.exec(str)) //null
// console.log(reg.lastIndex) //0
// console.log(reg.exec(str)) //[2019...]

reg = /\d+/g
// if (reg.test(str)) {
//   console.log(reg.lastIndex) //11
//   console.log(reg.exec(str)) //[2020...]
// }

function execAll(str) {
  if (!this.global) {
    return this.exec(str)
  }
  let ary = [],
    res = this.exec(str)
  while (res) {
    ary.push(res[0])
    res = this.exec(str)
  }
  return ary.length == 0 ? null : ary
}
RegExp.prototype.execAll = execAll
console.log(reg.execAll(str)) //[ '2019', '2020', '2021' ]
console.log(str.match(reg)) //[ '2019', '2020', '2021' ]
