// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

function sum(n) {
  return n && sum(n - 1) + n
}

console.log(sum(5))
