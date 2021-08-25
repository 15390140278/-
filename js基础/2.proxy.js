const handler = {
  set(obj, prop, value) {
    if (prop == 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer')
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid')
      }
    }
    obj[prop] = value
    return true
  },
  get(obj, prop) {
    return prop in obj ? obj[prop] : 'meiyou'
  }
}

let obj = new Proxy({}, handler)
obj.age = 300
console.log(obj.age)
