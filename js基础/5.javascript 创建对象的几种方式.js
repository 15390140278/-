// 1.工厂模式 没有建立对象和类型的关系
// function createObj(name, age) {
//   var obj = new Object()
//   obj.name = name
//   obj.age = age
//   return obj
// }
// var o = createObj('zs', 18)
// console.log(o)

// 2.构造函数模式 每个实例的方法不能共用
// function Obj(name, age) {
//   this.name = name
//   this.age = age
// }
// var o = new Obj('zs', 18)
// console.log(o)

// 3原型模式
// function Person() {}
// Person.prototype.name = 'Nike'
// Person.prototype.age = 20
// Person.prototype.jbo = 'teacher'
// Person.prototype.sayName = function () {
//   alert(this.name)
// }
// var person1 = new Person()
// person1.sayName()
