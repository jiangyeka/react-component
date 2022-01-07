let isDone:boolean=false
let age:number=123
let binaryNumber:number=0b1111
let a:string='1'


// 所有类型的子类型 undefined 和null
let num:number=undefined

let notSure:any=4
notSure='aa'
notSure=true
notSure.my()
notSure.m

// 联合
let numberOrString:number|string=234


// 数组
let arrOfNumbers:number[]=[1,2,3,4]
arrOfNumbers.push(2)

// 类数组
function test(){
    console.log(arguments)
    arguments.length

}

let user:[string,number]=['a',12]

// 定义引用数据

// interface duck typing



