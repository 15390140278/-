/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//   let nums = nums1.concat(nums2)
//   let mid
//   nums = sort(nums)
//   console.log(nums)
//   if (nums.length % 2 == 0) {
//     mid = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2
//   } else {
//     mid = nums[Math.floor(nums.length / 2)]
//   }
//   return mid
// }

// findMedianSortedArrays([1, 3], [2])

// function sort(nums) {
// 冒泡排序
// for (let i = 0; i < nums.length - 1; i++) {
//   for (let j = 0; j < nums.length - 1 - i; j++) {
//     if (nums[j] > nums[j + 1]) {
//       let temp = nums[j]
//       nums[j] = nums[j + 1]
//       nums[j + 1] = temp
//     }
//   }
// }

// 选择排序
// for (let i = 0; i < nums.length - 1; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] > nums[j]) {
//       let temp = nums[i]
//       nums[i] = nums[j]
//       nums[j] = temp
//     }
//   }
// }

// 插入排序
//   for (let i = 1; i < nums.length; i++) {
//     let temp = nums[i]
//     let j = i
//     while (nums[j - 1] > temp && j > 0) {
//       nums[j] = nums[j - 1]
//       j--
//     }
//     nums[j] = temp
//   }

//   return nums
// }

/**
 *利用数组原来是有序的
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 将较短的数组设置为一号数组
  if (nums1.length > nums2.length) {
    let temp = nums1
    nums1 = nums2
    nums2 = temp
  }
  let m = nums1.length
  let n = nums2.length
  // 分割线左边的元素的个数 (m+n+1)/2 无论m+n是奇数还是偶数都能取到正确的个数
  // m+n为奇数,令左边比右边多一个
  let totalLeft = Math.floor((m + n + 1) / 2)
  // 分割线数组右边的第一个元素的下标i=分割线左边数组的元素的个数
  // 令第一个数组的右边数组第一个元素为下标为i ,第二个为j
  // 有 totalLeft = i + j
  // 即i + j = Math.floor((m + n + 1) / 2)
  // 在较短的数组中[0,m]找分割线,确保分割线左右两边都有元素
  // 满足交叉小于等于
  // nums1[i-1] <= nums2[j] && nums2[j-1] <= nums1[i]
  let left = 0
  let right = m
  while (left < right) {
    let i = left + Math.floor((right - left + 1) / 2)
    let j = totalLeft - i
    // 不满足交叉小于等于
    if (nums1[i - 1] > nums2[j]) {
      // i靠右了 下一轮搜索区间[left, i-1]
      right = i - 1
    } else {
      // 反区间 [i,right]
      // [left,right]这种情况会死循环 所以取中位数的时候+1
      // let i = left + Math.floor((right - left + 1) / 2) 保证i>0
      left = i
    }
  }
  // 找到分割线
  let i = left
  let j = totalLeft - i
  // 拿到分割线左右两侧的四个元素
  // 考虑数组下标越界的情况
  let nums1LeftMax = i == 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1]
  let nums1RightMin = i == m ? Number.MAX_SAFE_INTEGER : nums1[i]
  let nums2LeftMax = j == 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1]
  let nums2RightMin = j == n ? Number.MAX_SAFE_INTEGER : nums2[j]
  // 求中位数
  // 总长度为奇数 返回左边最大
  if ((m + n) % 2 != 0) {
    return Math.max(nums1LeftMax, nums2LeftMax)
  } else {
    // 总长度为偶数 返回左边最大和右边最小的平均数
    return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2
  }
}

console.log(findMedianSortedArrays([1, 3, 4], [2, 4, 6]))
