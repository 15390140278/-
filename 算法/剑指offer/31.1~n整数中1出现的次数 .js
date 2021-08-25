// 正则匹配
// function hasXFromOneToN(n, x) {
//   let reg = new RegExp(`${x}`, 'g')
//   let count = 0
//   for (let i = 1; i <= n; i++) {
//     ;(i + '').match(reg) && (count += (i + '').match(reg).length)
//   }

//   console.log(count)
// }

// hasXFromOneToN(123, 1)

function hasXFromOneToN(n, x) {
  let temp = n
  let i = 1
  let count = 0
  while (temp > 0) {
    let left = parseInt(temp / 10)
    let right = n - temp * Math.pow(10, i - 1)
    let cur = temp % 10

    if (cur > x) {
      count += (left + 1) * Math.pow(10, i - 1)
    } else if (cur < x) {
      count += left * Math.pow(10, i - 1)
    } else {
      count += left * Math.pow(10, i - 1) + right + 1
    }
    temp = parseInt(temp / 10)
    i++
  }

  return count
}

console.log(hasXFromOneToN(123, 1))
