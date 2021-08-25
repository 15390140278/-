// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]

let nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6, 7, 8, 9]

// function merge(nums1, m, nums2, n) {
//   for (let i = m; i < nums1.length; i++) {
//     nums1[i] = nums2[i - n]
//   }

//   nums1.sort()
//   console.log(nums1)
// }

// merge(nums1, 3, nums2, 3)

// function merge(nums1, m, nums2, n) {
//   let p = m-- + n-- - 1
//   while (n >= 0 && m >= 0) {
//     nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
//   }

//   console.log(nums1)
// }

// merge(nums1, 3, nums2, 6)

function merge(nums1, m, nums2, n) {
  let p = m-- + n-- - 1
  while (n >= 0 && m >= 0) {
    nums1[p--] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--]
  }

  console.log(nums1)
}

merge(nums1, 3, nums2, 6)
