// 如果代码里面有 export import 之类的代码，那么这个文件变成一个模块，里面的变量都会变成一个私有变量
export {};
let name: string = 'xiaowu';
let age: number = 20;
let married: boolean = true;
let hobbies: string[] = ['1', '2', '3'];
let interests: Array<string> = ['4', '5', '6'];
let count: Array<number> = [1, 2, 3, 4, 5, 6];
// 元组 类似一个数组 它是一个长度和类型都固定的数组
// 1、长度固定   2、类型可以不一样
let point: [number, number] = [100, 200];
point[0], point[1];
let person: [string, number] = ['xiaowu', 12];

// 枚举   事先考虑到某一个变量的所有的可能的值，尽量用自然语言中的单词表示他的每一个值
// 比如 性别、月份、星期、颜色、单位、学历等等
// 枚举尽量不要赋值 这样就会按照索引 0,1,2
// 枚举里面不能放计算属性
enum Gender {
    BOY,
    GIRL,
}
console.log(`GG is ${Gender.BOY}`); // GG是0
console.log(`MM is ${Gender.GIRL}`); // MM是1

// 原理实现
// var Gender2;
// (function (Gender2) {
//     Gender2[Gender2["BOY"] = 0] = "BOY";
//     Gender2[Gender2["GIRL"] = 1] = "GIRL";
// })(Gender2 || (Gender2 = {}));
// console.log(`GG是${Gender2.BOY}`);
// console.log(`MM是${Gender2.GIRL}`);
// let Gender2 = {
//     0: 'BOY',
//     1: 'GIRL',
//     'BOY': 0,
//     'GIRL': 1
// }

enum Week {
    MONDAY = 1,
    TUESDAY = 2,
}
console.log(Week.TUESDAY);

// 常数枚举
const enum Colors {
    Red,
    Yellow,
    Blue,
}
console.log(Colors.Red, Colors.Yellow, Colors.Blue);

// 任意类型   anyscript
// 第三方库没有类型定义 类型转换的时候 数据结构太复杂太灵活 any  尽量不用
// ts 为 dom提供了一整套的类型声明
// let root: HTMLElement | null = document.getElementById('root')
// root!.style.color = 'red'   // ! 断言不为空的意思

// null undefined
// null 空   undefined 未定义
// 它们都是其它类型的子类型(包括void) 你可以把它们赋给其它类型的变量 (ps:前提是 tsconfig.json 中的 'strictNullChecks' 为 false)
let aa: string | null = null;
let bb: string | undefined = undefined;
let cc: boolean | null = null;
let dd: number | null = null;

// void类型 空的 没有
function qqq(name: string): null | void {
    console.log(`hi ${name}`);
    // return 'str'
    return null;
}
qqq('xiaohuang');

// never 永远不
// never 是其它类型的子类型，代表不会出现的值
// 在函数内部永远会抛出错误，导致函数无法正常结束
function aaa(message: string): never {
    console.log(1);
    throw new Error('error');
    console.log('end point');
}
function bbb(): never {
    while (true) {
        console.log('hi');
    }
    console.log('end point');
}

// 包装对象   java装箱和拆箱 c#
// 自动在基本类型的对象类型之间切换
// 1、基本类型上没有方法
// 2、在内部迅速的完成一个装箱操作，把基本类型迅速包装成对象类型，然后用对象来调用方法
let a: string = 'xiaohuang';
// a.toLocaleLowerCase()
let b = new String(a);
b.toLocaleUpperCase();

// let isok1: boolean = true
// let isok2: boolean = Boolean(1)
// let isok3: boolean = new Boolean(1)

// 联合类型
let NAME: string | number;
NAME = 'xiao';
NAME.toLocaleLowerCase();
NAME = 666;
NAME.toFixed(2);

// 类型断言   只能断言声明的联合类型   赋值以后不能断言
// let type: string | number = 7;
let type: string | number;
(type as string).toLocaleLowerCase();
(type as number).toFixed(2);

// 字面量类型   只能赋值其中的一个 除此之外的不可
let sex: 'BOY' | 'GIRL';
sex = 'BOY';
sex = 'GIRL';
// sex = 'xiao'

// 字符串字面量 VS 联合类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个，联合类型表示取值可以为多种类型中的一种
// 字符串字面量 限定了使用该字面量的地方仅接受特定的值，联合类型对于值并没有限定，仅仅限定值的类型需要保持一致
