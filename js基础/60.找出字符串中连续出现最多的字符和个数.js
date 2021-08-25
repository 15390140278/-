// 'abcaakjbb' => {'a':2,'b':2}
// 'abbkejsbcccwqaa' => {'c':3}

let str = 'abcaaajbb'

// function findMost(str) {
//   let count = 0
//   let maxCount = 0
//   let cur = str[0]
//   let res = {}

//   for (let i = 0; i < str.length; i++) {
//     let s = str[i]
//     if (cur == s) {
//       count++
//       if (count > maxCount) {
//         res = {
//           [s]: count
//         }
//         maxCount = count
//       }
//       if (count == maxCount) {
//         res[s] = count
//       }
//     } else {
//       cur = s
//       count = 1
//     }
//   }

//   return res
// }
// console.log(findMost(str))

// 正则
const arr = str.match(/(\w)\1*/g)
console.log(arr) //[ 'a', 'b', 'c', 'aaa', 'j', 'bb' ]
const maxLen = Math.max(...arr.map(s => s.length))
const result = arr.reduce((pre, curr) => {
  if (curr.length === maxLen) {
    pre[curr[0]] = curr.length
  }
  return pre
}, {})

console.log(result)
