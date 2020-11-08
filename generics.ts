// 泛型:是指在定义函数，接口，类时故意指定模糊类型，而是在使用的时候指定类型

function echo<T>(arg:T):T{
    return arg 
}

const result=echo(123)

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}

const res=swap(['1232',2222])