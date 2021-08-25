// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2

let nums = [5, 7, 7, 8, 8, 8]

// function getCount(nums, target) {
//   let count = 1
//   let index = nums.findIndex(item => item == target)
//   for (let i = index; i < nums.length - 1; i++) {
//     if (nums[i] == nums[i + 1]) {
//       count++
//     }
//   }
//   console.log(count)
// }

// getCount(nums, 8)

// 二分法
// function getCount(nums, target) {
//   let left = 0
//   let right = nums.length - 1
//   let count = 0
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2)
//     if (nums[mid] >= target) {
//       right = mid
//     }
//     if (nums[mid] < target) {
//       left = mid + 1
//     }
//   }

//   while (left < nums.length && nums[left++] == target) {
//     count++
//   }
//   console.log(count)
// }

// getCount(nums, 8)

function getCount(nums, target) {
  let left = 0
  let right = nums.length - 1
  let count = 0
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] >= target) {
      right = mid
    }
    if (nums[mid] < target) {
      left = mid + 1
    }
  }

  while (left < nums.length && nums[left++] == target) {
    count++
  }

  console.log(count)
}

getCount(nums, 8)
