// 先序 递归
function preOrderTraversel(root) {
  if (root !== null) {
    console.log(root.value)
    preOrderTraversel(root.left)
    preOrderTraversel(root.right)
  }
}

// 先序非递归
function preOrderTraversel2(root) {
  let stack = []
  let pNode = root
  while (pNode !== null || stack.length > 0) {
    if (pNode !== null) {
      console.log(pNode.value)
      stack.push(pNode)
      pNode = pNode.left
    } else {
      let node = stack.pop()
      pNode = node.right
    }
  }
}

// 中序 递归
function inOrderTraverse1(root) {
  if (root !== null) {
    inOrderTraverse1(root.left)
    console.log(root.value)
    inOrderTraverse1(root.right)
  }
}

// 中序 非递归
function inOrderTraverse1(root) {
  let stack = []
  let pNode = root
  while (pNode !== null || stack.length > 0) {
    if (pNode !== null) {
      stack.push(pNode)
      pNode = pNode.left
    } else {
      let node = stack.pop()
      console.log(node.value)
      pNode = node.right
    }
  }
}

// 后序遍历 非递归
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

//广度 递归
function cenxu(root) {
  let queue = []
  let res = []
  if (root) {
    res.push(root.value)
    if (root.left) {
      queue.unshift(node.left)
    }
    if (root.right) {
      queue.unshift(node.right)
    }
    cenxu(queue.pop())
  }
  return res
}

//广度 非递归
function cenxu(root) {
  let queue = []
  let res = []
  queue.unshift(root)
  while (queue.length > 0) {
    let node = queue.pop()
    if (node) {
      res.push(node.value)
      if (node.left) {
        queue.unshift(node.left)
      }
      if (node.right) {
        queue.unshift(node.right)
      }
    }
  }
  return res
}

/**
 * 获取二叉树深度
 */
function getTreeDepth(tree) {
  const depthCount = node => {
    let leftDepth = 0
    let rightDepth = 0
    if (node.left) {
      leftDepth = depthCount(node.left)
    }
    if (node.right) {
      rightDepth = depthCount(node.right)
    }
    return Math.max(leftDepth, rightDepth) + 1
  }
  return depthCount(tree)
}
console.log('二叉树深度: ', getTreeDepth(tree))
// 二叉树深度:  4

/**
 * 获取二叉树宽度
 */
function getTreeWidth(tree) {
  const widthArr = [] // 每层的节点个数数组
  const queue = [] // 遍历树用到的队列结构
  tree.floor = 0
  queue.push(tree)
  while (queue.length > 0) {
    const pop = queue.shift()
    // widthArr中的index对应层数floor
    // 每访问一个节点，在对应层数的widthArr索引里+1
    widthArr[pop.floor] = (widthArr[pop.floor] || 0) + 1
    const nextFloor = pop.floor + 1
    if (pop.left) {
      pop.left.floor = nextFloor
      queue.push(pop.left)
    }
    if (pop.right) {
      pop.right.floor = nextFloor
      queue.push(pop.right)
    }
    delete pop.floor
  }
  return Math.max(...widthArr)
}
console.log('二叉树宽度: ', getTreeWidth(tree))
// 二叉树宽度:  5
