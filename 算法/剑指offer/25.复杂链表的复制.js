// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
// 输入:{1,2,3,4,5,3,5,#,2,#}
// 输出:{1,2,3,4,5,3,5,#,2,#}
// 解析:我们将链表分为两段，前半部分{1,2,3,4,5}为ListNode，后半部分{3,5,#,2,#}是随机指针域表示。
// 以上示例前半部分可以表示链表为的ListNode:1->2->3->4->5
// 后半部分，3，5，#，2，#分别的表示为
// 1的位置指向3，2的位置指向5，3的位置指向null，4的位置指向2，5的位置指向null
function RandomListNode(x) {
  this.label = x
  this.next = null
  this.random = null
}

function clone(pHead) {
  if (pHead == null) {
    return null
  }

  let map = new Map()
  let p, p2
  p = pHead
  p2 = new RandomListNode(pHead.label)
  let pHead2 = p2
  map.set(p, p2)

  while (p) {
    if (p.next) {
      p2.next = new RandomListNode(p.next.label)
    } else {
      p2.next = null
    }
    p = p.next
    p2 = p2.next
    map.set(p, p2)
  }

  p = pHead
  p2 = pHead2
  while (p) {
    p2.random = map.get(p.random)
    p = p.next
    p2 = p2.next
  }

  return pHead2
}

function clone(pHead) {
  let map = new Map()
  let p = pHead
  let p2 = new RandomListNode(pHead.label)
  let pHead2 = p2
  map.set(p, p2)
  while (p) {
    if (p.next) {
      p2.next = new RandomListNode(p.next.label)
    } else {
      p2.next = null
    }
    p = p.next
    p2 = p2.next
    map.set(p, p2)
  }

  p = pHead
  p2 = pHead2
  while (p) {
    p2.random = map.get(p.random)
    p = p.next
    p2 = p2.next
  }

  return pHead2
}

function clone(pHead) {
  let map = new Map()
  let p = pHead
  let p2 = new RandomListNode(pHead.label)
  let pHead2 = p2
  map.set(p, p2)

  while (p) {
    if (p.next) {
      p2.next = new RandomListNode(p.next.label)
    } else {
      p2.next = null
    }
    p = p.next
    p2 = p2.next
    map.set(p, p2)
  }

  p = pHead
  p2 = pHead2

  while (p) {
    p2.random = map.get(p.random)
    p = p.next
    p2 = p2.next
  }
}
