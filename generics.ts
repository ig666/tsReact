// 泛型:是指在定义函数，接口，类时故意指定模糊类型，而是在使用的时候指定类型

function echo<T>(arg: T): T {
  return arg;
}

const result = echo(123);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const res = swap(["1232", 2222]);

// 泛型约束
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arrs = echoWithArr([1, 2, 3]);

interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const str = echoWithLength("asdasdd");
const obj = echoWithLength({ length: 10, width: 10 });

//泛型作用于类

class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
console.log(queue.pop().toFixed());

const queue2 = new Queue<string>();
queue2.push("sye");
console.log(queue2.pop().length);

//泛型作用于接口

interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 1, value: "23" };
let kp2: KeyPair<string, number> = { key: "123", value: 23 };

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3, 23, 123];

//接口描述函数
interface IPuls<T> {
  (one: T, two: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}
function connect(a:string, b: string): string {
  return  a+b;
}
const plusM: IPuls<number> = plus;
const connectM: IPuls<string> = connect;
