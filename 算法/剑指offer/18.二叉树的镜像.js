// 操作给定的二叉树，将其变换为源二叉树的镜像。
// 交换左右节点，递归

function Mirror(tree) {
  if (!tree) {
    return
  }
  Mirror(tree.left)
  Mirror(tree.right)
  ;[tree.left, tree.right] = [tree.right, tree.left]
  return tree
}
