// 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

function isSymmetrical(pNode) {
  if (!pNode) {
    return true
  }

  return compareRoot(pNode.left, pNode.right)
}

function compareRoot(left, right) {
  if (left == null) {
    return right == null
  }

  if (right == null) {
    return false
  }

  return compareRoot(left.left, right.right) && (left.right, right.left)
}
