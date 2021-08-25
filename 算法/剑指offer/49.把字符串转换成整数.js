// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0
// 输入描述:
// 输入一个字符串,包括数字字母符号,可以为空
// 输出描述:
// 如果是合法的数值表达则返回该数字，否则返回0

let str = '123'

function StrToInt(str) {
  let res = 0
  let flag = false
  let i = 0
  while (str[i] == ' ') {
    i++
  }

  if (typeof (str[i] - '0') !== 'number' && str[i] !== '+' && str[i] !== '-') {
    return 0
  }

  if (str[i] == '-') {
    flag = true
    i++
  } else if (str[i] == '+') {
    i++
  }

  while (str[i] && typeof (str[i] - '0' == 'number')) {
    res = res * 10 + (str[i] - '0')
    if (flag == false && res > Number.MAX_SAFE_INTEGER) {
      return Number.MAX_SAFE_INTEGER
    } else if (flag == true && -res < Number.MIN_SAFE_INTEGER) {
      return Number.MIN_SAFE_INTEGER
    }
    i++
  }

  return flag ? -res : res
}

console.log(StrToInt(str))
