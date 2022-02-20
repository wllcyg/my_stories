// 装饰器
/***
 * 特殊类型的声明,能够被附加到类声明,方法属性或参数上面,可以修改类的行为
 *
 * 装饰器就是方法;可以注入到类,方法,属性参数上面扩展类属性,方法,参数饿功能
 *
 * 常见装饰器:类装饰器,属性装饰器,方法装饰器,参数装饰器
 *
 * 普通装饰器,装饰器工厂(可传参)
 *
 *
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器函数
function logClass(params) {
    console.log(params);
    // 
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        return '';
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
