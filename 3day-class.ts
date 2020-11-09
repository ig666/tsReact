//函数声明的写法
// function add(x:number,y:number,z:number=10):number{
//     if(typeof z==='number'){
//         return x+y+z
//     }
//     return x+y
// }
// let res=add(2,3)

// 函数表达式
const add = function (x: number, y: number, z: number = 10): number {
  if (typeof z === "number") {
    return x + y + z;
  }
  return x + y;
};

const add2: (x: number, y: number) => number = add;

let strs = "str"; //类型推断

//  class.ts

//  修饰符
// 1.public (公有) 默认是加上的  所以加不加都可以
// 2.private(私有)
// 3.protected 和private差不多，但他的!!!子类(意思就是子类class中可以访问)!!!可以访问属性
// 4.readonly只读属性，不可以修改
// 5.static静态属性，不需要再实列上访问，可以直接通过类访问
class admin {

    static categoies:string[]=['longlong','qiqi']
    public name: string;
  // private name: string;
  // protected name: string;
//   readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    console.log(this.name);
    return this.name;
  }
}

console.log(admin.categoies)

const people = new admin("qiqi");

people.run();

class dog extends admin {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaolong = new dog("xiaolonng");

console.log(xiaolong.bark());

//重写构造函数，在子类中必须调用super,不然报错,super 相当于把this指向改变为子类
class cat extends admin {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return "Meow," + super.run();
  }
}

const maomao = new cat("maomao");

console.log(maomao.run());
