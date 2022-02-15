console.log('teste');
console.log('teste1');
// 布尔类型
var flag: boolean = true
console.log(flag);
//数字类型
var a: number = 12
console.log(a);
var str: string = '12'
console.log(str);
// 数组类型
// 1.指定数组类型
let arr2: number[] = [1, 23, 4];
// 2. 泛型定义数组
let arr3: Array<number> = [11, 23]
// 元组类型,tuple 数组的一种,数据类型要一致
let arr4: [string, number, boolean] = ['2', 2, true]
//第三种数据类型,任意数据类型
var arr7: any[] = [12, 23, true]

// 枚举类型
// 定义枚举,展示状态值,不赋值默认为索引值
enum Flag {
    success = 1,
    error = -1
}
var f: Flag = Flag.success;
console.log(f);
enum Color {
    red,
    yellow = 6,
    blue
}
console.log(Color.blue);
//任意类型
var num: any = 12
num = 'teste'
console.log(num);
// null undefined(定义未赋值)  类型
//void 无返回值类型
// 连续定义
var num2: number | null | undefined;

function runNumber(): number {
    return 12;
}
//never 只能给定never类型

// 函数的声明
//定义返回值类型
function runTe(): string {

    return 'str';
}

// 定义方法传参
function getInfo(name: string, age: number): string {
    return name + age;
}

getInfo('12', 12212)

//可选参数 添加?,但是可选参数必须配置到函数参数最后面

function getInfos(name: string, age?: number): string {
    console.log('姓名+', name);
    console.log('年龄+', age || '年纪保密啊!');

    return 'teste'
}
getInfos('zhangsa');

// 默认参数

function getDefalutInfo(name: string, age: number = 20): string {
    return 'teste'
}


//剩余参数,三点运算符进行参数整合

function sum(a: number, b: number, c: number, d: number): number {
    console.log(a + b + c + d);

    return a + b + c + d
}
sum(1, 2, 3, 4);

function sum1(...result: number[]): number {
    console.log(result);
    return 2
}
sum(1, 2, 3, 4);


// 类的定义

//最简单类

function Persons() {
    this.name = '张三'
    this.age = 20
}

//构造函数原型链增加属性方法,原型链上面的属性会被共享,构造函数不会

function Persons1(name, age) {
    this.name = name
    this.age = age
    this.run = function () {
        console.log(this.name);

    }
}
// 不用实例化就可以调用的方法和属性,成为静态方法或者属性
Persons1.txt = '张三'


Persons1.prototype.sex = '男'
Persons1.prototype.work = '搬砖'
var p1 = new Persons1('张三', 10)
p1.run()
console.log(p1.sex);

//es的继承 原型链和对象组合继承

function Web() {
    Persons1.call(this);// 对象继承,不能继承静态方法,只能继承构造函数内部的属性和方法,不能继承原型链方法属性
}

// console.log(Web.txt);
// 原型链继承,可以继承原型链和对象上的方法,实例化子类时无法给父类传参

function Web1(name, age) {

}
Web1.prototype = new Persons1();
var w = new Web1()
console.log(w.sex);

// 组合继承(原型链加构造函数组合模式)

function Web2(name, age) {
    // 继承的同时进行传参
    Persons1.call(this, name, age)
}

//Ts的类的定义

class Tperson {

    name: string;
    constructor(n: string) {
        //构造函数,实例化触发函数
        this.name = n;
    }
    run(): void {
        console.log(this.name);

    }
}

var T1 = new Tperson('王五啊ppppp')
T1.run();

//Ts 实现继承 extends super (继承Tperson),父子类方法相同时子类优先调用自身的方法    

class Webs extends Tperson {
    constructor(name: string) {
        super(name);// 初始化父类的构造函数
    }
    works(): string {
        return '我是子类的方法!'
    }
}
var T4 = new Webs('赵六')
T4.run()

// 2.类内的修饰符 public 公有 provite 私有(子类无法访问)  protected 保护(类,子类内部使用)

// 静态属性,静态方法

class Persontxt {
    public name: string
    public age: number = 20;
    constructor(name: string, age: number) {
        this.name = name;
    }
    static txts = 'aaaaa'
    // 添加静态方法
    static run(): string {
        //使用静态属性
        console.log('teste', this.txts);
        return 'we'
    }
}
Persontxt.run();
//调用静态属性
console.log(Persontxt.txts);

// 多态:父类定义一个方法不去实现,让继承他的子类实现,每一个子类有不同实现,多态属于继承

class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    eat(): void {
        console.log(this.name + 'eat');

    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat(): void {
        console.log(this.name, '吃肉');
    }
}

let dogs = new Dog('狗子')
dogs.eat();


//静态属性静态方法

// function Persons22(){
//     this.run = function(){
//         //实例方法
//     }
// }

// Persons22.run = function(){
//     // 静态方法
//     console.log('我是静态方法!');

// }
// Persons22.run();

class Personss {
    public name: string
    constructor(name) {
        this.name = name
    }
    run(){
        console.log('我是一个构造函数!!!');
    }
    work(){
        console.log('我是一个在工作的人类!!');
    }
    static print(){
        // 静态方法只能调用静态属性
        console.log('我是静态方法!111111');
        
    }
}

let tempP = new Personss('zhangs')
tempP.run();
Personss.print();
// 继承,多态   父类定义一个方法不去实现,让继承他的子类去实现,每一个子类有不同的实现
//多态也是继承的一种

class Allanimal{
    name:string
    constructor(name:string){
        this.name = name
    }
    eat(){
        console.log('吃的方法!!');
        
    }
}

class AllDog extends Allanimal{

    constructor(name:string){
        super(name);//将属性传递给父类
    }
    eat(): void {
        console.log(this.name + '吃肉!!!');
    }
}

class AllCat extends Allanimal{

    constructor(name:string){
        super(name);//将属性传递给父类
    }
    eat(): void {
        console.log(this.name + '吃老鼠!!!');
    }
}


// 抽象方法 用abstract 关键字定义抽象类抽象方法,抽象类中的抽象方法不包含具体的实现并且必须在派生类中实现
// 抽象放只能放在抽象类中,抽象类不能直接被实例化,定义标准

abstract class AbsAnimall {
    abstract eat():void;
}

class AbsDog extends AbsAnimall{
    // 实现父类的抽象方法
    eat(): void {
        throw new Error("Method not implemented.");
    }
}

// 接口
//接口是一种规范的定义,定义了行为规范限制的作用


// 属性接口 对json的约束

// function printlabel(label?:string):void{
//     console.log('这是一个接口的例子!!');
    
// }

// printlabel()
function printlabel(label?:string):void{
    console.log('这是一个接口的例子!!');
    
}

printlabel() 


//对批量方法传入参数约束

interface FullName {
    firstNmme:string;
    secondName:string
}

function printFullname(name:FullName){
    console.log(name);
    
}
// 
let objs = {
    age:20,
    firstNmme:'张三',
    secondName:'李四'
}
printFullname(objs)

// 接口可选属性

interface FullNamess {
    firstname?:string;
    secondname?:string;
}
function getInfos1(value:FullNamess){
    console.log(value);
    
}

getInfos1({
    firstname:'王五1',
})


//模拟接口
// 参数类型的接口
interface Config {
    type:string;
    url:string;
    data?:string;
    dataType:string
}
function ajax(config:Config){

}

// 函数类型的接口 对函数的返回值的约束
// 加密的函数类型接口
interface encrypt {
    (key:string,value:string):string;
}

// 函数的接口
let md5:encrypt = function(key:string,value:string):string{
    return ''
}



// 可索引接口,数组,对象的约束

