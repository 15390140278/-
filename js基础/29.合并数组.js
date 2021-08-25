var a1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
var a2 = ['A', 'B', 'C', 'D']
//['A1', 'A2', 'A', B1', 'B2', 'B', C1', 'C2', 'C', D1', 'D2', 'D']

let concatArr = (a1, a2) =>
  a2
    .map(item => item + 3)
    .concat(a1)
    .sort()
    .map(item => (item.includes('3') ? item.split('')[0] : item))

console.log(concatArr(a1, a2))
