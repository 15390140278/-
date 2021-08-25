// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

let tree = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 2,
    left: {
      val: 5
    },
    right: {
      val: 6
    }
  }
}

// function Print(pRoot) {
//   let lists = []
//   if (pRoot == null) {
//     return lists
//   }

//   let stack1 = []
//   let stack2 = []
//   stack2.push(pRoot)
//   let i = 1

//   while (stack1.length !== 0 || stack2.length !== 0) {
//     let list = []
//     //奇数层
//     if (i % 2 == 1) {
//       while (stack2.length !== 0) {
//         let tmp = stack2[stack2.length - 1]
//         stack2.pop()
//         list.push(tmp.val)
//         if (tmp.left !== null) {
//           stack1.push(tmp.left)
//         }
//         if (tmp.right !== null) {
//           stack1.push(tmp.right)
//         }
//       }
//     }
//     // 偶数层
//     else {
//       while (stack1.length !== 0) {
//         let tmp = stack1[stack1.length - 1]
//         stack1.pop()
//         list.push(tmp.val)
//         if (tmp.right !== null) {
//           stack2.push(tmp.right)
//         }
//         if (tmp.left !== null) {
//           stack2.push(tmp.left)
//         }
//       }
//     }
//     i++
//     lists.push(list)
//   }
//   console.log(lists)
//   return lists
// }

function Print(pRoot) {
  let lists = []
  if (!pRoot) {
    return lists
  }

  let stack1 = []
  let stack2 = []
  let i = 1
  stack2.push(pRoot)
  while (stack1.length !== 0 || stack2.length !== 0) {
    let list = []
    if (i % 2 == 1) {
      while (stack2.length !== 0) {
        let tmp = stack2[stack2.length - 1]
        stack2.pop()
        list.push(tmp.val)
        if (tmp.left) {
          stack1.push(tmp.left)
        }
        if (tmp.right) {
          stack1.push(tmp.right)
        }
      }
    } else {
      while (stack1.length !== 0) {
        let tmp = stack1[stack1.length - 1]
        stack1.pop()
        list.push(tmp.val)
        if (tmp.right) {
          stack2.push(tmp.right)
        }
        if (tmp.left) {
          stack2.push(tmp.left)
        }
      }
    }
    i++
    lists.push(list)
  }
  console.log(lists)
  return lists
}

Print(tree)
