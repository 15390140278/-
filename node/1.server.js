// 以node-express框架为例
const app = require('express')()
app.options('/', (req, res) => {
  const obj = {
    msg: 'options请求'
  }
  res.send(obj)
})

app.post('/', (req, res) => {
  console.log('post请求')
  const obj = {
    msg: 'post请求'
  }
  res.send(obj)
})

app.get('/a', (req, res, next) => {
  console.log('get请求')
  const obj = {
    msg: 'get请求'
  }
  res.send(obj)
})

app.put('/', (req, res) => {
  const obj = {
    msg: 'put请求'
  }
  res.send(obj)
})
app.listen(3000, function () {
  console.log('express start at port 3000')
})
