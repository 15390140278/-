// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1

function isBalanced(root) {
  if (!root) {
    return true
  }
  let leftLen = depth(root.left)
  let rightLen = depth(root.right)

  return Math.abs(leftLen - rightLen) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

function depth(root) {
  if (!root) {
    return 0
  }
  let leftLen = depth(root.left)
  let rightLen = depth(root.right)

  return Math.max(leftLen, rightLen) + 1
}
