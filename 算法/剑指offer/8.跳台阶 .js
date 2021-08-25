// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
// 斐波拉契数列

function jump(n) {
  let f = 1,
    g = 2
  while (--n) {
    g += f
    f = g - f
  }

  return f
}

console.log(jump(3))
