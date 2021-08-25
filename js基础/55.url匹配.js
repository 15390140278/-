// https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33
// https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33
// https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33
// [] || ['800'] || ['800','700']

// function getValue(url) {
//   let res = []
//   url
//     .split('&')
//     .map(item => item.split('='))
//     .forEach(item => {
//       if (item[0] == 'elective') {
//         item[1].split(',').forEach(i => {
//           i && res.push(i)
//         })
//       }
//     })
//   return res
// }

// 正则
function getValue(url) {
  if (!url) return
  let res = url.match(/(?<=elective=)(\d+(,\d+)*)/)
  return res ? res[0].split(',') : []
}

console.log(getValue('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33'))
console.log(getValue('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33'))
console.log(getValue('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33'))
