var a = {
  value: 1,
  // 有valueOf调用valueOf没有就调用toString
  valueOf() {
    console.log('valueOf')
    return a.value++
  },
  toString() {
    console.log('toString')
  }
}

if (a == 1 && a == 2 && a == 3) {
  console.log('ok')
}
