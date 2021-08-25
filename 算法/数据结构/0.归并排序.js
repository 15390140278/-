let arr = [2, 3, 122, 43, 32]

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

console.log(mergeSort(arr, 0, arr.length - 1))
