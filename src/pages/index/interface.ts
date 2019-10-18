interface List {
    readonly id: number,
    name: string,
    [x: string]: any,
    age?: number
}
interface Result {
    data: List[]
}

function render(result: Result) {
    console.log(result)
}
//鸭式变形法,满足必要条件，与绕过方法
//类型断言 as or <Result>
//字符串索引签名, 用任意字符串支持任意结果，这样可以支持多个属性了
//只读属性，可选属性
render({
    data: [
        { id: 1, name: 'Betty', gender: 'female' },
        { id: 2, name: 'Patty' }
    ]
} as Result)

render(<Result>{
    data: [
        { id: 1, name: 'Betty', gender: 'female', age: 11 },
        { id: 2, name: 'Patty' }
    ]
})
//可索引接口
interface StringArray {
    [index: number]: string
}

let chars: StringArray = ['A', 'B', 'C']

interface Names {
    [x: string]: string
    [z: number]: string
    //y: number
}
let names: Names = {
    'a': 'a'
}

//四种定义函数的方法
{
    //function 定义加实现
    //只定义了没有实现
    let add: (x: number, y: number) => number;
    interface Add {
        (x: number, y: number): number
    };
    type Add2 = (x: number, y: number) => number;
    let add2: Add2 = (a, b) => a + b;
}

interface Lib {
    (): void;
    version: string;
    doSomeThing(): void
}
let lib: Lib = (() => { }) as Lib;
lib.version = '1.0'
lib.doSomeThing = () => { }

function add5(x: number, y?: number) {
    return y ? x + y : x
}

add5(1)

function add6(x: number, y = 1, z: number, q = 1) {

}

add6(1, undefined, 3)

function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}
add7(1, 2, 3)

//函数重载增强函数的可读性,函数重载的声明只用于类型检查，编译后会被删除
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur)
    }
    else if(typeof first === 'string'){
        return rest.join(',')
    }
    return rest
}