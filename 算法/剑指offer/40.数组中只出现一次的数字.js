// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
// [1, 2, 3, 3, 4, 4] => 1,2
let arr = [1, 3, 2, 4, 3, 4]

// 第一种方法：使用js中的indexOf()和lastIndexOf(),只要两个相等，就是只出现一次的数。
function onlyOnce(arr) {
  let res = []
  arr.forEach(item => {
    if (arr.indexOf(item) == arr.lastIndexOf(item)) {
      res.push(item)
    }
  })

  console.log(res)
}

onlyOnce(arr)

// function onlyOnce(arr) {
//   let map = {}
//   let res = []
//   arr.forEach(item => {
//     if (!map[item]) {
//       map[item] = 0
//     }
//     map[item]++
//   })

//   for (let key in map) {
//     if (map[key] == 1) {
//       res.push(key)
//     }
//   }

//   console.log(res)
// }
