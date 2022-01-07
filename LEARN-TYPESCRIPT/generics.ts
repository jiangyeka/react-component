function echo<T>(args:T):T{
    return args
}

const result=echo(123)

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}


function echoWithArr<T>(arg:T[]):T[]{
    console.log(arg.length)
    return arg
}
const arrs=echoWithArr([1,2,3])
// 约束泛型
interface IWithLength{
    length:number
}
function echoWithLength<T extends IWithLength>(arg:T):T{
    console.log(arg.length)
    return arg
}

const str=echoWithLength('str')
const obj=echoWithLength({length:10})
const arr2=echoWithLength([1,2,3])

class Queue<T>{
    private data=[]
    push(item:T){return this.data.push(item)}
    pop():T{
        return this.data.shift()
    }
}


// number的tofixed四舍五入
const queue=new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

const queue2=new Queue<string>()
queue2.push('2')
console.log(queue2.pop().length)


interface KeyPair<T,U>{
    key:T;
    value:U
}
let kp1:KeyPair<number, string>={key:1,value:'q'}


let arr:number[]=[1,23]
let arr1:Array<number>=[1,2]


function plus(a:number,b:number):number{
    return a+b
}
interface IPlus<T>{
    (a:T,b:T):T
}
const ffff:IPlus<number>=plus