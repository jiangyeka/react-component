// 面向对象：定义事物抽象特点
// 类的实例：实例
// OOP面向对象编程 Object Oriented Prograrm 封装 继承 多态（各自方法）
class Animal{
   protected  name:string;
   static awe:string[]=['mammal','bird']
    constructor(name:string) {
        this.name=name
    }
    run(){return `${this.name} is running`}
}
console.log(Animal.awe)
// const snake =new Animal('lily')
// console.log(snake.run())
// class Dog extends Animal{
//     bark(){
//         return `${this.name} is barking`
//     }
// }
// const xiugou=new Dog('gou')
// console.log(xiugou.bark())
// console.log(xiugou.run())

class Cat extends Animal{
    constructor(name) {
        super(name);
        console.log(this.name)
    }
    run(): string {
        return 'Meow,'+super.run()
    }
}
const xx=new Cat('xx')
console.log(xx.run())

// public private protected readonly
// static不会被实例继承，可以被子类继承，一般用类直接调用

interface Radio{
    switchRadio():void
}
interface Battery{
}

interface RadioWithBattery extends Radio{
    checkBatteryStatus()
}

class Car implements Radio{
    switchRadio(){}

}
class Cellphone implements RadioWithBattery{
    switchRadio(){
    },
    checkBatteryStatus() {
    }
}

