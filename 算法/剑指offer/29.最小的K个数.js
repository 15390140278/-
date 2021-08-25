// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

let arr = [4, 5, 1, 6, 2, 7, 3, 8]

function minNums(arr, k) {
  let res = []
  res = arr.sort((a, b) => a - b).filter((item, index) => (index < k ? item : null))

  console.log(res)
}

minNums(arr, 4)
