import './datatype.ts';
import './interface'
let hello: string = 'hello typescript!';
let $root: HTMLElement | null = document.getElementById('root');
if ($root !== null) {
    $root.innerHTML = hello;
}
