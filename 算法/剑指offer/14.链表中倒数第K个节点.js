// 输入一个链表，输出该链表中倒数第k个节点。
// 用两个指针来跑，两个指针中间相距k-1个节点,第一个指针先跑，跑到了第k个节点时，第二个指针则是第一个节点。
// 这时候两个一起跑。当第一个跑到了最后一个节点时，这时候第二个指针则是倒数第k个节点。
function find(list, k) {
  if (list == null || k < 0) {
    return null
  }

  let first = list
  let second = list

  while (--k) {
    if (first.next) {
      first = first.next
    }
  }
  while (first.next) {
    first = first.next
    second = second.next
  }

  return second
}
