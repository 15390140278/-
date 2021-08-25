// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

// 要生成排序的双向列表，那么只能是中序遍历，因为中序遍历才能从小到大，所以需要递归，
// 先对左子数调整为双向链表，并用变量pLast指向最后一个节点
// 再将中间节点和pLast连起来
// 再去调整右子树

let tree = {
  val: 3,
  left: {
    val: 2,
    left: {
      val: 1
    }
  },
  right: {
    val: 4,
    right: {
      val: 5
    }
  }
}

function reverse(root) {
  if (root == null) {
    return null
  }
  let list = []
  zhongxu(root, list)
  let head = list[0]
  head.left = null
  let cur = head
  for (let i = 1; i < list.length - 1; i++) {
    cur.right = list[i]
    list[i].left = cur
    cur = cur.right
  }

  return head
}

function zhongxu(root, list) {
  if (!root) {
    return
  }
  zhongxu(root.left, list)
  list.push(root)
  zhongxu(root.right, list)
}

console.log(reverse(tree))
