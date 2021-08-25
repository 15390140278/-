// sort()可以调用一个函数做为参数，如果这个函数返回的值为-1表示数组中的a项排在b项前
let arr = [1, 2, 3, 4, 5]
// 升序
arr.sort((a, b) => a - b)
// 降序
arr.sort((a, b) => b - a)

//1 随机排序
// 缺点：每个元素被派到新数组的位置不是随机的，原因是 sort() 方法是依次比较的。
// let randomSort = (a, b) => {
//   return Math.random() > 0.5 ? 1 : -1
// }

//2 随机从原数组抽取一个元素，加入到新数组
// let randomSort = arr => {
//   let result = []
//   while (arr.length > 0) {
//     let randomIdx = Math.floor(arr.length * Math.random())
//     result.push(arr[randomIdx])
//     arr.splice(randomIdx, 1)
//   }
//   return result
// }

// 3随机交换数组内的元素（洗牌算法类似）
// let randomSort = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     let randomIdx = Math.floor((arr.length - i) * Math.random()) + i
//     let temp = arr[i]
//     arr[i] = arr[randomIdx]
//     arr[randomIdx] = temp
//   }
//   return arr
// }
// console.log(randomSort(arr))

// es6
let randomSort = arr => {
  let length = arr.length
  if (!Array.isArray(arr) || length <= 1) {
    return
  }
  for (let i = 0; i < arr.length; i++) {
    let randomIdx = Math.floor((arr.length - i) * Math.random()) + i
    ;[arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]]
  }
  return arr
}
console.log(randomSort(arr))
