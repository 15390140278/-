// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 这题我们可以分析数组，一个一个的找规律。不过如果知道动态规划的话，很容易发现后面的结果跟前面的有关系。如果用函数sum(i)表示以第i个数字结尾的子数组的最大和，那么我们只需要求出
// max[sum(i)]，其中可以用如下递归公式。
// 当i=0时，或者sum(i-1)<=0时，sum(i)=array[i];
// 当i≠0时，或者sum(i-1)>0时，sum(i)=sum(i-1)+array[i];

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// function maxSub(arr) {
//   let dp = []
//   dp[0] = arr[0]
//   let max = dp[0]
//   for (let i = 1; i < arr.length; i++) {
//     dp[i] = Math.max(dp[i - 1] + arr[i], arr[i])
//     max = Math.max(max, dp[i])
//   }
//   return max
// }

// console.log(maxSub(arr))

function maxSub(arr) {
  let dp = []
  dp[0] = arr[0]
  let max = dp[0]
  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i])
    max = Math.max(dp[i], max)
  }

  return max
}

console.log(maxSub(arr))
