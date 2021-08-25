// 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。
// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

// m>=1 m=1代表删除第一个即index = 0
// function lastNum(n, m) {
//   let nums = []
//   let index = 0
//   for (let i = 0; i < n; i++) {
//     nums[i] = i
//   }
//   while (n > 1) {
//     index = (index + m - 1) % n
//     nums.splice(index, 1)
//     n--
//   }

//   return nums[0]
// }

// console.log(lastNum(5, 3))
// console.log(lastNum(10, 17))

function lastNum(n, m) {
  let nums = []
  let index = 0
  for (let i = 0; i < n; i++) {
    nums[i] = i
  }

  while (n > 1) {
    index = (index + m - 1) % n
    nums.splice(index, 1)
    n--
  }

  return nums[0]
}

console.log(lastNum(5, 3))
console.log(lastNum(10, 17))
