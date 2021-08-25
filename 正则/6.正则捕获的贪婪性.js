/**
 * 默认情况下，正则捕获的是匹配的最长结果
 */
let str = 'zhufeng2019@2020peixun'
let reg = /\d+/g
console.log(str.match(reg)) //[ '2019', '2020' ]

// 在量词元字符后面设置? 取消捕获贪婪性(取最短结果)
reg = /\d+?/g
console.log(str.match(reg))
/**
 * [
  '2', '0', '1',
  '9', '2', '0',
  '2', '0'
]
 */

/**？的五大作用
 * 1 ?左边是非量词元字符：？代表量词元字符 出现0-1次
 * 2 ?左边是量词元字符：取消捕获的贪婪性
 * 3 (?:) 只匹配，不捕获
 * 4 (?=) 正向预查
 * 5 (?!) 负向预查
 */
