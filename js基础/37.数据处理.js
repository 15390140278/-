// 如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]。

let data = { 1: 222, 2: 123, 5: 888 }
function reverse(data) {
  //   return Array.from({ length: 12 }).map((_, index) => (data[index + 1] ? data[index + 1] : null))
  return Array(12)
    .fill()
    .map((_, index) => (data[index + 1] ? data[index + 1] : null))
}

console.log(reverse(data))
