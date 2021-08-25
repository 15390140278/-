// var lengthOfLongestSubstring = function (s) {
//   var str = s[0]
//   var max = 1
//   if (s == '') return 0
//   for (var i = 1; i < s.length; i++) {
//     // 重复 把原来的去掉
//     if (str.indexOf(s[i]) != -1) {
//       str = str.slice(str.indexOf(s[i]) + 1)
//     }
//     str += s[i]
//     max = max > str.length ? max : str.length
//   }
//   return max
// }

// 哈希表
var lengthOfLongestSubstring = function (s) {
  let map = new Map()
  let result = 0,
    count = 0,
    i = 0
  while (i < s.length) {
    if (!map.has(s[i])) {
      map.set(s[i], i)
      count++
      i++
    } else {
      if (result < count) result = count
      i = map.get(s[i]) + 1 //从重复字符的索引下一位开始继续循环
      map.clear() //清空哈希表重复利用
      count = 0 //重置count
    }
  }
  return result < count ? count : result //最后这里再判断一下防止直接在if条件中结束循环 result未被赋新值的情况
}

console.log(lengthOfLongestSubstring('ancdd'))

function lengthOfLongestSubstring(s) {
  let count = 0
  let result = 0
  let i = 0
  let map = new Map()
  while (i < map.length) {
    if (!map.has(s[i])) {
      // 记录i的位置
      map.set(s[i], i)
      i++
      count++
    } else {
      result = result < count ? count : result
      // 从下一位置开始
      i = map.get(s[i]) + 1
      map.clear()
      count = 0
    }
  }

  return (result = result < count ? count : result)
}

function lengthOfLongestSubstring(s) {
  let result = 0
  let count = 0
  let i = 0
  let map = new Map()
  while (i < s.length) {
    if (!map.has(s[i])) {
      map.set(s[i], i)
      i++
      count++
    } else {
      result = result < count ? count : result
      i = map.get(s[i]) + 1
      count = 0
    }
  }

  return (result = result < count ? count : result)
}
