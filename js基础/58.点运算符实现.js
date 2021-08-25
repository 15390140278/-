// function reverse(obj, parentKey = '', result = {}) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       let keyName = parentKey + key
//       if (typeof obj[key] === 'object') {
//         reverse(obj[key], keyName + '.', result)
//       } else {
//         result[keyName] = obj[key]
//       }
//     }
//   }
//   return result
// }
// var entry = {
//   a: {
//     b: {
//       c: {
//         dd: 'abcdd'
//       }
//     },
//     d: {
//       xx: 'adxx'
//     },
//     e: 'ae'
//   }
// }
// console.log(reverse(entry))

// 逆过程
var entry = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

function map(entry) {
  let obj = Object.create(null)
  for (let key in entry) {
    let keyNames = key.split('.')
    set(obj, keyNames, entry[key])
  }
  return obj
}

function set(obj, keyNames, value) {
  // 指针
  let temp
  if (!obj[keyNames[0]]) {
    obj[keyNames[0]] = Object.create(null)
  }
  temp = obj[keyNames[0]]
  for (let i = 1; i < keyNames.length; i++) {
    if (!temp[keyNames[i]]) {
      temp[keyNames[i]] = i === keyNames.length - 1 ? value : Object.create(null)
    }
    temp = temp[keyNames[i]]
  }
}

console.log(map(entry))
