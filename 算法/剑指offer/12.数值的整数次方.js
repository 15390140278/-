// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
//浮点数的整数次方

// 快速求幂
function pow(base, exponent) {
  let res = 1

  while (exponent) {
    if (exponent & 1) {
      res *= base
    }
    base *= base
    exponent >>= 1
  }

  return res
}

function Power(base, exponent) {
  let res = 1
  let n
  if (exponent > 0) {
    n = exponent
  } else if (exponent < 0) {
    if (base == 0) {
      throw new Error('分母不能为0')
    }
    n = -exponent
  } else {
    return 1
  }

  while (n) {
    if (n & 1) {
      res *= base
    }
    base *= base
    n >>= 1
  }

  return exponent > 0 ? res : 1 / res
}

console.log(Power(1.414, 2))
