// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

let pushV = [1, 2, 3, 4, 5]
let popV = [4, 5, 3, 2, 1]

// function IsPopOrder(pushV, popV) {
//   let helpStack = []
//   let flag = false
//   while (pushV.length > 0 || helpStack.length > 0) {
//     while (helpStack[helpStack.length - 1] === popV[0] && helpStack.length > 0) {
//       // 匹配到相同的 分别弹出去
//       helpStack.pop()
//       popV.shift()
//     }
//     // 弹出序列已经空了
//     if (popV.length == 0) {
//       flag = true
//     }
//     // 该栈为空，跳出循环
//     if (pushV.length == 0) {
//       break
//     }

//     // 没有匹配到相同的helpStack继续push
//     helpStack.push(pushV.shift())
//   }

//   return flag
// }

console.log(IsPopOrder(pushV, popV))

function IsPopOrder(pushV, popV) {
  let helpStack = []
  let flag = false
  while (pushV.length > 0 || helpStack.length > 0) {
    while (helpStack[helpStack.length - 1] == popV[0] && helpStack.length > 0) {
      helpStack.pop()
      popV.shift()
    }

    if (popV.length == 0) {
      flag = true
    }

    if (pushV.length == 0) {
      break
    }

    helpStack.push(pushV.shift())
  }

  return flag
}
