// 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
// 例如，
// [2,3,4] 的中位数是 3
// [2,3] 的中位数是 (2 + 3) / 2 = 2.5
// 设计一个支持以下两种操作的数据结构：
// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。

let arr = []
function insert(num) {
  arr.push(num)
  for (let i = arr.length - 2; arr[i] > num; i--) {
    ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
}

function getMid() {
  if (arr.length & (1 == 1)) {
    return arr[(arr.length - 1) / 2]
  }

  return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
}
