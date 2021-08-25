// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]

// 假设序列的开始数字为a,结束数字为a+i，那么有(a+i-a+1)*(a+a+i)/2=sum
// 也就是(i+1)*(2*a+i)=2*sum
// 那么我们只需要找出这样的a和i就行了，最后再根据a和i得出序列。

// function find(sum) {
//   let res = []
//   let mid = Math.ceil(sum / 2)
//   for (let i = 1; i < mid; i++) {
//     let j = 1
//     while (j++) {
//       let total = (i + (i + j - 1)) * (j / 2)
//       if (total > sum) {
//         break
//       }
//       if (total == sum) {
//         res.push(createArr(i, j))
//       }
//     }
//   }

//   console.log(res)
// }

function createArr(a, n) {
  let res = []
  for (let i = 0; i < n; i++) {
    res.push(a + i)
  }
  return res
}

// find(9)

function find(num) {
  let res = []
  let mid = Math.ceil(num / 2)
  for (let i = 1; i < mid; i++) {
    let j = 1
    while (j++) {
      let total = (i + (i + j - 1)) * (j / 2)
      if (total > num) {
        break
      }
      if (total == num) {
        res.push(createArr(i, j))
      }
    }
  }
  console.log(res)
}

find(9)
