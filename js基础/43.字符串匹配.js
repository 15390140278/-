function find(S, T) {
  if (S.length < T.length) {
    return -1
  }
  for (i = 0; i < S.length - T.length; i++) {
    if (S.slice(i, T.length + i) === T) {
      return i
    }
  }
  return -1
}

let S = 'abcde'
let T = 'bcd'
console.log(find(S, T))
