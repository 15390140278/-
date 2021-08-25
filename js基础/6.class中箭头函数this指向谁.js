class A {
  fun = () => {
    return this
  }
}
let a = new A()
// this指向实例
console.log(a)
console.log(a.fun())
console.log(a == a.fun())
