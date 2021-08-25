// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
/**
  [
  [ 1, 2, 3, 4],
  [ 5, 6, 7, 8],
  [ 9,10,11,12],
  [13,14,15,16]
  ]

  shift rotate shift rotate...
 */

// function print(matrix) {
//   if (matrix.length == 0) {
//     return
//   }
//   let res = []
//   let firstRow = matrix.shift()
//   res = res.concat(firstRow)

//   while (matrix.length > 0) {
//     matrix = rotate(matrix)
//     res = res.concat(matrix.shift())
//   }

//   return res
// }

function print(matrix) {
  if (matrix.length == 0) {
    return
  }
  let res = []
  let firstRow = matrix.shift()
  res = res.concat(firstRow)

  while (matrix.length > 0) {
    matrix = rotate(matrix)
    res = res.concat(matrix.shift())
  }

  return res
}

// 逆时针旋转矩阵
// function rotate(matrix) {
//   //  数组为一维数组时，直接返回原数组
//   if (matrix[0].length == undefined) {
//     return matrix
//   }
//   let rows = matrix.length
//   let cols = matrix[0].length
//   let newMatrix = []

//   // 逆时针旋转
//   for (let j = cols - 1; j >= 0; j--) {
//     let tempMatrix = []
//     for (let i = 0; i < rows; i++) {
//       tempMatrix.push(matrix[i][j])
//     }
//     newMatrix.push(tempMatrix)
//   }
//   // 顺时针旋转
//   // for (let j = 0; j < cols; j++) {
//   //   let tempMatrix = []
//   //   for (let i = rows - 1; i >= 0; i--) {
//   //     tempMatrix.push(matrix[i][j])
//   //   }
//   //   newMatrix.push(tempMatrix)
//   // }

//   return newMatrix
// }

function rotate(matrix) {
  if (matrix[0].length == undefined) {
    return matrix
  }

  let rows = matrix.length
  let cols = matrix[0].length
  let newMatrix = []
  for (let j = cols - 1; j >= 0; j--) {
    let temp = []
    for (let i = 0; i < rows; i++) {
      temp.push(matrix[i][j])
    }
    newMatrix.push(temp)
  }

  return newMatrix
}

console.log(
  print([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ])
)

// console.log(
//   rotate([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ])
// )
