// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3

let nums = [2, 3, 1, 0, 2, 5, 3]

function findRepeatNumber(nums) {
  let map = {}
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0
    }
    map[nums[i]]++
    if (map[nums[i]] > 1) {
      res.push(nums[i])
    }
  }

  // for (let key in map) {
  //   if (map[key] > 1) {
  //     res.push(key)
  //   }
  // }

  console.log(res)
}

findRepeatNumber(nums)
