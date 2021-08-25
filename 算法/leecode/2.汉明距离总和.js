// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// // 汉明距离
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

// 转二进制
// var toB = function (x) {
//   let stack = []
//   while (Math.floor(x / 2) != 0) {
//     stack.unshift(x % 2)
//     x = Math.floor(x / 2)
//   }
//   stack.unshift(x)
//   return stack
// }
// 汉明距离总和
// var totalHammingDistance = function (nums) {
//   let arr = []
//   let result = 0
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       arr.push([nums[i], nums[j]])
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     result += hammingDistance(arr[i][0], arr[i][1])
//   }
//   return result
// }
// let nums = [4, 14, 2]
// let res = totalHammingDistance(nums)
// console.log(res)

// 高手思路
/*
	总结
	1.  思路是:
		比如有3个数(用二进制表示) (方向从右到左<-，分别为第1位、第2位...)
			第一个数 a: 1 0 0 1
			第二个数 b: 0 1 1 1
			第三个数 c: 0 0 1 1
		那么第一位上的汉明距离总和是0。
			为什么？ 因为a、b、c该位全是"1"，任意两个"1"的汉明距离是0，所以该位汉明距离总和是0。
		接下来看第二位，a的第二位是"0"，b、c的是"1"，此时该位的汉明距离就是2。
			为什么？ 由上面我们可以得到，该位的"0"有1个，"1"有2个，而任意一个"0"都可以和任意一个"1"组合，
					 一对组合可以产生的汉明距离为1，所以问题转换为了算多少对01组合，那么怎么计算呢？
					 答案就是该位"0"的个数乘以"1"的个数。
		接下来看第三位，可以看出，此时"0"有2个，"1"有1个，所以可以产生的汉明距离为2。
		接下来看第四位，可以看出，此时"0"有2个，"1"有1个，所以可以产生的汉明距离为2。
		于是: 总的汉明距离就是 0 + 2 + 2 + 2 = 6
*/
var totalHammingDistance = function (nums) {
  // to 32 二进制
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].toString(2)
    let length = nums[i].length
    let resStr = nums[i]
    if (length < 32) {
      for (let i = 0; i < 32 - length; i++) {
        resStr = '0' + resStr
      }
    }
    nums[i] = resStr
  }
  let zeroCount = 0
  let oneCount = 0
  let total = 0
  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j][i] == 0) {
        zeroCount++
      } else if (nums[j][i] == 1) {
        oneCount++
      }
    }
    total += zeroCount * oneCount
    zeroCount = oneCount = 0
  }
  return total
}
