// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
// 1.如果一个节点有右子树，那么它的下一个节点就是它的右子树中的最左子节点。也就是说，从右子节点出发一直沿着指向左子节点的指针，我们就能找到下一个节点。
// 2.如果没有右子树，又可以分为两种情况
// 如果节点是它父节点的左子节点，那么它的下一个节点就是它的父节点。
// 如果一个节点既没有右子树，并且它还是父节点的右子节点，那么需要沿着指向父节点的指针一直向上便利，直到找到一个是它父节点的左子节点的节点。

function getNext(pNode) {
  if (pNode == null) {
    return null
  }
  if (pNode.right !== null) {
    pNode = pNode.right
    while (pNode.left) {
      pNode = pNode.left
    }
    return pNode
  }

  while (pNode.next) {
    // 是左子节点
    if ((pNode = pNode.next.left)) {
      return pNode.next
    }
    // 是右子节点
    pNode = pNode.next
  }

  return null
}
