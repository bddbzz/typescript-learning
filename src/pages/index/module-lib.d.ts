declare function moduleLib(params: Options): void
interface Options {
    [key: string]: any
}
declare namespace moduleLib {
    const version: any
    function doSomeThing(): void
}

export = moduleLib