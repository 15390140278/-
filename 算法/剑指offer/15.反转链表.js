// 输入一个链表，反转链表后，输出链表的所有元素。
// 至少需要三个指针pPre（指向前一个结点）、pCurrent（指向当前的结点，在代码中就是pHead）、pNext（指向后一个结点）。

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
}

// function reverse(head) {
//   let pre = null,
//     next = null
//   while (head) {
//     next = head.next
//     head.next = pre
//     pre = head
//     head = next
//   }

//   return pre
// }

// console.log(reverse(list))

function reverse(head) {
  let pre = null,
    next = null
  while (head) {
    next = head.next
    head.next = pre
    pre = head
    head = next
  }

  return pre
}
