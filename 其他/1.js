let options = [
  {
    val: {
      code: 1,
      level: 1
    },
    children: [
      {
        val: {
          code: 2,
          level: 2
        },
        children: [
          {
            val: {
              code: 3,
              level: 3
            }
          },
          {
            val: {
              code: 4,
              level: 3
            }
          }
        ]
      }
    ]
  }
]

// forEach只能return跳出当前循环

let res = null
let idx = null
options.forEach(item1 => {
  item1.children &&
    item1.children.length > 1 &&
    item1.children.forEach(item2 => {
      res =
        item2.children.length > 1 &&
        item2.children.find((item3, index) => {
          return item3.value.code === 511622
        })
    })
})

console.log(res, idx)
