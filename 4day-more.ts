// type aliases 类型别名

type PlusType=(x:number,z:number)=>number
function sun(x:number,y:number):number{
    return x+y
}

// const sun2:(x:number,z:number)=>number=sun
const sun2:PlusType=sun

type NmaeResolver=()=>string
type NameOrResolver=string | NmaeResolver

// 联合类型
function getName(n:NameOrResolver):string{
    if(typeof n==='string'){
        return n
    }else{
        return n()
    }
}

//type assertion 类型断言

function getLength(input:string | number):number{
    // input.length  input只能使用string | number 公有方法或属性，所以.length回报错
    // const str=input as String  //相当于告诉计算机我更了解其中属性，断言成input联合类型的其中一种，但是不能断言成联合类型没有的，比如Boolean（上面联合类型没有）
    // if(str.length){
    //     return str.length
    // }else{
    //     const number=input as Number
    //     return number.toString().length
    // }

    // 简易写法
    if((<string>input)){
        return (<string>input).length
    }else{
        return input.toString().length
    }
}