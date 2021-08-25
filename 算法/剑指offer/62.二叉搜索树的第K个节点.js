// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

function KthLargest(root, k) {
  let res = []
  helper(root, res)
  return res[k - 1]
}

function helper(root, res) {
  if (!root) {
    return
  }

  if (root.left) {
    helper(root.left, res)
  }
  res.push(root.val)
  if (root.right) {
    helper(root.right, res)
  }
}
