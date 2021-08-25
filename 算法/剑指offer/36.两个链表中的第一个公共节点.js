// 输入两个链表，找出它们的第一个公共结点。

let L1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 7,
      next: {
        val: 8
      }
    }
  }
}

let L2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 5,
      next: {
        val: 7,
        next: {
          val: 8
        }
      }
    }
  }
}

function findCommon(pHead1, pHead2) {
  let len1 = getLen(pHead1)
  let len2 = getLen(pHead2)
  let pShort = pHead1
  let pLong = pHead2
  let lenGap = len2 - len1
  if (len1 > len2) {
    pShort = pHead2
    pLong = pHead1
    lenGap = len1 - len2
  }

  while (lenGap--) {
    pLong = pLong.next
  }

  while (pLong) {
    if (pLong.val == pShort.val) {
      return pLong
    }
    pLong = pLong.next
    pShort = pShort.next
  }

  return null
}

function getLen(pHead) {
  let length = 0
  let cur = pHead
  while (cur) {
    cur = cur.next
    length++
  }
  return length
}

console.log(findCommon(L1, L2))
