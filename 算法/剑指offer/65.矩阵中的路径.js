// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
/**
 * a b c e
 * s f c s
 * a d e e
 *
 * bcced
 */

let list = [
  ['a', 'b', 'c', 'e'],
  ['s', 'f', 'c', 's'],
  ['a', 'd', 'e', 'e']
]

// function isExist(list, word) {
//   let rows = list.length
//   let cols = list[0].length

//   function dfs(k, row, col) {
//     if (row < 0 || row >= rows || col < 0 || col >= cols || word[k] !== list[row][col]) {
//       return false
//     }
//     if (k == word.length - 1) {
//       return true
//     }
//     // 防止重复访问
//     let tmp = list[row][col]
//     list[row][col] = '#'
//     res = dfs(k + 1, row - 1, col) || dfs(k + 1, row + 1, col) || dfs(k + 1, row, col - 1) || dfs(k + 1, row, col + 1)
//     list[row][col] = tmp
//     return res
//   }

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (dfs(0, i, j)) {
//         return true
//       }
//     }
//   }

//   return false
// }

// console.log(isExist(list, 'bcced'))

function isExist(list, word) {
  let rows = list.length
  let cols = list[0].length

  function dfs(k, row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || word[k] !== list[row][col]) {
      return false
    }

    if (k == word.length - 1) {
      return true
    }

    let tmp = list[row][col]
    list[row][col] = '#'
    let res = dfs(k + 1, row - 1, col) || dfs(k + 1, row + 1, col) || dfs(k + 1, row, col - 1) || dfs(k + 1, row, col + 1)
    list[row][col] = tmp
    return res
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(0, i, j)) {
        return true
      }
    }
  }

  return false
}

console.log(isExist(list, 'bcced'))
