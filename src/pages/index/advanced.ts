//交叉类型,取并集

interface DogInterface {
    run(): void
}
interface CatInterface {
    jump(): void
}

let pet: DogInterface & CatInterface

class DogPet implements DogInterface {
    run() { }
    eat() { }
}

class CatPet implements CatInterface {
    jump() { }
    eat() { }
}

enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new DogPet() : new CatPet()
    pet.eat()

    return pet
}


//联合类型,可以为类型中的一个

let a: number | string
//字面量类型
let b: 'a' | 'b' | 'c'
let c: 1 | 2 | 3

//可交叉的联合类型
interface Square {
    kind: "square"
    size: number
}
interface Rectangle {
    kind: "rectangle"
    width: number
    height: number
}
interface Circle {
    kind: 'circle',
    r: number
}
type Shape = Square | Rectangle | Circle
function area(s: Shape): number {
    switch (s.kind) {
        case 'square':
            return s.size * s.size
        case 'rectangle':
            return s.width * s.height
        case 'circle':
            return s.r ** 2 * Math.PI
        default:
            return ((e: never) => { throw new Error(e) })(s) //有遗漏就会报错
    }
}


//类型约束 索引类型
//keyof T
interface Obj {
    a: number
    b: string
}
let key: keyof Obj
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}

//映射类型
interface Obj2 {
    a: string
    b: number
    c: boolean
}
type readonlyObj = Readonly<Obj2>
type partialObj = Partial<Obj2>

//Pick 映射类型
type pickObj = Pick<Obj2, 'a' | 'b'>

//同态或者非同态
type recordObj = Record<'x' | 'y', Obj2>