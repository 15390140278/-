// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
// 输入描述：输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。

let str = 'abc'

// function permutation(str) {
//   let res = []
//   let queue = str.split('')
//   let length = str.length

//   // 固定第x位上的字符
//   function fix(x) {
//     if (x == length - 1) {
//       res.push(queue.join(''))
//       return
//     }
//     let seen = new Set()
//     for (let i = x; i < length; i++) {
//       if (seen.has(queue[i])) {
//         // 重复字符处理
//         continue
//       }
//       seen.add(queue[i])
//       ;[queue[x], queue[i]] = [queue[i], queue[x]]
//       fix(x + 1)
//       // 位置换回来，防止出现重复的情况
//       ;[queue[x], queue[i]] = [queue[i], queue[x]]
//     }
//   }

//   fix(0)
//   return res
// }

// console.log(permutation(str))

function permutation(str) {
  let queue = str.split('')
  let length = str.length
  let res = []

  function fix(x) {
    if (x == length - 1) {
      // 'abc'
      return res.push(queue.join(''))
    }

    let seen = new Set()
    for (let i = x; i < length; i++) {
      if (seen.has(queue[i])) {
        continue
      }
      seen.add(queue[i])
      ;[queue[x], queue[i]] = [queue[i], queue[x]]
      fix(x + 1)
      ;[queue[x], queue[i]] = [queue[i], queue[x]]
    }
  }

  fix(0)
  return res
}

console.log(permutation(str))
