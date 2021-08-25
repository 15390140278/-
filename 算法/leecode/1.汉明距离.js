// /**
//  * @param {number} x
//  * @param {number} y
//  * @return {number}
//  */
// var hammingDistance = function (x, y) {
//   let result = 0
//   let stackX = toB(x)
//   let stackY = toB(y)
//   let tailX = stackX.length - 1
//   let tailY = stackY.length - 1
//   while (tailX >= 0 && tailY >= 0) {
//     if (stackX[tailX] != stackY[tailY]) {
//       result++
//     }
//     tailX--
//     tailY--
//   }
//   if (tailX >= 0) {
//     for (let i = 0; i <= tailX; i++) {
//       if (stackX[i] > 0) {
//         result++
//       }
//     }
//   } else if (tailY >= 0) {
//     for (let i = 0; i <= tailY; i++) {
//       if (stackY[i] > 0) {
//         result++
//       }
//     }
//   }
//   return result
// }
// res = hammingDistance(1, 3)
// console.log(res)

// function toB(x) {
//   let stack = []
//   while (Math.floor(x / 2) != 0) {
//     stack.unshift(x % 2)
//     x = Math.floor(x / 2)
//   }
//   stack.unshift(x)
//   return stack
// }

// 异或
function hammingDistance(x, y) {
  let z = x ^ y
  let sum = 0
  while (z) {
    sum += z & 1
    z = z >> 1
  }
  console.log(sum)
}
hammingDistance(6, 4)
