var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('teste');
console.log('teste1');
// 布尔类型
var flag = true;
console.log(flag);
//数字类型
var a = 12;
console.log(a);
var str = '12';
console.log(str);
// 数组类型
// 1.指定数组类型
var arr2 = [1, 23, 4];
// 2. 泛型定义数组
var arr3 = [11, 23];
// 元组类型,tuple 数组的一种,数据类型要一致
var arr4 = ['2', 2, true];
//第三种数据类型,任意数据类型
var arr7 = [12, 23, true];
// 枚举类型
// 定义枚举,展示状态值,不赋值默认为索引值
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 6] = "yellow";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
console.log(Color.blue);
//任意类型
var num = 12;
num = 'teste';
console.log(num);
// null undefined(定义未赋值)  类型
//void 无返回值类型
// 连续定义
var num2;
function runNumber() {
    return 12;
}
//never 只能给定never类型
// 函数的声明
//定义返回值类型
function runTe() {
    return 'str';
}
// 定义方法传参
function getInfo(name, age) {
    return name + age;
}
getInfo('12', 12212);
//可选参数 添加?,但是可选参数必须配置到函数参数最后面
function getInfos(name, age) {
    console.log('姓名+', name);
    console.log('年龄+', age || '年纪保密啊!');
    return 'teste';
}
getInfos('zhangsa');
// 默认参数
function getDefalutInfo(name, age) {
    if (age === void 0) { age = 20; }
    return 'teste';
}
//剩余参数,三点运算符进行参数整合
function sum(a, b, c, d) {
    console.log(a + b + c + d);
    return a + b + c + d;
}
sum(1, 2, 3, 4);
function sum1() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    console.log(result);
    return 2;
}
sum(1, 2, 3, 4);
// 类的定义
//最简单类
function Persons() {
    this.name = '张三';
    this.age = 20;
}
//构造函数原型链增加属性方法,原型链上面的属性会被共享,构造函数不会
function Persons1(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(this.name);
    };
}
// 不用实例化就可以调用的方法和属性,成为静态方法或者属性
Persons1.txt = '张三';
Persons1.prototype.sex = '男';
Persons1.prototype.work = '搬砖';
var p1 = new Persons1('张三', 10);
p1.run();
console.log(p1.sex);
//es的继承 原型链和对象组合继承
function Web() {
    Persons1.call(this); // 对象继承,不能继承静态方法,只能继承构造函数内部的属性和方法,不能继承原型链方法属性
}
// console.log(Web.txt);
// 原型链继承,可以继承原型链和对象上的方法,实例化子类时无法给父类传参
function Web1(name, age) {
}
Web1.prototype = new Persons1();
var w = new Web1();
console.log(w.sex);
// 组合继承(原型链加构造函数组合模式)
function Web2(name, age) {
    // 继承的同时进行传参
    Persons1.call(this, name, age);
}
//Ts的类的定义
var Tperson = /** @class */ (function () {
    function Tperson(n) {
        //构造函数,实例化触发函数
        this.name = n;
    }
    Tperson.prototype.run = function () {
        console.log(this.name);
    };
    return Tperson;
}());
var T1 = new Tperson('王五啊ppppp');
T1.run();
//Ts 实现继承 extends super (继承Tperson),父子类方法相同时子类优先调用自身的方法    
var Webs = /** @class */ (function (_super) {
    __extends(Webs, _super);
    function Webs(name) {
        return _super.call(this, name) || this;
    }
    Webs.prototype.works = function () {
        return '我是子类的方法!';
    };
    return Webs;
}(Tperson));
var T4 = new Webs('赵六');
T4.run();
// 2.类内的修饰符 public 公有 provite 私有(子类无法访问)  protected 保护(类,子类内部使用)
// 静态属性,静态方法
var Persontxt = /** @class */ (function () {
    function Persontxt(name, age) {
        this.age = 20;
        this.name = name;
    }
    // 添加静态方法
    Persontxt.run = function () {
        //使用静态属性
        console.log('teste', this.txts);
        return 'we';
    };
    Persontxt.txts = 'aaaaa';
    return Persontxt;
}());
Persontxt.run();
//调用静态属性
console.log(Persontxt.txts);
// 多态:父类定义一个方法不去实现,让继承他的子类实现,每一个子类有不同实现,多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + 'eat');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name, '吃肉');
    };
    return Dog;
}(Animal));
var dogs = new Dog('狗子');
dogs.eat();
