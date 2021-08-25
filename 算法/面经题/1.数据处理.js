//实现以下输出
let inArr = [
  {
    company: 'COM1',
    customer: 'CUS1'
  },
  {
    company: 'COM1',
    customer: 'CUS2'
  },
  {
    company: 'COM2',
    customer: 'CUS3'
  }
]
let outArr = [
  {
    company: 'COM1',
    customer: ['CUS1', 'CUS2']
  },
  {
    company: 'COM2',
    customer: ['CUS3']
  }
]

function print(arr) {
  let res = []
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (item.company == 'COM1') {
      if (!map[item.company]) {
        map[item.company] = []
      }
      map[item.company].push(item.customer)
    } else if (item.company == 'COM2') {
      if (!map[item.company]) {
        map[item.company] = []
      }
      map[item.company].push(item.customer)
    }
  }
  // console.log(map) //{ COM1: [ 'CUS1', 'CUS2' ], COM2: [ 'CUS3' ] }
  for (let key in map) {
    res.push({
      company: key,
      customer: map[key]
    })
  }
  console.log(res)
}

print(inArr)
