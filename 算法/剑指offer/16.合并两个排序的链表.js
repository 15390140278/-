// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
// 重点抓住这两个链表都是单挑递增的，因此我们只需要不断地比较他们的头结点就行，明显这是个重复的过程。
// 可以用递归做，也可以不用递归做，不用递归做只需要用两个指针来一直指向两个链表的“头”结点就行了

function merge(h1, h2) {
  let mergeHead = null
  if (h1 == null) {
    return h2
  }
  if (h2 == null) {
    return h1
  }
  if (h1.val < h2.val) {
    mergeHead = h1
    mergeHead.next = merge(h1.next, h2)
  } else {
    mergeHead = h2
    mergeHead.next = merge(h1, h2.next)
  }

  return mergeHead
}
