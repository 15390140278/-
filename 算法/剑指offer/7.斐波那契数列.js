function fib(n) {
  let f = 0,
    g = 1
  while (n > 0) {
    g += f
    f = g - f
    n--
  }
  return f
}

console.log(fib(3))
