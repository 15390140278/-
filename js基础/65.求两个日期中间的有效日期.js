// 如 2015-2-8 到 2015-3-3，返回【2015-2-8 2015-2-9...】

function rangeDay(day1, day2) {
  let res = []
  let dayTimes = 1000 * 60 * 60 * 24
  let startTime = day1.getTime()
  let range = day2.getTime() - startTime
  let total = 0
  while (total < range && range > 0) {
    res.push(new Date(startTime + total).toLocaleDateString().replace(/\//g, '-'))
    total += dayTimes
  }
  console.log(res)
  return res
}

rangeDay(new Date('2015-2-8'), new Date('2015-3-3'))
