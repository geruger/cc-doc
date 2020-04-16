# JavaScript 对象的分类
1. 内置对象：ECMAScript内置的对象，直接拿来用就可以，不需要实例化
    * 内置顶层对象(global): Math;
2. 本地对象:需要实例化才能用
    * String;
    * Boolean;
    * Number;
    * Function;
    * Array;
3. 宿主对象: BOM DOM
    > 宿主：js的执行环境



## Object对象
### Object的属性
1. constructor：是对构造函数的引用。
2. prototype：是对函数对象的原型引用
    * 是函数对象的默认属性。
    * 可以将对象的共有属性存放到原型上，也可以实现继承。

### Object的方法
#### 1. Object.assign(obj1,obj2,obj3,......)
> 可用于对象的拼接，将obj2，obj3......拼接到对象obj1上，并将obj1返回，obj1改变，其他对象不变。

```js
var obj1={name:'张三'};
var obj2={age:18};
var obj3={say:function(){
  console.log('说话');
}}
console.log(Object.assign(obj1,obj2,obj3));    //{name: "张三", age: 18, say: ƒ}
console.log(obj1,obj2);                   // {name: "张三", age: 18, say: ƒ}   {age: 18}
```
* 特殊用法： 对象拷贝：

```js
// 将对象obj拷贝到newObj
var obj = {name: '张三', age: 20};

var newObj = Object.assign({},obj);
```

#### 2. Object.is(a,b);
>用于判断两个值是否相同,与===类似，但又不完全一样

```js
Object.is(+0,-0);               //false
Object.is(NaN,NaN);               //true
```

#### 3. obj.prototype.isPrototypeOf(b);
>确定一个对象是否存在于另一个对象的原型链中

```js
function a(){
}
var b = new a();
console.log(a.prototype.isPrototypeOf(b));      //true
```

#### 4. Object.defineProperty()
>直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。如果不指定configurable, writable, enumerable ，则这些属性默认值为false，如果不指定value, get, set，则这些属性默认值为`undefined`      

语法: `Object.defineProperty(obj, prop, descriptor)`
```js
var obj = new Object();
Object.defineProperty(obj, 'name', {
    configurable: false,
    writable: true,
    enumerable: true,           //该属性是否可枚举
    value: '张三'
})
console.log(obj.name)  //张三
```

#### 5. Object.defineProperties()
>直接在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象。       

语法: `Object.defineProperties(obj, props)`  
props数据描述：  
* value: 属性对应的值,可以使任意类型的值，默认为 **undefined**
* configurable: 是否可以删除目标属性或是否可以再次修改属性的特性（writable, configurable, enumerable）。设置为true可以被删除或可以重新设置特性；设置为false，不能被可以被删除或不可以重新设置特性。默认为**false**。
* writable: 属性的值是否可以被重写。设置为true可以被重写。默认为**false**。
* enumerable: 属性是否可以被枚举(使用for...in或Object.keys())。设置为true可以被枚举。默认为**false**。

```js
var obj = new Object();
Object.defineProperties(obj, {
    name: {
        value: '张三',
        configurable: false,
        writable: true,
        enumerable: true
    },
    age: {
        value: 18,
        configurable: true
    }
})
console.log(obj.name, obj.age) // 张三, 18
```

#### 6. Object.freeze(obj)
> 阻止修改现有属性的特性和值，并阻止添加新属性。 

```js
var obj={name:'张三',age:18};
Object.freeze(obj)
obj.name='李四';
obj.sex='男';
console.log(obj)                //{name: "张三", age: 18}
```

用途：用`const`声明的对象属性方法任然可修改，可以利用这个方法将对象彻底冻结，使其符合const变量的含义
```js
var obj = {
    name:"zhangsan",
    age: 20
Object.freeze(obj)
obj.name = "lisi"
console.log(obj.name)     // "zhangsan"
```

### ES6对象的遍历
#### 1. for in 循环
> 循环遍历对象自身的和继承的可枚举属性(不含Symbol属性).

```js
var obj={
  name:'小米',
  age:18,
  say:function(){
    console.log('你好');
  }
}
for (var i in obj) {
  console.log(obj[i]);
}
```

#### 2. Object.keys(obj)
> 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的`键名`。

```js
var obj = {'a':'123','b':'345'};
console.log(Object.keys(obj));  //['a','b']

// 如果键名是数字，则按从小到大排列
var obj1 = { 100: "a", 2: "b", 7: "c"};
console.log(Object.keys(obj1)); // console: ["2", "7", "100"]
 
var obj2 = Object.create({}, { getFoo : { value : function () { return this.foo } } });
obj2.foo = 1;
console.log(Object.keys(obj2)); // ["foo"]
```

> 由于 `for...in`会遍历出继承的属性，使问题复杂化，大多数时候，我们只关心对象自身的属性。所以，尽量不要用`for...in`循环，而用`Object.keys()`代替。


#### 3. Object.getOwnPropertyNames(obj);
> 返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性).

#### 4. Object.getOwnPropertySymbols(obj);
>返回一个数组，包含对象自身的所有Symbol属性。

#### 5. Reflect.ownKeys(obj);
>返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.  

#### 6. Object.values(obj)
> 方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用`for...in`循环的顺序相同( 区别在于 for-in 循环枚举原型链中的属性 )。

```js
var obj = { name: 'zhangsan', age: 20 };
console.log(Object.values(obj)); // ['zhangsan', 20]
```

