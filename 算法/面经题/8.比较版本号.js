function compareVersion(v1, v2) {
  let vArr1 = v1.split('.')
  let vArr2 = v2.split('.')
  for (let i = 0; i < Math.max(vArr1.length, vArr2.length); i++) {
    let m = i < vArr1.length ? Number(vArr1[i]) : 0
    let n = i < vArr2.length ? Number(vArr2[i]) : 0
    if (m > n) {
      return 1
    } else if (m < n) {
      return -1
    }
  }
  return 0
}
console.log(compareVersion('1.1', '1.1.0'))
