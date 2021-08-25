function mySetInterval() {
  mySetInterval.timer = setTimeout(() => {
    arguments[0]()
    mySetInterval(...arguments)
  }, arguments[1])
}

mySetInterval(() => {
  console.log('ok')
}, 500)

setTimeout(() => {
  clearTimeout(mySetInterval.timer)
}, 5000)
