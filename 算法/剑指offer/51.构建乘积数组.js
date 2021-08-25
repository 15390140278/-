// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

// 输入: [1,2,3,4,5]
// 输出: [120,60,40,30,24]

let arr = [1, 2, 3, 4, 5]

// function constructArr(a) {
//   let n = a.length
//   let b = []
//   /* 从左往右累乘 */
//   for (let i = 0, product = 1; i < n; product *= a[i], i++) {
//     b[i] = product
//   }
//   // console.log(b) //[ 1, 1, 2, 6, 24 ]
//   /* 从右往左累乘 */
//   for (let i = n - 1, product = 1; i >= 0; product *= a[i], i--) {
//     b[i] *= product
//   }

//   return b
// }

// console.log(constructArr(arr))

// function constructArr(a) {
//   let n = a.length
//   let b = []
//   for (let i = 0, product = 1; i < n; product *= a[i], i++) {
//     b[i] = product
//   }

//   for (let i = n - 1, product = 1; i >= 0; product *= a[i], i--) {
//     b[i] *= product
//   }

//   return b
// }

// console.log(constructArr(arr))

// 第一种
// function multiply(array) {
//   const C = [],
//     D = [],
//     n = array.length
//   C[0] = array[0]
//   for (let i = 1; i < n; i++) {
//     C[i] = array[i] * C[i - 1]
//   }
//   D[n - 1] = array[n - 1]
//   for (let i = n - 2; i >= 0; i--) {
//     D[i] = array[i] * D[i + 1]
//   }                 // 1 1*2 1*2*3 1*2*3*4 1*2*3*4*5
//   console.log(C) //[ 1, 2, 6, 24, 120 ]
//                    5*4*3*2*1      5*4*3*2    5*4*3    5*4    5
//   console.log(D) // [ 120, 120, 60, 20, 5 ]
//   const B = []
//   B[0] = D[1]
//   B[n - 1] = C[n - 2]
//   for (let i = 1; i < n - 1; i++) {
//     B[i] = C[i - 1] * D[i + 1]
//   }

//   return B
// }

// multiply(arr)

// function multiply(arr) {
//   let C = []
//   let D = []
//   let B = []
//   let n = arr.length
//   C[0] = arr[0]
//   for (let i = 1; i < n; i++) {
//     C[i] = arr[i] * C[i - 1]
//   }
//   D[n - 1] = arr[n - 1]
//   for (let i = n - 2; i >= 0; i--) {
//     D[i] = arr[i] * D[i + 1]
//   }

//   B[0] = D[1]
//   B[n - 1] = C[n - 2]

//   for (let i = 1; i < n - 1; i++) {
//     B[i] = C[i - 1] * D[i + 1]
//   }

//   return B
// }

// console.log(multiply(arr))

function multiply(arr) {
  let C = []
  let D = []
  let B = []
  let n = arr.length
  C[0] = arr[0]
  for (let i = 1; i < n - 1; i++) {
    C[i] = arr[i] * C[i - 1]
  }

  D[n - 1] = arr[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    D[i] = arr[i] * D[i + 1]
  }

  B[0] = D[1]
  B[n - 1] = C[n - 2]
  for (let i = 1; i < n - 1; i++) {
    B[i] = C[i - 1] * D[i + 1]
  }

  return B
}

console.log(multiply(arr))
