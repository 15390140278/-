// //先序
// function xianxu(root) {
//   let stack = []
//   let pNode = root
//   while (root !== null || stack.length > 0) {
//     if (root !== null) {
//       console.log(root.value)
//       stack.push(root)
//       pNode = pNode.left
//     } else {
//       let node = stack.pop()
//       pNode = node.right
//     }
//   }
// }

// // 中序
// function zhongxu(root) {
//   let stack = []
//   let pNode = root
//   while (pNode !== null || stack.length > 0) {
//     if (pNode !== null) {
//       stack.push(pNode)
//       pNode = pNode.left
//     } else {
//       let node = stack.pop()
//       console.log(node.value)
//       pNode = node.right
//     }
//   }
// }

// // 后序 双栈 (跟右左 -》 左右跟)
// function houxu(root) {
//   let stack = []
//   let res = []
//   let ans = []
//   let pNode = root
//   while (stack.length > 0 || pNode !== null) {
//     if (pNode !== null) {
//       stack.push(pNode)
//       res.push(pNode.value)
//       pNode = pNode.right
//     } else {
//       let node = stack.pop()
//       pNode = node.left
//     }
//   }
//   while (res.length > 0) {
//     ans.push(res.pop())
//   }

//   return ans
// }

// // 后序 单栈

// function houxu1(root) {
//   let res = []
//   let stack = []
//   let pNode = root
//   let pre = null

//   while (pNode !== null || stack.length > 0) {
//     while (pNode !== null) {
//       stack.push(pNode)
//       pNode = pNode.left
//     }

//     if (stack.length > 0) {
//       pNode = stack.pop()
//       if (pNode.right == null || pre == pNode.right) {
//         res.push(pNode.value)
//         pre = pNode
//         pNode = null
//       } else {
//         stack.push(pNode)
//         pNode = pNode.right
//       }
//     }
//   }

//   return res
// }

function xianxu(root) {
  let stack = []
  let res = []
  let cur = root

  while (stack.length > 0 || cur !== null) {
    if (cur !== null) {
      stack.push(cur)
      res.push(cur.value)
      cur = cur.left
    } else {
      cur = stack.pop()
      cur = cur.right
    }
  }

  return stack
}

function zhongxu(root) {
  let stack = []
  let res = []
  let cur = root
  while (stack.length > 0 || cur !== null) {
    if (cur !== null) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()
      res.push(cur.value)
      cur = cur.right
    }
  }

  return res
}

function houxu(root) {
  let stack = []
  let cur = root
  let pre = null
  while (stack.length > 0 || cur !== null) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }

    if (stack.length > 0) {
      cur = stack.pop()
      if (cur.right == null || pre == cur.right) {
        res.push(cur.value)
        pre = cur
        cur = null
      } else {
        stack.push(cur)
        cur = cur.right
      }
    }
  }
}
