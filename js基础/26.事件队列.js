/**
 * 当JS主线程执行到Promise对象时，

promise1.then() 的回调就是一个 task

promise1 是 resolved或rejected: 那这个 task 就会放入当前事件循环回合的 microtask queue

promise1 是 pending: 这个 task 就会放入 事件循环的未来的某个(可能下一个)回合的 microtask queue 中

setTimeout 的回调也是个 task ，它会被放入 macrotask queue 即使是 0ms 的情况
 * 
 */

// console.log('script start') //1
// let promise1 = new Promise(function (resolve) {
//   console.log('promise1') //2
//   setTimeout(() => {
//     resolve()
//   })
//   console.log('promise1 end') //3
// }).then(function () {
//   console.log('promise2') //5
// })
// setTimeout(function () {
//   console.log('settimeout') //6
// })
// console.log('script end') //4

// async/await
// async function async1() {
//   console.log('async1 start') //2
//   await async2()
//   console.log('async1 end') //5
// }
// async function async2() {
//   console.log('async2') //3
// }

// console.log('script start') //1
// async1()
// console.log('script end') //4

// async 修饰的函数返回一个promise对象
// async function fn() {
//   return 1
// }

// fn().then(res => {
//   console.log(res) //1
// })

async function async1() {
  console.log('async1 start') //2
  // 执行完这句，跳出去
  await async2()
  console.log('async1 end') // 6
}
async function async2() {
  console.log('async2') //3
}
console.log('script start') //1
setTimeout(function () {
  console.log('setTimeout') //8
}, 0)
async1()
new Promise(function (resolve) {
  console.log('promise1') // 4
  resolve()
}).then(function () {
  console.log('promise2') //7
})
console.log('script end') // 5
