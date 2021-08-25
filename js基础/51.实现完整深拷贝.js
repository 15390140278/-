function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  if (typeof obj === null) {
    return obj
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  let newObj = new obj.constructor()
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}

let o1 = {
  a: 1,
  b: {
    c: 1
  }
}
console.log(deepClone(o1).b === o1.b)
