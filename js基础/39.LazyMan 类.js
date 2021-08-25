class LazyMan {
  constructor(name) {
    this.tackList = []
    this.name = name
    console.log('hi I am ' + this.name)
    setTimeout(() => {
      this.next()
    }, 0)
  }

  sleep(time) {
    let that = this
    let fn = (function (t) {
      return function () {
        setTimeout(() => {
          console.log('等待了' + t + '秒')
          that.next()
        }, t * 1000)
      }
    })(time)
    this.tackList.unshift(fn)
    return this
  }

  eat(meal) {
    let that = this
    let fn = (function (meal) {
      return function () {
        console.log('eating ' + meal)
        that.next()
      }
    })(meal)
    this.tackList.unshift(fn)
    return this
  }

  next() {
    let fn = this.tackList.shift()
    fn && fn()
  }
}

let man = new LazyMan('Tony')
man.sleep(1).eat('breakfast').sleep(2)
