function promise() {
  return new Promise((resolve, reject) => {
    resolve('ok')
  })
}

// async
function* async() {
  // await
  let result = yield promise()
  console.log(result)
}

run(async)

function run(gen) {
  let iter = gen()
  function next(data) {
    let { value, done } = iter.next(data)
    if (done) {
      return
    } else {
      value.then(res => next(res))
    }
  }
  next()
}
