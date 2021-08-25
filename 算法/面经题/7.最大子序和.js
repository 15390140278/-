function maxSubArray(nums) {
  let res = nums[0]
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    res = Math.max(res, sum)
  }
  return res
}
