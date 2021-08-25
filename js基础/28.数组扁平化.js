// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
// // flat(Infinity) 递归无穷级
// // sort()
// let newArr = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)

// // let newArr = Array.from(new Set(arr.toString().split(','))).sort((a, b) => a - b)
// console.log(newArr)

// 迭代实现
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
// let flatten = function (arr) {
//   while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }

let flatten = arr => arr.reduce((acc, cur) => (Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur]), [])

console.log(flatten(arr))
