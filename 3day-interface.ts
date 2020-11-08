
interface People{
    readonly id:number, //只读
    name: string;
    age?: number
}

let vikin:People={
    id:123,
    name:'122'
}

// 两个类具有相同方法，可以提取成interface，优化代码

interface Radio{
    switchRadio(trigger:boolean):void
}
interface Battery{
    checkBatter();
}
//可以继承
interface RadioWithBattery extends Radio{
    checkBatter();
} 

class Car implements Radio{
    switchRadio(){}
}

class Cellphone implements RadioWithBattery{
    switchRadio(){}
    checkBatter(){}
}