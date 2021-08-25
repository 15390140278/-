// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

// 分析如何判断树B是不是树A的子结构，只需要两步。很容易看出来这是一个递归的过程。一般在树的求解方面都和递归有关。
// Step1.在树A中找到和B的根结点的值一样的结点R；
// Step2.判断树A中以R为根结点的子树是不是包含和树B一样的结点。

function isChild(pTree, cTree) {
  let res = false
  if (pTree == null || cTree == null) {
    return false
  }
  if (pTree.val == cTree.val) {
    res = doesTree1HasTree2(pTree, cTree)
  }
  if (!res) {
    res = isChild(pTree.left, cTree)
  }
  if (!res) {
    res = isChild(pTree.right, cTree)
  }

  return res
}

function doesTree1HasTree2(pTree, cTree) {
  // 递归结束条件
  if (cTree == null) {
    return true
  }
  if (pTree == null) {
    return false
  }
  if (pTree.val !== cTree.val) {
    return false
  }

  return doesTree1HasTree2(pTree.left, cTree.left) && doesTree1HasTree2(pTree.right, cTree.right)
}

/*---------------------------------------------- */
function isChild(pTree, cTree) {
  let res = false
  if (pTree == null || cTree == null) {
    return false
  }

  if (pTree.val == cTree.val) {
    res = has(pTree, cTree)
  }
  if (!res) {
    res = isChild(pTree.left, cTree)
  }
  if (!res) {
    res = isChild(pTree.right, cTree)
  }

  return res
}

function has(pTree, cTree) {
  if (cTree == null) {
    return true
  }
  if (pTree == null) {
    return false
  }
  if (pTree.val !== cTree.val) {
    return false
  }

  return has(pTree.left, cTree.left) && has(pTree.right, cTree.right)
}
