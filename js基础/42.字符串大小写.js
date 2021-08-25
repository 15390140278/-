let str = 'AbC'

function reverse(str) {
  return str
    .split('')
    .map(item => (item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()))
    .join('')
}

console.log(reverse(str))
