let arrOfnumber:number[]=[1,2,3]
arrOfnumber.push(1)

function test(){
    console.log(arguments) //类数组
}

//源组

let user:[string,number]=['sd',1]

// interface 接口
// 1. 对对象的形状(shape)进行描述
// 2. 对类(class)进行抽象
// 3. Duck Typing(鸭子类型)

interface Person{
    readonly id:number, //只读
    name: string;
    age?: number
}

let viking:Person={
    id:123,
    name:'122'
}