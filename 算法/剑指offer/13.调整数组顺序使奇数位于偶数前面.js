// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
let arr = [1, 2, 3, 4, 5]

function reOrderArray(arr) {
  let oddBegin = 0,
    oddCount = 0
  let newArr = []
  // 记录奇数个数
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] & 1) {
      oddCount++
    }
  }

  // 前面放奇数，后面放偶数
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] & 1) {
      newArr[oddBegin++] = arr[i]
    } else {
      newArr[oddCount++] = arr[i]
    }
  }

  console.log(newArr)
}

reOrderArray(arr)
