type PlusType=(x:number,y:number)=>number
function sum(x:number,y:number):number{
    return  x+y

}
const sum2:PlusType =sum

type NameResolver=()=>string
type NameOrResovler=string|NameResolver
function getName(n:NameOrResovler){
    if(typeof n==='string')return n
    else  return n()
}
// type assertion
// 断言
function getLength(input:string|number):number{
   // const str=input as String
   //  if(str.length) return str.length
   //  else {
   //      const number=input as number
   //      return number.toString().length
   //  }
    if((<string>input).length)return (<string>input).length
}



jQuery('#e').