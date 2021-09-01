function maxDepth(root, res = 0) {
  if (!root) {
    return res;
  }
  if (root) {
    res += 1;
    return Math.max(maxDepth(root.left, res), maxDepth(root.right, res));
  }
}
