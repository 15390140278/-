// 输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'

const nums1 = [1, 2, 3, 5, 7, 8, 10]
// function simplifyStr(num) {
//   var result = []
//   var temp = num[0] //1
//   num.forEach((value, index) => {
//     // value = 3 value = 5 value=7 value =  8 value=10
//     if (value + 1 !== num[index + 1]) {
//       // temp=1 value=3 temp=5 value=5 temp = 7 value=8 temp=10 value=10
//       if (temp !== value) {
//         // 1-3 7-8
//         result.push(`${temp}~${value}`)
//       } else {
//         // 5 10
//         result.push(`${value}`)
//       }
//       // temp = 5 temp = 7 temp=10
//       temp = num[index + 1]
//     }
//   })
//   return result
// }

// function simplifyStr(nums) {
//   let temp = nums[0]
//   let res = []
//   nums.forEach((value, index) => {
//     if (value + 1 !== nums[index + 1]) {
//       if (temp !== value) {
//         res.push(`${temp}~${value}`)
//       } else {
//         res.push(`${value}`)
//       }
//       temp = nums[index + 1]
//     }
//   })
//   return res
// }

// console.log(simplifyStr(nums1).join(','))

function simplifyStr(nums) {
  let temp = nums[0]
  let res = []
  nums.forEach((value, index) => {
    if (value + 1 !== nums[index + 1]) {
      if (temp !== value) {
        res.push(`${temp}->${value}`)
      } else {
        res.push(`${value}`)
      }
      temp = nums[index + 1]
    }
  })
  return res
}

console.log(simplifyStr(nums1).join(','))
