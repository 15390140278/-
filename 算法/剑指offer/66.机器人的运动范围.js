// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

function getDigitSum(i, j) {
  let res = 0
  while (i) {
    res += i % 10
    i = Math.floor(i / 10)
  }
  while (j) {
    res += j % 10
    j = Math.floor(j / 10)
  }
  return res
}

function movingCount(m, n, k) {
  let visited = new Set()

  function dfs(i, j) {
    if (i >= m || j >= n || getDigitSum(i, j) > k || visited.has([i, j].toString())) {
      return 0
    }
    visited.add([i, j].toString())

    return 1 + dfs(i + 1, j) + dfs(i, j + 1)
  }

  return dfs(0, 0)
}

console.log(movingCount(2, 3, 1))
