// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

let tree = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 2,
    left: {
      val: 5
    },
    right: {
      val: 6
    }
  }
}

function print(pRoot) {
  let res = []
  let queue1 = []
  let queue2 = []
  if (!pRoot) {
    return res
  }

  queue2.push(pRoot)
  let i = 1
  while (queue1.length !== 0 || queue2.length !== 0) {
    let list = []
    if (i % 2 == 1) {
      while (queue2.length !== 0) {
        let tmp = queue2[0]
        queue2.shift()
        list.push(tmp.val)
        if (tmp.left) {
          queue1.push(tmp.left)
        }
        if (tmp.right) {
          queue1.push(tmp.right)
        }
      }
    } else {
      while (queue1.length !== 0) {
        let tmp = queue1[0]
        queue1.shift()
        list.push(tmp.val)
        if (tmp.left) {
          queue2.push(tmp.left)
        }
        if (tmp.right) {
          queue2.push(tmp.right)
        }
      }
    }
    i++
    res.push(list)
  }
  console.log(res)
  return res
}

print(tree)
