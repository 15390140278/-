// 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。

let stack = [],
  minStack = [],
  temp = null //指向最小

function push(node) {
  if (temp !== null) {
    if (temp > node) {
      temp = node
    }
    stack.push(node)
    minStack.push(temp)
  } else {
    temp = node
    stack.push(node)
    minStack.push(node)
  }
}

function pop() {
  stack.pop()
  minStack.pop()
}

function min() {
  return minStack[minStack.length - 1]
}
