let myInstanceof = function (left, right) {
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype
  while (true) {
    if (!proto) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
console.log(myInstanceof(new Object(), Object))

// function myInstanceof(left, right) {
//   let proto = Object.getPrototypeOf(left), // 获取对象的原型
//     prototype = right.prototype // 获取构造函数的 prototype 对象
//   // 判断构造函数的 prototype 对象是否在对象的原型链上
//   while (true) {
//     if (!proto) return false
//     if (proto === prototype) return true
//     proto = Object.getPrototypeOf(proto)
//   }
// }
