// 请实现两个函数，分别用来序列化和反序列化二叉树

let arr = []

function Serialize(pRoot) {
  if (!pRoot) {
    arr.push('$')
  } else {
    arr.push(pRoot.val)
    Serialize(pRoot.left)
    Serialize(pRoot.root)
  }
}

function Deserialize() {
  let node = null
  if (arr.length < 1) {
    return null
  }

  let num = arr.shift()
  if (typeof num == 'number') {
    node = new TreeNode(num)
    node.left = Deserialize()
    node.right = Deserialize()
  }

  return node
}
