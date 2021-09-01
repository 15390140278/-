function threeSum(nums) {
  let len = nums.length;
  let res = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (i > 1 && nums[i] === nums[i - 1]) {
      continue;
    }
    twoSum(nums, i + 1, len - 1, -nums[i], nums[i], res);
  }
  return res;
}

function twoSum(nums, start, end, target, value, res) {
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
      res.push([value, nums[start], nums[end]]);
      while (start < end && nums[start] === nums[start + 1]) {
        start++;
      }
      start++;

      while (start < end && nums[end] === nums[end - 1]) {
        end--;
      }
      end--;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
}
