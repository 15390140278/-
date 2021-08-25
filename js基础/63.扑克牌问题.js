// 有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；
// 最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；
// 问：原来那堆牌的顺序

function poker(arr) {
  let res = []
  while (arr.length > 0) {
    if (res.length > 1) {
      // 最后一张放到开头
      // res = [res[res.length - 1]].concat(res.slice(0, res.length - 1))
      res.unshift(res.pop())
    }
    res.unshift(arr.pop())
  }

  console.log(res)
}

poker([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
