class myPromise {
  constructor(exec) {
    this.resolveArr = []
    this.rejectArr = []
    this.status = 'pending'
    this.value = undefined

    let changeStatus = (status, value) => {
      if (this.status !== 'pending') {
        return
      }
      this.status = status
      this.value = value
    }

    let resolve = result => {
      if (this.resolveArr.length > 0) {
        changeStatus('resolved', result)
        this.resolveArr.forEach(fn => {
          fn(result)
        })
      }

      let timer = setTimeout(_ => {
        changeStatus('resolved', result)
        this.resolveArr.forEach(fn => {
          fn(result)
        })
        clearTimeout(timer)
        timer = null
      }, 0)
    }

    let reject = reason => {
      if (this.rejectArr.length > 0) {
        changeStatus('rejected', reason)
        this.rejectArr.forEach(fn => {
          fn(reason)
        })
      }

      let timer = setTimeout(_ => {
        changeStatus('rejected', reason)
        this.rejectArr.forEach(fn => {
          fn(reason)
        })
        clearTimeout(timer)
        timer = null
      }, 0)
    }

    try {
      exec(resolve, reject)
    } catch (err) {
      reject(err.message)
    }
  }

  then(resolveFn, rejectFn) {
    if (typeof resolveFn !== 'function') {
      resolveFn = result => {
        return result
      }
    }

    if (typeof rejectFn !== 'function') {
      rejectFn = reason => {
        return myPromise.reject(reason)
      }
    }

    return new myPromise((resolve, reject) => {
      this.resolveArr.push(result => {
        try {
          let x = resolveFn(result)
          if (x instanceof myPromise) {
            x.then(resolve, reject)
            return
          }
          resolve(x)
        } catch (err) {
          reject(err.message)
        }
      })

      this.rejectArr.push(reason => {
        try {
          let x = rejectFn(reason)
          if (x instanceof myPromise) {
            /**
             * 这里的resolve,reject就是构造函数里面定义的两个函数,分别接收result,reason
             * 传进来的方法返回结果x是promise
             * x = Promise.resolve(result)
             * 则执行resolve方法，并将result传过去
             * x = Promise.reject(reason)
             * 执行reject方法，将reason传进去
             */
            x.then(resolve, reject)
            return
          }
          resolve(x)
        } catch (err) {
          reject(err.message)
        }
      })
    })
  }

  catch(rejectFn) {
    return this.then(null, rejectFn)
  }

  finally(callback) {
    return this.then(callback, callback)
  }

  static resolve(result) {
    return new myPromise(resolve => {
      resolve(result)
    })
  }

  static reject(reason) {
    return new myPromise((_, reject) => {
      reject(reason)
    })
  }

  static all(arr) {
    return new myPromise((resolve, reject) => {
      let index = 0
      let results = []
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (!(item instanceof myPromise)) {
          continue
        }
        item
          .then(result => {
            index++
            results[i] = result
            if (index === i) {
              resolve(results)
            }
          })
          .catch(reason => {
            reject(reason)
          })
      }
    })
  }

  static race(arr) {
    return new myPromise((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        // 只要首次出现一个promise resolve或者reject 就把该结果作为该race的结果
        item
          .then(result => {
            resolve(result)
          })
          .catch(reason => {
            reject(reason)
          })
      }
    })
  }
}

// let p1 = new myPromise((resolve, reject) => {
//   resolve(10)
//   // reject(20)
// })

// let p2 = p1.then(
//   result => {
//     return myPromise.reject(result)
//   },
//   reason => {
//     console.log(reason)
//   }
// )

// let p3 = p2.then(
//   result => {},
//   reason => {
//     console.log('reason', reason)
//   }
// )
let p1 = myPromise.resolve(1)
let p2 = myPromise.resolve(2)
let p3 = myPromise.resolve(3)
console.log(myPromise.all([p1, p2, p3]))
