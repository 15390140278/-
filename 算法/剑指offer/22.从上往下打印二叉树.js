// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

// 队列实现
function print(root) {
  let res = []
  let queue = []
  if (!root) {
    return res
  }
  queue.push(root)
  while (queue.length > 0) {
    let node = queue.shift()
    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }
    res.push(node.val)
  }
  return res
}

function print(root) {
  let res = []
  let queue = []
  if (!root) {
    return res
  }
  queue.push(root)
  while (queue.length > 0) {
    let node = queue.shift()
    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }

    res.push(node.val)
  }

  return res
}
