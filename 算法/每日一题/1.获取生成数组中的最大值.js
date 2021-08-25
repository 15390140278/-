// 给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：

// nums[0] = 0
// nums[1] = 1
// 当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
// 当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
// 返回生成数组 nums 中的 最大 值。

function getMaximumGenerated(n) {
  let nums = Array(n + 1)
  nums[0] = 0
  nums[1] = 1
  let max = 0
  for (let i = 2; i <= n; i++) {
    nums[i] = i % 2 ? nums[(i - 1) / 2] + nums[(i - 1) / 2 + 1] : nums[i / 2]
    max = Math.max(nums[i], max)
  }
  console.log(max)
}

getMaximumGenerated(7)
