// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
//f(1) = 1 f(2) = 2
function rectCover(n) {
  if (n == 0) {
    return 0
  }
  let f = 1,
    g = 2
  while (--n) {
    g += f
    f = g - f
  }

  return f
}
