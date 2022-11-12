console.log('hello world')

// console.log(process)//运行时的几乎全部的东西

console.log(process.argv)

console.log(process.argv[2] + process.argv[3])
//输入node '.\1.input&output.js' 1 2 3
//输出的是12 也就是传进来的都是字符串类型

