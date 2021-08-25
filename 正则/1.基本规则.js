// d 0-9数字 + 出现一次或多次
// 是否包含数字
let reg = /\d+/

// 匹配test
console.log(reg.test('hh')) //false
console.log(reg.test('h1')) //true
console.log(reg.test('h1123')) //true

// 捕获exec/match
let str = '2021-7-3'
console.log(reg.exec(str)) //[ '2021', index: 0, input: '2021-7-3', groups: undefined ]

// 创建正则的两种方式
let reg1 = /\d+/
let reg = /\d+/g
// 两个参数：元字符字符串， 修饰符字符串
let reg2 = new RegExp('\\d+')
let reg = new RegExp('\\d+', 'g')

// 正则表达式组成
// 元字符
/**
 *1量词元字符
 + >= 1次
 * >= 0次
 ？0或1次
 {n} n次
 {n,} >=n次
 {n,m} n-m次

 *2特殊元字符
  \ 
  . 除\n以外的任意字符
  \n
  ^
  $
  \d 0-9
  \D 非0-9
  \w 数字，字母，下划线中的任意一个字符
  \s 空白字符(空格，制表符，换页符等)
  \t 制表符(一个tab,4个空格)
  \b 匹配一个单词的边界
  x|y x或y
  [xyz] x或y或z
  [^xy] 除了x和y以外的字符
  [a-z]  [0-9a-zA-Z_] === \w
  [^a-z]
  ()  分组
  (?:) 只匹配不捕获
  (?=) 只匹配不捕获 正向预查
  (?!) 只匹配不捕获 负向预查

  *3普通元字符
  /hah/ <=> 'hah'
 */

// 修饰符
/**
 * 常用修饰符 img
 * i => ignoreCase 忽略单词大小写匹配
 * m => multiline 多行匹配
 * g => global 全局匹配
 *
 * /A/.test('haha') false
 * /A/i.test('haha') true
 *
 */
