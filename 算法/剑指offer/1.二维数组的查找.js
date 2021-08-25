// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

let arr = [
  [1, 2, 3],
  [4, 5, 6]
]

// function find(arr, num) {
//   arr = arr.flat(Infinity)
//   return arr.indexOf(num) !== -1
// }

function find(arr, target) {
  let m = arr.length
  let row = m - 1
  let n = arr[0].length
  let col = 0

  while (row >= 0 && col < n) {
    if (arr[row][col] > target) {
      row--
    } else if (arr[row][col] < target) {
      col++
    } else {
      return true
    }
  }
  return false
}

let res = find(arr, 1)
console.log(res)
