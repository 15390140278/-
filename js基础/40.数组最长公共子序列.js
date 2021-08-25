let nums1 = [1, 1]
let nums2 = [1]
// function jiaoji(nums1, nums2) {
//   return nums1.filter(item => nums2.indexOf(item) !== -1)
// }

// let jiaoji = (...args) => args[0].filter(item => args[1].indexOf(item) !== -1)

// 两数组最长公共子序列
// 正确写法
const jiaoji = (nums1, nums2) => {
  const map = {}
  const res = []
  for (let n of nums1) {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  }
  for (let n of nums2) {
    if (map[n] > 0) {
      res.push(n)
      map[n]--
    } else {
      // n=0 删除
      // 说明已经取到最长了
      delete map[n]
    }
  }
  return res
}

console.log(jiaoji(nums1, nums2))
