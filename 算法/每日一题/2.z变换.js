function convert(s, numRows) {
  let rows = numRows;
  let arr = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; i < rows; j++) {
      if (j % 2) {
        arr[i][j] = s[i];
      }
      for (let k = 0; k < rows; k++) {
        arr[i][k] = arr[i + k];
      }
    }
  }
}
