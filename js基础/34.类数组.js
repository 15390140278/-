let arrLike = {
  1: 1,
  2: 2,
  length: 2,
  push: Array.prototype.push
}

// arrLike[arrLike.length] = 3 arrLike.length += 1
arrLike.push(3)

console.log(arrLike)
