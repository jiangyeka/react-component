// type inference
function add(x:number,y:number,z:number=10):number{
    if(typeof z==='number'){
        return x+y+z
    }else
    return x+y
}
let reu=add(2,3,5)

// 函数类型声明 (x:number,y:number,z:number)=>number
const add2:(x:number,y:number,z:number)=>number=add
