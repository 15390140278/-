// 字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”

let str = 'abcXYZdef'

function rotate(str, k) {
  k = k % str.length
  return str.slice(k) + str.slice(0, k)
}

console.log(rotate(str, 3))
console.log(rotate(str, 9))
console.log(rotate(str, 12))
