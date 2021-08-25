// 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
function isUgly(num) {
  if (num < 1) {
    return false
  }
  while (num % 5 == 0) {
    num /= 5
  }
  while (num % 3 == 0) {
    num /= 3
  }
  while (num % 2 == 0) {
    num /= 2
  }

  return num == 1
}

console.log(isUgly(14))

function isUgly(num) {
  if (num < 1) {
    return false
  }

  while (num % 5 == 0) {
    num /= 5
  }
  while (num % 3 == 0) {
    num /= 3
  }
  while (num % 2 == 0) {
    num /= 2
  }

  return num == 1
}
