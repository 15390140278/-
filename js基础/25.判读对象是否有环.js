function cycleDetector(obj) {
  let hasCircle = false
  let cache = []
  ;(function (obj) {
    for (key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (cache.indexOf(obj[key]) !== -1) {
          hasCircle = true
          break
        } else {
          cache.push(obj[key])
          // 递归调用匿名函数
          arguments.callee(obj[key])
          cache.pop()
        }
      }
    }
  })(obj)

  return hasCircle
}

// function cycleDetector(obj) {
//   var hasCircle = false, //  定义一个变量，标志是否有环
//     cache = [] //  定义一个数组，来保存对象类型的属性值

//   ;(function (obj) {
//     var keys = Object.keys(obj) //获取当前对象的属性数组
//     for (var i = 0; i < keys.length; i++) {
//       var key = keys[i]
//       var value = obj[key]
//       if (typeof value == 'object' && value !== null) {
//         var index = cache.indexOf(value)
//         if (index !== -1) {
//           hasCircle = true
//           break
//         } else {
//           cache.push(value)
//           arguments.callee(value)
//           cache.pop() //  注意：这里要推出数据，因为递归返回，后面遍历的属性不是这个数据的子属性
//         }
//       }
//     }
//   })(obj)

//   return hasCircle
// }

/* 测试一 */

const obj = {
  foo: {
    name: 'foo',
    bar: {
      name: 'bar',
      baz: {
        name: 'baz',
        aChild: null //待会让它指向obj.foo
      }
    }
  }
}
obj.foo.bar.baz.aChild = obj.foo // foo->bar->baz->aChild->foo 形成环

/* 测试二 */

var obj2 = {
  foo: {
    name: 'foo',
    bar: {
      name: 'bar',
      baz: {
        name: 'baz',
        aChild: null
      }
    }
  },
  aaa: {
    name: 'test',
    bbb: null
  }
}
obj2.aaa.bbb = obj2.foo //  aaa->bbb->bar->baz->aChild->null 不形成环

console.log(cycleDetector(obj2))
