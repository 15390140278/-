// let wset = new WeakSet()
// let a = {
//   c: 1
// }
// let b = {
//   d: 2
// }
// wset.add(a)
// wset.add(b)
// // 不可枚举
// console.log(wset)
// let map = new Map()
// let o = {}
// map.set(o, 'o')
// console.log(map.get(o))
// weakMap只接受引用类型作为键
// 键名所指的对象是强引用
// let a = function () {}
// let arr = []
// let weakmap = new WeakMap()
// weakmap.set(a, 'a')
// console.log(weakmap.get(a))
// weakmap.set(arr, 'arr')
// console.log(weakmap.get(arr))
// let str = ''
// weakmap.set(str, 'str')
// console.log(weakmap.get(str))
