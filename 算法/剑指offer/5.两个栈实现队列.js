let outStack = [],
  inStack = []

function push(node) {
  inStack.push(node)
}

function pop() {
  if (outStack.length == 0) {
    while (inStack.length > 0) {
      outStack.push(inStack.pop())
    }
  }

  return outStack.pop()
}

push(1)
push(2)
push(3)

console.log(pop()) //1
console.log(pop()) //2
console.log(pop()) //3
