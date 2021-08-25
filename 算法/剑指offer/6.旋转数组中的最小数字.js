// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

// function rotate(arr) {
//   if (arr.length == 0) {
//     return 0
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }

//   return arr[0]
// }

// 二分法
function rotate(arr) {
  let left = 0,
    right = arr.length - 1,
    mid = Math.floor((left + right) / 2)
  // 边界条件
  while (right - left > 1) {
    if (arr[mid] > arr[right]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return Math.min(arr[left], arr[right])
}

console.log(rotate([3, 4, 5, 1, 2]))
