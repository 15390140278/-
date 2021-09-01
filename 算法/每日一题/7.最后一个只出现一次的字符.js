function lastUniqueChar(str) {
  let i = 0;
  let j;
  let res = "";
  for (j = 1; j < str.length; j++) {
    if (str[j] !== str[i]) {
      let subStr = str.slice(i, j);
      if (subStr.length === 1) {
        res = subStr;
      }
      i = j;
    }
  }
  console.log(res);
}
lastUniqueChar("shopee");
