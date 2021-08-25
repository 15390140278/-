let arr = [123, { a: 1 }, { a: { b: 1 } }, { a: '1' }, { a: { b: 1 } }, 'meili']
let arr1 = [123, [1, 2, 3], [1, '2', 3], [1, 2, 3], 'meili']

// function quchong(arr) {
//   return Array.from(
//     new Set([
//       ...arr.map(item => {
//         return typeof item === 'object' ? JSON.stringify(item) : item
//       })
//     ])
//   ).map(item => {
//     try {
//       return JSON.parse(item)
//     } catch (e) {
//       return item
//     }
//   })
// }

// 排序写法
function quchong(arr) {
  let arr1 = arr.sort()
  let res = [arr1[0]]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== res[res.length - 1]) {
      res.push(arr[i])
    }
  }
  return res
}

// 下标
function quchong(arr) {
  let res = [arr[0]]
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) == -1) {
      res.push(arr[i])
    }
  }
  return res
}

console.log(quchong(arr1))
