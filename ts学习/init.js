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
var Personss = /** @class */ (function () {
    function Personss(name) {
        this.name = name;
    }
    Personss.prototype.run = function () {
        console.log('我是一个构造函数!!!');
    };
    Personss.prototype.work = function () {
        console.log('我是一个在工作的人类!!');
    };
    Personss.print = function () {
        // 静态方法只能调用静态属性
        console.log('我是静态方法!111111');
    };
    return Personss;
}());
var tempP = new Personss('zhangs');
tempP.run();
Personss.print();
// 继承,多态   父类定义一个方法不去实现,让继承他的子类去实现,每一个子类有不同的实现
//多态也是继承的一种
var Allanimal = /** @class */ (function () {
    function Allanimal(name) {
        this.name = name;
    }
    Allanimal.prototype.eat = function () {
        console.log('吃的方法!!');
    };
    return Allanimal;
}());
var AllDog = /** @class */ (function (_super) {
    __extends(AllDog, _super);
    function AllDog(name) {
        return _super.call(this, name) || this;
    }
    AllDog.prototype.eat = function () {
        console.log(this.name + '吃肉!!!');
    };
    return AllDog;
}(Allanimal));
var AllCat = /** @class */ (function (_super) {
    __extends(AllCat, _super);
    function AllCat(name) {
        return _super.call(this, name) || this;
    }
    AllCat.prototype.eat = function () {
        console.log(this.name + '吃老鼠!!!');
    };
    return AllCat;
}(Allanimal));
// 抽象方法 用abstract 关键字定义抽象类抽象方法,抽象类中的抽象方法不包含具体的实现并且必须在派生类中实现
// 抽象放只能放在抽象类中,抽象类不能直接被实例化,定义标准
var AbsAnimall = /** @class */ (function () {
    function AbsAnimall() {
    }
    return AbsAnimall;
}());
var AbsDog = /** @class */ (function (_super) {
    __extends(AbsDog, _super);
    function AbsDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 实现父类的抽象方法
    AbsDog.prototype.eat = function () {
        throw new Error("Method not implemented.");
    };
    return AbsDog;
}(AbsAnimall));
// 接口
//接口是一种规范的定义,定义了行为规范限制的作用
// 属性接口 对json的约束
// function printlabel(label?:string):void{
//     console.log('这是一个接口的例子!!');
// }
// printlabel()
function printlabel(label) {
    console.log('这是一个接口的例子!!');
}
printlabel();
function printFullname(name) {
    console.log(name);
}
// 
var objs = {
    age: 20,
    firstNmme: '张三',
    secondName: '李四'
};
printFullname(objs);
function getInfos1(value) {
    console.log(value);
}
getInfos1({
    firstname: '王五1'
});
function ajax(config) {
}
// 函数的接口
var md5 = function (key, value) {
    return '';
};
var arrs1 = ['123', '2323'];
console.log(arrs1[0]);
var MyDogss = /** @class */ (function () {
    function MyDogss(name) {
        this.name = name;
    }
    MyDogss.prototype.eat = function (str) {
        console.log(str);
        console.log(this.name);
    };
    return MyDogss;
}());
var NewPersons = /** @class */ (function () {
    function NewPersons() {
    }
    NewPersons.prototype.work = function () {
        throw new Error("Method not implemented.");
    };
    NewPersons.prototype.eat = function () {
        throw new Error("Method not implemented.");
    };
    return NewPersons;
}());
// 泛型 ,解决类,接口,方法的重用性,支持不特定数据类型
//定义可以返回多个类型的方法,传入什么返回什么,支持不特定数据类型
function getTdata(value) {
    return value;
}
// 泛型类 :最小堆算法同时支持范湖数字和字符串,通过泛型实现
var MinClSSA = /** @class */ (function () {
    function MinClSSA() {
        this.list = [];
    }
    MinClSSA.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClSSA.prototype.min = function () {
        var minnum = this.list[0];
        this.list.forEach(function (e) {
            if (minnum > e) {
                minnum = e;
            }
        });
        return minnum;
    };
    return MinClSSA;
}());
var m23 = new MinClSSA(); // 定义化类,定义类的返回值
//实现泛型接口
var getAlldata = function (value) {
    return value;
};
function newGetDatas(value) {
    console.log(value);
    return value;
}
var newGetdatas = newGetDatas;
newGetdatas('23');
/// 泛型类的展示
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
var MysQLdB = /** @class */ (function () {
    function MysQLdB() {
    }
    // 使用user类控制传值的合法性
    MysQLdB.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MysQLdB;
}());
var Usc = new Users();
Usc.username = '张三';
Usc.passowrd = '1243';
var DbServe = new MysQLdB();
console.log(Usc.username);
//传入所限制的类 
DbServe.add(Usc);
// 操作数据库的泛型类
var MysqlT = /** @class */ (function () {
    function MysqlT() {
    }
    MysqlT.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlT;
}());
// 给user表增加数据
// 1.定义一个user类和数据库映射
// 
var Tuser = /** @class */ (function () {
    function Tuser() {
    }
    return Tuser;
}());
var nU = new Tuser();
nU.username = '李四';
nU.password = 1223;
// 将user作为泛型类传入
var Tdb = new MysqlT();
Tdb.add(nU);
// 实现接口
var MysqlDbi = /** @class */ (function () {
    function MysqlDbi() {
    }
    MysqlDbi.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MysqlDbi.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbi.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbi.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDbi;
}());
//操作用户表,定义user类做映射
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    return UserClass;
}());
var newUsers = new UserClass();
newUsers.username = '王五';
newUsers.password = 'wewe';
var newMysqldb = new MysqlDbi();
newMysqldb.add(newUsers);
// 关于模块
//内部模块成为命名空间
// 外部模块成为模块
