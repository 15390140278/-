// call
Function.prototype.myCall = function (context) {
  // 判断有无context
  context = context || window
  // 判断调用对象
  if (typeof this !== 'function') {
    console.error('type error')
  }
  // 将调用对象设为对象的方法
  context.fn = this
  // 获取参数
  let args = [...arguments].slice(1)

  // 调用函数
  let result = context.fn(...args)

  // 删除属性
  delete context.fn
  return result
}

// apply
Function.prototype.myApply = function (context) {
  context = context || window
  let result = null
  if (typeof this !== 'function') {
    console.error('type error')
  }
  context.fn = this
  // let args = [...arguments].slice(1)
  // console.log(args)
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

// bind
Function.prototype.myBind = function (context) {
  context = context || window
  let args = [...arguments].slice(1)
  fn = this
  return function Fn() {
    // 判读是不是new 执行
    return fn.apply(this instanceof Fn ? this : context, ...[args.concat(...arguments)])
  }
}

function a(a, b, c) {
  console.log(a, b, c)
}

const obj = {
  name: 'zs'
}

// a.myCall(obj, 1, 2, 3)
// a.myApply(obj, [1, 2, 3])
// a.myBind(obj)(1, 2, 3)
a.myBind(obj, 1, 2, 3)()
