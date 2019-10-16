interface List {
    readonly id: number,
    name: string,
    [x: string]: any,
    age?: number
}
interface Result{
    data: List[]
}

function render(result: Result){
    console.log(result)
}
//鸭式变形法,满足必要条件，与绕过方法
//类型断言 as or <Result>
//字符串索引签名, 用任意字符串支持任意结果，这样可以支持多个属性了
//只读属性，可选属性
render({
    data:[
        {id:1, name: 'Betty', gender: 'female'},
        {id:2, name: 'Patty'}
    ]
} as Result)

render(<Result>{
    data:[
        {id:1, name: 'Betty', gender: 'female', age: 11},
        {id:2, name: 'Patty'}
    ]
})
//可索引接口
interface StringArray{
    [index: number]: string
}

let chars: StringArray = ['A', 'B', 'C']

interface Names{
    [x: string]: string
}
let names: Names = {
    'a': 'a'
}