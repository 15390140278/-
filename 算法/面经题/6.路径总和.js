// function hasPathSum(root, target) {
//   if (!root) {
//     return false
//   }
//   target -= root.val
//   if (target === 0) {
//     return true
//   }
//   if (target < 0) {
//     return false
//   }
//   if (target > 0) {
//     return hasPathSum(root.left, target) || hasPathSum(root.right, target)
//   }
// }

function hasPathSum(root, target) {
  if (!root) {
    return false
  }
  if (!root.left && !root.right) {
    return target - root.val === 0
  }
  return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val)
}
