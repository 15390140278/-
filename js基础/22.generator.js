// function* idMaker() {
//   let index = 0
//   while (index < 10) {
//     yield index++
//   }
// }
// let gen = idMaker()
// let res = gen.next()
// // console.log(gen.next().value)
// // console.log(gen.return())//done: true value: undefined
// // console.log(gen.throw('error'))
// // 执行完
// while (!res.done) {
//   console.log(res.value)
//   res = gen.next()
// }

// function* ge() {
//   let a = yield 1
//   console.log(a) //undefined
//   let b = yield 2
// }
// let gen = ge()
// // 请注意，第一次调用没有记录任何内容，因为生成器最初没有产生任何结果。
// console.log(gen.next(0))
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// function* ge() {
//   let a = yield 1
//   console.log(a)
//   let b = yield 2
//   console.log(b)
// }
// let gen = ge()
// console.log(gen.next())
// console.log(gen.next(1)) // a = 1
// console.log(gen.next(2)) // b = 2

function run(fn) {
  var gen = fn()

  function next(err, data) {
    var result = gen.next(data)
    if (result.done) return
    result.value(next)
  }

  next()
}

function thunkify(fn) {
  return function () {
    var args = new Array(arguments.length)
    var ctx = this

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i]
    }

    return function (done) {
      var called

      args.push(function () {
        if (called) return
        called = true
        done.apply(null, arguments)
      })

      try {
        fn.apply(ctx, args)
      } catch (err) {
        done(err)
      }
    }
  }
}

function fn() {
  return 1
}

var F = thunkify(fn)

function* g() {
  let r1 = yield F()
  console.log(r1)
  let r2 = yield F()
  console.log(r2)
  let r3 = yield F()
  console.log(r2)
}

run(g)
