// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007
// 输入：题目保证输入的数组中没有的相同的数字
// 数据范围：
// 对于%50的数据,size<=10^4
// 对于%75的数据,size<=10^5
// 对于%100的数据,size<=2*10^5

let nums = [2, 3, 122, 43, 32]

// let nums = [5, 4, 3, 2, 1]

//暴力解法
// function reversePairs(nums) {
//   let res = 0
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         res++
//       }
//     }
//   }

//   return res
// }

// console.log(reversePairs(nums))

// 归并排序
function merge(arr, left, mid, right) {
  let leftArr = [],
    rightArr = []
  let i, j
  let count = 0
  for (i = left; i < mid; i++) {
    leftArr[i - left] = arr[i]
  }

  for (j = mid; j <= right; j++) {
    rightArr[j - mid] = arr[j]
  }

  //**k = 0 */
  let k = left
  ;(i = 0), (j = 0)
  while (leftArr.length > i && rightArr.length > j) {
    if (leftArr[i] < rightArr[j]) {
      arr[k] = leftArr[i]
      i++
      k++
    } else {
      arr[k] = rightArr[j]
      // 右边的数组归并，count增加当前左边数组的长度 （j + mid - i)
      count += j + mid - i
      j++
      k++
    }
  }

  // 剩余的补充进去
  while (i < leftArr.length) {
    arr[k] = leftArr[i]
    i++
    k++
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j]
    j++
    k++
  }

  return count
}

function mergeSort(arr, left, right) {
  if (left == right) {
    return
  }
  let mid = Math.floor((left + right) / 2)
  mergeSort(arr, left, mid)
  mergeSort(arr, mid + 1, right)
  return merge(arr, left, mid + 1, right)
}

console.log(mergeSort(nums, 0, nums.length - 1))
