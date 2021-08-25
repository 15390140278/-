// function lengthOfLongestSubstring(s) {
//   let set = new Set()
//   let right = -1
//   let maxLen = 0
//   for (let left = 0; left < s.length; left++) {
//     // 左指针每次移动，将前面的删掉
//     if (left !== 0) {
//       set.delete(s[left - 1])
//     }
//     while (right + 1 < s.length && !set.has(s[right + 1])) {
//       set.add(s[right + 1])
//       right++
//     }
//     maxLen = Math.max(maxLen, right - left + 1)
//   }
//   return maxLen
// }

// console.log(lengthOfLongestSubstring('abca'))

function lengthOfLongestSubstring(s) {
  let set = new Set()
  let right = -1
  let maxLen = 0
  for (let left = 0; left < s.length; left++) {
    if (left !== 0) {
      set.delete(s[left - 1])
    }
    while (right + 1 < s.length && !set.has(s[right + 1])) {
      set.add(s[right + 1])
      right++
    }
    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}

console.log(lengthOfLongestSubstring('abca'))
