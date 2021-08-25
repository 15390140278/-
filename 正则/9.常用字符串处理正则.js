~(function () {
  function formatTime(template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
    let timeAry = this.match(/\d+/g)
    // [ '2019', '8', '13', '16', '51', '3' ]
    template = template.replace(/\{(\d+)\}/g, (...args) => {
      let [content, $1] = args
      // console.log(content) //{0},{1}...
      //$1 0, 1, 2,...
      let time = timeAry[$1] || '00'
      time.length < 2 ? (time = '0' + time) : null
      // 返回的结果将大正则匹配的结果替换掉
      //{0} => 2019 {1} => 08 ...
      return time
    })
    // console.log(template)
    return template
  }

  function queryURLParams() {
    let obj = {}
    let reg = /([^?#&=]+)=([^?#&=]+)/g
    this.replace(reg, (...[content, $1, $2]) => {
      /**
       * lx=1 lx 1
       * from=wx from wx
       */
      obj[$1] = $2
    })

    this.replace(/#([^?=#&]+)/g, (...[content, $1]) => {
      obj['HASH'] = $1
    })
    console.log(obj)
    return obj
  }

  // 千分符
  function millimeter() {
    return this.replace(/\d{1,3}(?=(\d{3})+$)/g, content => {
      return content + ','
    })
  }
  // 扩展方法到String.prototype上
  ;['formatTime', 'queryURLParams', 'millimeter'].forEach(item => {
    String.prototype[item] = eval(item)
  })
})()

// let time = '2019-8-13 16:51:3'
// let res = time.formatTime()
// console.log(res)

// let url = 'https://www.zhufengpeixun.cn/?lx=1&from=wx#video'
// //=>{lx:1, from: wx, HASH: video}
// url.queryURLParams()

let str = '12342432143'
console.log(str.millimeter())
