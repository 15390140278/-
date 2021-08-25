// 递归
function bsearch(array, low, high, target) {
  if (low > high) {
    return -1
  }
  let mid = Math.floor((low + high) / 2)
  if (target < array[mid]) {
    return bsearch(array, low, mid - 1, target)
  } else if (target > array[mid]) {
    return bsearch(array, mid + 1, high, target)
  } else {
    return mid
  }
}
// 栈
function bsearchWithoutRecursion(array, low, high, target) {
  // while (low <= high) {
  //   var mid = Math.floor((low + high) / 2)
  //   if (array[mid] > target) {
  //     high = mid - 1
  //   } else if (array[mid] < target) {
  //     low = mid + 1
  //   } else {
  //     return mid
  //   }
  // }
  // return -1

  while (low < high) {
    let mid = Math.floor((low + high) / 2)
    if (array[mid] > target) {
      high = mid - 1
    } else if (array[mid] < target) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

function bsearch(array, low, high, target) {
  if (low > high) {
    return -1
  }

  let mid = Math.floor((low + high) / 2)
  if (array[mid] > target) {
    return bsearch(array, low, mid - 1)
  } else if (array[mid] < target) {
    return bsearch(array, mid + 1, high)
  } else {
    return mid
  }
}
