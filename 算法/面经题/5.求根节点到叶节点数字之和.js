let tree = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
}

function sumNumbers(root) {
  let sum = 0
  return childSum(sum, root)
}

function childSum(sum, root) {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return sum + root.val
  }
  sum += root.val
  return childSum(10 * sum, root.left) + childSum(10 * sum, root.right)
}

console.log(sumNumbers(tree))

function sumNumbers(root) {
  return childSum(0, root)
}

function childSum(sum, root) {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return sum + root.val
  }
  sum += root.val
  return childSum(sum * 10, root.left) + childSum(sum * 10, root.right)
}
