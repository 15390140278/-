// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
// 输出描述:
// 对应每个测试案例，输出两个数，小的先输出。
//[1,2,3,4,5] 5 => 1,4

// 使用双指针就可以做出来了。此外相距最远，乘积最小。

let arr = [1, 2, 3, 4, 5]

function find(arr, target) {
  let left = 0
  let right = arr.length - 1
  let res = []
  while (left < right) {
    if (arr[left] + arr[right] < target) {
      left++
    } else if (arr[left] + arr[right] > target) {
      right--
    } else {
      res.push(arr[left], arr[right])
      break
    }
  }
  console.log(res)
}

find(arr, 5)
