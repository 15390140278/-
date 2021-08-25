// 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径
let tree = {
  val: 2,
  left: {
    val: 3,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 7
  }
}

// function path(root, num) {
//   let stack = []
//   let listAll = []
//   return find(root, num, stack, listAll)
// }

// function find(root, num, stack, listAll) {
//   if (root == null) {
//     return listAll
//   }
//   stack.push(root.val)
//   let x = num - root.val
//   if (root.left == null && root.right == null && x === 0) {
//     listAll.push(Array(...stack))
//   }
//   find(root.left, x, stack, listAll)
//   find(root.right, x, stack, listAll)
//   stack.pop()
//   return listAll
// }

// console.log(path(tree, 9))

// function path(root, num) {
//   let stack = []
//   let res = []
//   return find(root, num, stack, res)
//   // console.log(stack)
//   // console.log(res)
// }

// function find(root, num, stack, res) {
//   if (!root) {
//     return res
//   }

//   stack.push(root.val)
//   let x = num - root.val
//   if (root.left == null && root.right == null && x == 0) {
//     res.push(Array(...stack))
//   }

//   find(root.left, x, stack, res)
//   find(root.right, x, stack, res)

//   stack.pop()

//   return res
// }

function path(root, num) {
  let stack = []
  let res = []
  return find(root, num, stack, res)
}

function find(root, num, stack, res) {
  if (!root) {
    return res
  }

  stack.push(root.val)
  let x = num - root.val
  if (root.left == null && root.right == null && x == 0) {
    res.push(Array(...stack))
  }

  find(root.left, x, stack, res)
  find(root.right, x, stack, res)

  stack.pop()

  return res
}

console.log(path(tree, 9))
