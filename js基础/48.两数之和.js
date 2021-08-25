// 给定 nums = [2, 7, 11, 15], target = 9
let nums = [3, 7, 11, 16]
let target = 18

function sum(nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (num < target) {
      res.push(num)
      if (res.length == 2) {
        if (res.reduce((a, c) => a + c) == target) {
          return res.map(item => nums.indexOf(item))
        } else {
          res.pop()
          if (i == nums.length - 1) {
            i = nums.indexOf(res.pop())
          }
        }
      }
      continue
    }
  }
}

console.log(sum(nums, target))
