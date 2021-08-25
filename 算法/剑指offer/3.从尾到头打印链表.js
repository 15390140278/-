function ListNode(x) {
  this.val = x
  this.next = null
}

function printListFromTailToHead(head) {
  let res = []
  let cur = head
  while (cur) {
    res.push(cur)
    cur = cur.next
  }
  return res
}
