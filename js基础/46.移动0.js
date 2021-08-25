// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 暴力法
// function removeZero(arr) {
//   let res1 = []
//   let res2 = []
//   arr.forEach(item => {
//     item === 0 ? res1.push(item) : res2.push(item)
//   })
//   return res2.concat(res1)
// }

// 原始数组操作
// function removeZero(arr) {
//   while (true) {
//     let index = arr.findIndex(item => item === 0)
//     if (index == -1) {
//       return arr.map(item => (item == -1 ? item + 1 : item))
//     }
//     arr[arr.length] = arr[index] - 1
//     arr.splice(index, 1)
//   }
// }

// 其他答案
function removeZero(arr) {
  let j = 0
  for (let i = 0; i < arr.length - j; i++) {
    if (arr[i] === 0) {
      arr.push(0)
      arr.splice(i, 1)
      i--
      j++
    }
  }
  return arr
}

console.log(removeZero([0, 0, 0, 3, 12]))
