// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

// 1.因为链表是单向的，如果是第一个、第二个节点就重复的话，删除就比较麻烦。因此我们可以额外添加头节点来解决
// 2.因为重复的节点不一定是重复两个，可能重复很多个，需要循环处理下。

function ListNode(x) {
  this.val = x
  this.next = null
}

function deleteDuplication(pHead) {
  if (pHead == null || pHead.next == null) {
    return false
  }

  // 方便处理第一个、第二个节点就是相同的情况。
  let Head = new ListNode(0)
  Head.next = pHead
  let pre = Head
  let cur = Head.next

  while (cur) {
    if (cur.next && cur.val == cur.next.val) {
      //// 找到最后的一个相同节点,因为相同节点可能重复多个
      while (cur.next && cur.val == cur.next.val) {
        cur = cur.next
      }
      pre.next = cur.next
      cur = cur.next
    } else {
      pre = pre.next
      cur = cur.next
    }
  }

  return pHead
}

function deleteDuplication(pHead) {
  let Head = new ListNode(0)
  Head.next = pHead
  let pre = Head
  let cur = Head.next
  while (cur) {
    if (cur.next && cur.val == cur.next.val) {
      while (cur.next && cur.val == cur.next.val) {
        cur = cur.next
      }
      pre.next = cur.next
      cur = cur.next
    } else {
      pre = pre.next
      cur = cur.next
    }
  }

  return pHead
}
