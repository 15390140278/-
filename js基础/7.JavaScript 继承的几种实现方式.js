// 原型链继承
function Super(name) {
  this.name = name
}

function Sub(name) {
  this.name = name
}

Sub.prototype = new Super()

// 构造函数继承
function Super(name) {
  this.name = name
}

function Sub(name) {
  Super.call(this, name)
  this.name = name
}

// 原型链加构造函数组合继承
function Super(name) {
  this.name = name
}

function Sub(name) {
  Super.call(this, name)
  this.name = name
}

Sub.prototype = new Super()

//组合继承优化1
function Super(name) {
  this.name = name
}

function Sub(name) {
  Super.call(this, name)
  this.name = name
}

Sub.prototype = Super.prototype

//组合继承优化2

function Super(name) {
  this.name = name
}

function Sub(name) {
  Super.call(this, name)
  this.name = name
}

Sub.prototype = Object.create(Super.prototype)
Sub.prototype.constructor = Sub

// es6
