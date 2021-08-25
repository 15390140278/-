// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

let arr = [1, 2, 3, 2, 2, 2, 5, 4, 2]

function moreMid(arr) {
  let map = {}
  let res = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (!map[item]) {
      map[item] = 0
    }
    map[item]++
  }
  for (let key in map) {
    if (map[key] > Math.floor(arr.length / 2)) {
      res.push(Number(key))
    }
  }
  return res.length > 0 ? res : 0
}

console.log(moreMid(arr))
