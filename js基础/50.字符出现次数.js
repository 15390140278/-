// 'abccha' => ['aa','b','cc','h']

let str = 'abccha'

// function reverse(str) {
//   let map = {}
//   let res = []
//   for (let i = 0; i < str.length; i++) {
//     if (map[str[i]] == null) {
//       map[str[i]] = 0
//     }
//     map[str[i]]++
//   }
//   let resStr = ''
//   for (let key in map) {
//     for (let i = 0; i < map[key]; i++) {
//       resStr += key
//     }
//     res.push(resStr)
//     resStr = ''
//   }
//   console.log(res)
// }

function reverse(str) {
  let strA = str.split('')
  return Array.from(new Set(strA)).map(item => {
    return Array(strA.filter(filter => filter === item).length + 1).join(item)
  })

  // Array(strA.filter(filter => filter === item).length + 1).join(item)
  // 数组转字符串以item为连接符,利用空数组实现累加字符
  // [,,,].join('a') => aa
}

console.log(reverse(str))
