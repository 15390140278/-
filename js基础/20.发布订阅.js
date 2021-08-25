class pubSub {
  constructor() {
    // 事件池
    this.list = []
  }
  // 订阅，往事件池注册fn,一个event对应一个事件池，一个事件池对应多个方法
  subscribe(event, fn) {
    if (!this.list[event]) {
      this.list[event] = []
    }
    this.list[event].push(fn)
    return this
  }
  // 发布, 触发事件池中的所有方法
  publish(event, ...args) {
    for (let fn of this.list[event]) {
      fn.apply(this, args)
    }
    return this
  }
  // 取消订阅
  unSubscribe(event, fn) {
    let fnList = this.list[event]
    if (!fnList) return
    let index = fnList.findIndex(item => item === fn)
    fnList.splice(index, 1)
    return this
  }
  // 执行一次后取消
  once(event, fn) {
    let wrapFn = function (...args) {
      fn(...args)
      this.unSubscribe(event, wrapFn)
    }
    this.subscribe(event, wrapFn)
    return this
  }
}

let p1 = new pubSub()
// p1.subscribe('click', _ => {
//   console.log('click')
// })

// p1.publish('click')
// p1.unSubscribe('click')
p1.once('a', _ => {
  console.log('a')
})
p1.publish('a')
