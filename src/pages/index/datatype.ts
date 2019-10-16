//
//基本数据类型
let bool: Boolean = true;
let num: Number = 11;
let str: String = 'string';
let udf: undefined = undefined;
let nul: null = null;
let s1: symbol = Symbol();
let s2 = Symbol();

//数组类型
let arr1: Array<number> = [1, 2, 3]; //泛型接口
let arr2: number[] = [3, 4, 5];
let arr3: Array<number | string> = [1, 2, 3, '4']; //联合类型

//元组类型，限制类型和个数，访问不能越界
let tuple: [number, string] = [1, 'str'];

//对象，绕过类型检查的hack
let obj: { a: number, b: number } = { a: 1, b: 2 }; 

//函数,返回值类型可以省略
let add = (a: number, b: number) => a + b;
let minus = (a: number, b: number): number => a - b;
//函数类型
let compute: (x: number, y: number) => number;
//函数具体实现
compute = (a, b) => a + b;

//void
//any
//never 永远不会有返回值得类型
let error = () => {
    throw new Error();
}
//enum
//泛型
