// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

let numbers = [3, 32, 321]

// function min(numbers) {
//   numbers.sort((s1, s2) => {
//     let c1 = `${s1}${s2}`
//     let c2 = `${s2}${s1}`

//     return c1 - c2
//   })
//   let min = ''
//   numbers.forEach(i => (min += i))
//   console.log(min)
// }

// min(numbers)

function min(numbers) {
  numbers.sort((s1, s2) => {
    return `${s1}${s2}` - `${s2}${s1}`
  })

  let min = ''
  numbers.forEach(i => (min += i))
  console.log(min)
}
min(numbers)
