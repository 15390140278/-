// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
// 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
// 输出: [5, 6, 7, 1, 2, 3, 4]

let arr = [1, 2, 3, 4, 5, 6, 7]

// function rotate(arr, k) {
//   let res = Array(arr.length).fill()

//   for (let i = 0; i < arr.length; i++) {
//     let j = (i + k) % arr.length
//     res[j] = arr[i]
//   }
//   console.log(res)
// }

// rotate(arr, 4)

function rotate(arr, k) {
  k = k % arr.length
  return arr.slice(-k).concat(arr.slice(0, arr.length - k))
}

console.log(rotate(arr, 3))
