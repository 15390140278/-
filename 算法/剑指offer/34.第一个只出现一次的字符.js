// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数）
// 输入："google"
// 返回值：4

function find(str) {
  let map = {}
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 0
    }
    map[str[i]]++
  }

  for (let key in map) {
    if (map[key] == 1) {
      return str.indexOf(key)
    }
  }

  return -1
}

console.log(find('google'))
