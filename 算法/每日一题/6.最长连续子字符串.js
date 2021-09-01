function findLongestSubstr(str) {
  let i = 0;
  let j;
  let max = 0;
  let res = "";
  for (j = 1; j < str.length; j++) {
    if (str[j] !== str[i]) {
      let subStr = str.slice(i, j);
      i = j;
      let len = subStr.length;
      res = len > max ? subStr : res;
      max = Math.max(max, len);
    }
  }

  console.log(res);
}

findLongestSubstr("ssssssssssssssshhhhopeeeeeeee");
