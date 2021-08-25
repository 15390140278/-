// 1
// let num = 4 //100
// let count = 0
// while (num != 0) {
//   if (num % 2 == 1) {
//     count++
//   }
//   num = Math.floor(num / 2)
// }
// console.log(count)

// 2 每次检查最后一位是不是1
// let num = 4
// let count = 0
// while (num) {
//   // 最后一位是1就加1
//   count += num & 1
//   num = num >> 1
// }
// console.log(count)

//3 将二进制中出现的1从低位到高位依次变成0，num=0循环终止，循环的次数就为1的个数
// num & num - 1 每次消掉最低位的1
let num = 4
let count = 0
while (num) {
  /*
    100  111
    011  110
         110
         011
         010
         001
         000
  */
  num = num & (num - 1)
  count++
}
console.log(count)

while (num > 0) {
  num = num & (num - 1)
  count++
}
