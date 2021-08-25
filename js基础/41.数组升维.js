// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
let arr = [2, 10, 3, 4, 5, 11, 10, 11, 20]

function shenwei(arr) {
  let map = {}
  let res = []
  Array.from(new Set(arr.sort((a, b) => a - b))).forEach(item => {
    if (!map[Math.floor(item / 10)]) {
      map[Math.floor(item / 10)] = []
    }
    map[Math.floor(item / 10)].push(item)
  })
  for (let i in map) {
    res.push(map[i])
  }
  return res
}

console.log(shenwei(arr))
