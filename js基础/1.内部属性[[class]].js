class A {}
console.log(Object.prototype.toString.call(new A()))
// 定制[[class]]
class B {
  get [Symbol.toStringTag]() {
    return 'B'
  }
}
console.log(Object.prototype.toString.call(new B()))
