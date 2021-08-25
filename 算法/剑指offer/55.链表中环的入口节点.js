// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
// 给定一个单链表，只给出头指针h：
// 1、如何判断是否存在环？
// 对于问题1，使用追赶的方法，设定两个指针slow、fast，从头节点开始，每次分别前进1步、2步。如存在环，则两者相遇；如不存在环，fast遇到NULL退出。
// 2、如何知道环的长度？
//记录下问题1的碰撞点p，碰撞点p肯定是在环中的，从这个结点出发，一边移动一边计数，再次回到这个结点时就得到了环中结点数n。
// 3、如何找出环的连接点在哪里？
//有定理：碰撞点p到连接点的距离=头节点到连接点的距离，因此，分别从碰撞点、头节点相同速度开始走，相遇的那个点就是连接点。
// 4、带环链表的长度是多少？
//问题3中已经求出连接点距离头指针的长度，加上问题2中求出的环的长度，二者之和就是带环单链表的长度

function List(val) {
  this.head = this
  this.val = val
}

let L = new List(1)
L.next = new List(2)
L.next.next = new List(3)
L.next.next.next = new List(4)
L.next.next.next.next = L.next.next

function EntryNodeOfLoop(pHead) {
  let slow = pHead
  let fast = pHead
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast == slow) {
      let p = pHead
      // 碰撞点到连接点的距离就是头节点到连接点的距离
      while (p !== slow) {
        p = p.next
        slow = slow.next
      }
      //p为连接点
      return p
    }
  }

  return false
}
