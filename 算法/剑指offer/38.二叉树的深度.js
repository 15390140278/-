// 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

function depth(root) {
  if (!root) {
    return 0
  }
  let leftDepth = depth(root.left)
  let rightDepth = depth(root.right)

  return Math.max(leftDepth, rightDepth) + 1
}
