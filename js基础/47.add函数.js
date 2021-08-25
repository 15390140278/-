function add() {
  let args = [...arguments]
  add = function () {
    args = args.concat([...arguments])
    return add
  }

  add.toString = function () {
    return args.reduce((a, c) => a + c)
  }

  return add
}
console.log(add(1, 2, 3)(4).toString())

// function add(a, b) {
//   return a + b
// }

// function curry(fn, args) {
//   // fn的参数个数,当收集的参数个数达到len，执行fn
//   let len = fn.length
//   // args收集参数
//   args = args || []

//   return function () {
//     let newArgs = args.concat(...arguments)
//     if (newArgs.length < len) {
//       // apply只能两个参数
//       // return curry.apply(this, fn, ...newArgs)
//       return curry.call(this, fn, newArgs)
//     } else {
//       return fn.call(this, ...newArgs)
//     }
//   }
// }

// function curry(fn, args) {
//   let len = fn.length
//   args = args || []
//   return function () {
//     let newArgs = args.concat(...arguments)
//     if (newArgs.length < len) {
//       return curry.call(this, fn, newArgs)
//     } else {
//       return fn.apply(this, newArgs)
//     }
//   }
// }

// console.log(curry(add)(1)(2))
