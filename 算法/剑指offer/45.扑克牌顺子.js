// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。大小王为癞子

// 输入: [1,2,3,4,5]
// 输出: True
// 输入: [0,0,1,2,5]
// 输出: True

// 1.最大和最小之差不超过5。
// 2.这5个数当中不能有重复的数字。(0除外)

let nums = [0, 0, 3, 4, 5]

// function isStraight(nums) {
//   nums.sort((a, b) => a - b)
//   let zeroCount = 0
//   // 两数之间间隙(1,3) => 1  (i,j) => j-i-1
//   let diff = 0
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] == 0) {
//       zeroCount++
//     } else {
//       if (nums[i] == nums[i + 1]) {
//         return false
//       }
//       if (nums[i] + 1 != nums[i + 1]) {
//         diff += nums[i + 1] - nums[i] - 1
//       }
//     }
//   }

//   return zeroCount >= diff
// }

// console.log(isStraight(nums))

function isStraight(nums) {
  let zeroCount = 0
  let diff = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == 0) {
      zeroCount++
    } else {
      if (nums[i] == nums[i + 1]) {
        return false
      }
      if (nums[i] + 1 != nums[i + 1]) {
        diff += nums[i + 1] - nums[i] - 1
      }
    }
  }

  return zeroCount >= diff
}

console.log(isStraight(nums))
