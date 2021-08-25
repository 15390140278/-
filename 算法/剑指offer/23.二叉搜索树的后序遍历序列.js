// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
let arr = [1, 2, 5, 4, 3]
// let arr = [5, 4, 3, 2, 1]

// function isHouxu(arr) {
//   if (arr.length == 0) {
//     return false
//   }

//   return judge(arr, 0, arr.length - 1)
// }

// function judge(arr, left, right) {
//   // 说明没return false
//   if (left >= right) {
//     return true
//   }

//   let i = right

//   // 倒着数，找到第一个比根(arr[right]小的索引 且i的索引必须大于1 因为是右子树上的
//   while (arr[i - 1] > arr[right] && i > 1) {
//     i--
//   }
//   // i前面的都应该比root小
//   for (let j = i - 1; j >= 0; j--) {
//     if (arr[j] > arr[right]) {
//       return false
//     }
//   }

//   // 左右子树递归
//   return judge(arr, 0, i - 1) && judge(arr, i, right - 1)
// }

// 非递归版
// function VerifySquenceOfBST2(sequence) {
//   let n = sequence.length,
//     i = 0
//   if (!n) return false
//   while (n--) {
//     while (sequence[i] < sequence[n]) i++
//     while (sequence[i] > sequence[n]) i++
//     if (i < n) return false
//     i = 0
//   }
//   return true
// }

function isHouxu(arr) {
  if (arr.length == 0) {
    return false
  }
  return judge(arr, 0, arr.length - 1)
}

function judge(arr, left, right) {
  if (left >= right) {
    return true
  }

  let i = right

  while (arr[i - 1] > arr[right] && i > 1) {
    i--
  }

  for (let j = i - 1; j >= 0; j--) {
    if (arr[j] > arr[right]) {
      return false
    }
  }

  return judge(arr, 0, i - 1) && judge(arr, i, right - 1)
}

console.log(isHouxu(arr))
