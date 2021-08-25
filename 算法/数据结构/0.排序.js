let arr = [2, 3, 122, 43, 32]
// // 插入排序 O(n^2)
// // for (let i = 1; i < arr.length; i++) {
// //   temp = arr[i]
// //   j = i
// //   while (arr[j-1] > temp && j > 0) {
// //     arr[j] = arr[j - 1]
// //     j--
// //   }
// //   arr[j] = temp
// // }
// // console.log(arr)

// // 冒泡排序 O(n^2)
// // for (let i = 0; i < arr.length - 1; i++) {
// //   for (let j = 0; j < arr.length - 1 - i; j++) {
// //     if (arr[j] > arr[j + 1]) {
// //       let temp = arr[j]
// //       arr[j] = arr[j + 1]
// //       arr[j + 1] = temp
// //     }
// //   }
// // }

// // 改进冒泡
// // let i = arr.length - 1
// // while (i > 0) {
// //   let pos = 0
// //   for (let j = 0; j < i; j++) {
// //     if (arr[j] > arr[j + 1]) {
// //       pos = j
// //       let temp = arr[j]
// //       arr[j] = arr[j + 1]
// //       arr[j + 1] = temp
// //     }
// //   }
// //   i = pos
// //   console.log(i)
// // }
// // console.log(arr)

// // 选择排序 O(n^2)
// // function select(arr) {
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //       if (arr[i] > arr[j]) {
// //         let temp = arr[i]
// //         arr[i] = arr[j]
// //         arr[j] = temp
// //       }
// //     }
// //   }
// //   return arr
// // }

// // console.log(select(arr))

// // 插入排序
// // function insert(arr) {
// //   for (let i = 1; i < arr.length; i++) {
// //     let temp = arr[i]
// //     let j = i

// //     while (arr[j - 1] > temp && j > 0) {
// //       arr[j] = arr[j - 1]
// //       j--
// //     }
// //     arr[j] = temp
// //   }
// //   return arr
// // }

// // console.log(insert(arr))

// // 快速排序 O(nlog2 n)
// // function quick(arr) {
// //   if (arr.length <= 1) {
// //     return arr
// //   }
// //   let middleIndex = Math.floor(arr.length / 2)
// //   let middleValue = arr.splice(middleIndex, 1)[0]
// //   let leftArr = []
// //   let rightArr = []
// //   for (let i = 0; i < arr.length; i++) {
// //     let item = arr[i]
// //     if (item > middleValue) {
// //       rightArr.push(item)
// //     } else {
// //       leftArr.push(item)
// //     }
// //   }
// //   return quick(leftArr).concat(middleValue, quick(rightArr))
// // }

// // console.log(quick(arr))

// function quick(arr) {
//   if (arr.length < 2) {
//     return arr
//   }

//   let minIndex = Math.floor(arr.length / 2)
//   let minValue = arr.splice(minIndex, 1)[0]
//   let leftArr = []
//   let rightArr = []
//   arr.forEach(item => {
//     if (item > minValue) {
//       rightArr.push(item)
//     } else {
//       leftArr.push(item)
//     }
//   })

//   return quick(leftArr).concat(minValue, quick(rightArr))
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j]
//       arr[j] = arr[j + 1]
//       arr[j + 1] = temp
//     }
//   }
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   let temp = arr[i]
//   let j = i
//   while (arr[j - 1] > temp && j > 0) {
//     arr[j] = arr[j - 1]
//     j--
//   }
//   arr[j] = temp
// }

// 拆分合并
function merge(arr, left, mid, right) {
  let leftArr = []
  let rightArr = []
  let i, j
  for (i = left; i < mid; i++) {
    leftArr[i - left] = arr[i]
  }

  for (j = mid; j <= right; j++) {
    rightArr[j - mid] = arr[j]
  }
  let k = left
  ;(i = 0), (j = 0)

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      arr[k] = leftArr[i]
      i++
      k++
    } else {
      arr[k] = rightArr[j]
      j++
      k++
    }
  }

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
}

function mergeSort(arr, left, right) {
  if (left == right) {
    return
  }
  let mid = Math.floor((left + right) / 2)
  mergeSort(arr, left, mid)
  mergeSort(arr, mid + 1, right)
  merge(arr, left, mid + 1, right)
}

mergeSort(arr, 0, arr.length - 1)
console.log(arr)
