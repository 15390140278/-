// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
// 输入：s = "aa" p = "a"
// 输出：false
// 解释："a" 无法匹配 "aa" 整个字符串。
// 输入：s = "aa" p = "a*"
// 输出：true
// 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

// function matchCore(s, istr, pattern, ipattern) {
//   if (istr == s.length && ipattern == pattern.length) {
//     return true
//   }

//   if (istr !== s.length && ipattern === pattern.length) {
//     return false
//   }

//   if (pattern[ipattern + 1] == '*') {
//     if ((pattern[ipattern] == '.' && istr != s.length) || pattern[ipattern] == s[istr]) {
//       return (
//         // 如果模式中第一个字符和字符串中的第一个字符相匹配，则在字符串上向后移动一个字符
//         //这种情况下可以有两种选择：
//         //模式上向后移动两个字符
//         matchCore(s, istr + 1, pattern, ipattern + 2) ||
//         //模式保持不变
//         matchCore(s, istr + 1, pattern, ipattern) ||
//         //在模式上上向后移动两个字符，相当于x*被忽略。因为“*”可以匹配字符串中的0个字符。
//         matchCore(s, istr, pattern, ipattern + 2)
//       )
//     }
//     //在模式上上向后移动两个字符，相当于x*被忽略。因为“*”可以匹配字符串中的0个字符。
//     return matchCore(s, istr, pattern, ipattern + 2)
//   }

//   if (s[istr] == pattern[ipattern] || (pattern[ipattern] == '.' && istr !== s.length)) {
//     return matchCore(s, istr + 1, pattern, ipattern + 1)
//   }

//   return false
// }

// function match(s, pattern) {
//   if (s == null || pattern == null) {
//     return false
//   }

//   return matchCore(s, 0, pattern, 0)
// }

// console.log(match('aaa', 'a..'))

function matchCore(s, istr, pattern, ipattern) {
  if (istr == s.length && ipattern == pattern.length) {
    return true
  }

  if (istr !== s.length && ipattern == pattern.length) {
    return false
  }

  if (pattern[ipattern + 1] == '*') {
    if (s[istr] == pattern[ipattern] || (pattern[ipattern] == '.' && istr !== s.length)) {
      return (
        matchCore(s, istr, pattern, ipattern + 2) ||
        matchCore(s, istr + 1, pattern, ipattern) ||
        matchCore(s, istr + 1, pattern, ipattern + 2)
      )
    }

    return matchCore(s, istr, pattern, ipattern + 2)
  }

  if (s[istr] == pattern[ipattern] || (pattern[ipattern] == '.' && istr !== s.length)) {
    return matchCore(s, istr + 1, pattern, ipattern + 1)
  }

  return false
}

function match(s, pattern) {
  if (s.length == null || pattern.length == null) {
    return false
  }

  return matchCore(s, 0, pattern, 0)
}

console.log(match('aaa', '.*'))
