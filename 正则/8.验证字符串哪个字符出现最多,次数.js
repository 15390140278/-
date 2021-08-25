let str = 'acbbbbccc'
// let map = {}
// let res = []
// ;[].forEach.call(str, char => {
//   if (typeof map[char] !== 'undefined') {
//     map[char]++
//     return
//   }
//   map[char] = 1
// })
// let max = 1
// for (let key in map) {
//   let item = map[key]
//   item > max ? (max = item) : null
// }
// for (let key in map) {
//   let item = map[key]
//   if (item == max) {
//     res.push(key)
//   }
// }
// console.log(res)

// str = str
//   .split('')
//   .sort((a, b) => a.localeCompare(b))
//   .join('')
// console.log(str) //abbbbcccc
// \1 匹配一个与第一个分组相同的字符
// let reg = /([a-zA-Z])\1+/g
// let ary = str.match(reg)
// // ary = ary.sort((a, b) => b.length - a.length)
// ary.sort((a, b) => b.length - a.length)
// console.log(ary)
// let res = [ary[0].substring(0, 1)]
// let max = ary[0].length

// for (let i = 1; i < ary.length; i++) {
//   if (ary[i].length < max) {
//     break
//   }
//   res.push(ary[i].substring(0, 1))
// }
// console.log(res)

let max = 0,
  res = [],
  flag = false
str = str
  .split('')
  .sort((a, b) => a.localeCompare(b))
  .join('')
for (let i = str.length; i > 0; i--) {
  let reg = new RegExp('([a-zA-Z])\\1{' + (i - 1) + '}', 'g')
  str.replace(reg, (content, $1) => {
    //content 'bbbb' 'cccc'
    //$1 'b' 'c'
    res.push($1)
    max = i
    flag = true
  })
  if (flag) {
    break
  }
}
console.log(res, max)
