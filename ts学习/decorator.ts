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

// 装饰器函数

function logClass(params:any){
    console.log(params);
    // 
}

@logClass   
class HttpClient {
    constructor(){

    }
    getData():string{
        return ''
    }
}


