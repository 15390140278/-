Number.prototype.add = function (num) {
  return this.valueOf() + num
}
Number.prototype.minus = function (num) {
  return this.valueOf() - num
}
// 数字调用方法要加个()
console.log((5).add(3).minus(2))
