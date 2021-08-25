// 匹配手机
var regPhone = /^1[34578]\d{9}$/g
// 匹配日期 yyyy-mm-dd
var regDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/
console.log(regDate.test('2021-06-01'))
