//枚举值默认从O开始赋值，如果给定起始值，则从起始值开始，而且还是双向映射

enum Derection{
    Up,
    Down,
    Left,
    Right
}

console.log(Derection.Up) // 0
console.log(Derection[0]) // Up

//给定字符串后面必须给值
//const 常量枚举可以提高性能，但是只有常量值适用，计算值不适用，计算值后面遇到再解释
const enum Deropt{
    Up='UP',
    Down='Down',
    Left='Left',
    Right='Right b'
}