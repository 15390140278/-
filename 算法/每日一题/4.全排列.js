function permute(nums) {
  let len = nums.length;
  let res = [];
  if (len === 0) {
    return res;
  }
  let path = [];
  let used = Array(len).fill(false);
  dfs(nums, len, 0, path, used, res);
  return res;
}

function dfs(nums, len, depth, path, used, res) {
  if (depth === len) {
    // 拷贝
    res.push([...path]);
    return;
  }
  for (let i = 0; i < len; i++) {
    if (used[i]) {
      continue;
    }
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, len, depth + 1, path, used, res);
    //  回溯
    path.pop();
    used[i] = false;
  }
}
