console.log(Number() == new Number()) //true 隐式转换 toValue toString
console.log(Number() === new Number()) //false
console.log(String() == new String()) //true 隐式转换 toValue toString
console.log(String() == new String()) //false
console.log(Array() == new Array()) //false 比较地址
console.log(Array() === new Array()) //false 比较地址
console.log(0 == []) //true
console.log(0 === []) //false
