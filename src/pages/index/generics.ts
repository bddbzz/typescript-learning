//联合类型 函数重载
//泛型 约束类型
function log<T>(value: T): T {
    return value
}
log<string[]>(['a', 'b'])
log(['a', 'b'])

type Log = <T>(value: T) => T
let myLog: Log = log
//约束了函数
interface Log2 {
    <T>(value: T): T
}
//约束了整个接口
interface Log3<T> {
    (value: T): T
}
let myLog3: Log3<number> = log
myLog3(1)
//泛型不能约束静态成员
class Log4<T>{
    run(value: T) {

    }
}
let log4 = new Log4<number>()
log4.run(1)

//泛型约束
interface Length {
    length: number
}
function log5<T extends Length>(value: T): T {
    return value
}
log5('sss')