// function objectFactory() {
//   // new操作
//   // 1新建一个空对象,是一个实例
//   // 初始化对象
//   let newObj = null,
//     // 拿到构造函数
//     constructor = Array.prototype.shift.call(arguments),
//     // 初始化调用构造函数的返回结果
//     result = null
//   if (typeof constructor !== 'function') {
//     console.error('type error')
//     return
//   }
//   // 创建Person实例
//   newObj = Object.create(constructor.prototype)
//   // 调用构造函数
//   result = constructor.apply(newObj, arguments)
//   // 判读构造函数返回结果是否是引用类型
//   let flag = result && (typeof result === 'object' || typeof result === 'function')
//   // 如果result是引用类型,就将result返回,否则返回newObj
//   return flag ? result : newObj
// }

// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// console.log(objectFactory(Person, 'zs', 18))

function Dog(name, age) {
  this.name = name
  this.age = age
}

function newObj(constructor, ...args) {
  let newObj = Object.create(constructor.prototype)
  let res = constructor.apply(newObj, args)
  return res instanceof Object ? res : newObj
}

let dog = newObj(Dog, 'zs', 18)
console.log(dog)
