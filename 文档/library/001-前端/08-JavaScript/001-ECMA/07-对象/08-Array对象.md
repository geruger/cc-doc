## 数组方法和属性
### 属性
1. length: 数组中元素的个数
2. constructor: 返回对创建此对象的数组函数的引用（可以用来判断变量是否为数组）

### 方法
1. arr.push(); 向数组的末尾追加元素
    * 会修改原数组
    * 返回值：修改后的length值
    * 可以追加多个
    ```js
    arr[1,2,3];
    arr1[4,5,6];
    arr2[...arr,...arr1];       //  ...扩展运算符，将数组展开
    ```

2. arr.unshift(); 向数组的开头添加函数
    * 会修改原数组
    * 返回值：修改后的length值
    * 可以追加多个

3. arr.pop();   删除末尾的元素
    * 会修改原数组
    * 返回值：被删除的数据
    * 只能删除一个

4. arr.shift();  开头删除一个元素
    * 会修改原数组
    * 返回值：被删除的数据
    * 只能删除一个

5. arr.splice(位置，删除元素的个数，要追加的元素);   任意位置添加删除
    * 添加或者删除包含对应下标
    * 添加数据时：删除元素的个数写0；
    * 可以同时删除和添加（先删除，后添加）
    * 修改原数组

6. arr.join("分隔符") 使用分隔符将数组数据隔开变为字符串
    * 不修改原数组
    * 返回值是分隔好的字符串
7. arr.slice(截取的起始下标,结束下标) 数组的截取
    * 截取时，包含起始下标，不包含结束下标
    * 不修改原数组
    * 返回值是截取到的数组
    * 参数可以是负数，负数表示倒数，只传一个参数表示从起始下标截取到最后
8. arr.concat 多个数组的连接
    * 不修改原数组
    * 返回值是连接之后的新数组       
    ```js
    var arr1=[1,2,3];
    var arr2=[4,5,6];
    console.log(arr1.concat(arr2,[7,8,9]));

    // 控制台输出
    // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ```
9. arr.indexOf(值);   查找某个值在数组中第一次出现的下标
    * 返回值是数据的下标，没有找到则返回-1
    ```js
    var arr=[1,5,6,99,52,663,22,66,552,123,6,622];
    console.log(arr.indexOf(22));    //查找22在arr数组中的位置

    // 控制台输出
    // 6
    ```

10. arr.lastIndexOf(值);   倒叙查找某个值在数组中第一次出现的位置
11. arr.sort()     数组的排序
    * 如果没有参数，则从字符的编码开始按顺序排
    * 如果有参数，这个参数必须是一个函数（回调函数）这个回调函数有两个参数，分别是a，b
    * 修改原数组
    * 返回值是排序之后的数组                
    ```js
    var arr3=[1,5,6,99,52,663,22,66,552,6,622];
    arr3.sort(function(a,b){
    //a-b 正序，
    //b-a 倒序，  
    return a-b;
    })
    console.log(arr3);
    // 控制台输出
    // (11) [1, 5, 6, 6, 22, 52, 66, 99, 552, 622, 663]
    //箭头函数
    arr.sort((a,b)=>a-b)     //正序，
    arr.sort((a,b)=>b-a)     //倒序，
    ```
12. arr.forEach()   遍历数组
    * 接收一个回调函数，回调函数第一个参数是 数组值
    * 第二个参数是 下标
    ```js
    var arr3=[1,5,6,99,52,663,22,66,552,6,622];
    arr3.forEach(function(value,index){
        console.log(index,value)
    })
    // 箭头函数
    arr3.forEach((value,index)=>{console.log(index,value)})
    ```

13. arr.filter()    过滤（根据条件筛选数组元素）
    * 根据回调函数的返回值进行元素筛选
        * 返回值是true，该元素会保留
        * 返回值是false，该元素跳过
    * 不修改原数组
    * 返回值是筛选之后的数组
    ```js
    var arr=[1,5,6,99,52,663,22,66,552,123,6,622];
    var newArr =arr.filter(function(value,index){
    return value>100;       //筛选arr数组中值大于100的元素；
    })
    console.log(newArr);
    // 控制台输出
    // (4) [663, 552, 123, 622]
    ```
    ```js
    var person = [
    {name: "张三",age:20,sex: "男"},
    {name: "李四",age:19,sex: "女"},
    {name: "王五",age:22,sex: "男"},
    {name: "赵六",age:21,sex: "女"}
    ];
    var x =person.filter(function(value,index){
    return value.age>20;           // 筛选出年龄大于20岁的学生
    // return value.sex=="男";     //筛选出男同学
    })
    console.log(x);
    // 箭头函数
    arr.filter((value,index)=>{return 判断条件})
    ```
14. arr.map()   映射 将数组中的所有数据按照条件改变，形成新数组
    * 将回调函数每次的返回值，组成一个新的数组
    * 返回值是映射改变之后的数组
    * 不修改原数组
    ```js
    var arr=[1,5,6,99,52,663,22,66,552,123,6,622];
    // var end=arr3.map(function(value,index){
    // 	return value*2;        //将数组中的所有元素都乘以2返回
    // });
    // 箭头函数
    var end = arr.map((value,index)=>value*2);
    console.log(end);
    ```
15. arr.some()    判断  根据回调函数的判断条件来选择真假
    * 只要有一个回调函数返回值是true，最终some结果是true；
    ```js
    var arr3=[1,5,6,99,52,663,22,66,552,123,6,622];
    var end=arr3.some(function(value,index){
    return value<500;
    });
    console.log(end);     //true
    ```

16. arr.every()    判断   根据回调函数的判断条件来选择真假(与some比较记忆)
    * 只要有一个回调函数返回值是false，最终every结果是false；
    ```js
    var arr3=[1,5,6,99,52,663,22,66,552,123,6,622];
    var end=arr3.every(function(value,index){
    return value<500;
    });
    console.log(end);     //false
    ```

17. arr.reverse() 数组倒序
    * 返回修改后的数组
    * 改变原数组
    ```js
    var arr=[1,5,8,6,9,4,2,3];
    console.log(arr.reverse());     // (8) [3, 2, 4, 9, 6, 8, 5, 1]
    console.log(arr);               // (8) [3, 2, 4, 9, 6, 8, 5, 1]
    ```

18. Array.from
    * `Array.from` 方法用于将两类对象转为真正的数组：类似数组的对象和可遍历的对象（包括 ES6 新增的数据结构 Set 和 Map）
    ```js
    var a={length:2,0:'aaa',1:'bbb'};  
    Array.from(a);        //['aaa','bbb']
    // 原理：Array.prototype.slice.call(a);
    var b={length:2};  
    Array.from(b);       //[undefined.undefined]
    ```

20. Array.of
    * `Array.of`方法用于将一组值，转换为数组。
    * `Array.of`总是返回参数值组成的数组。如果没有参数，就返回一个空数组。
    ```js
    Array.of() // []
    Array.of(undefined) // [undefined]
    Array.of(1) // [1]
    Array.of(1, 2) // [1, 2]
    ```
18. arr.includes()
    * 用于检查数组是否包含某元素，包含返回true，否则返回false
    * 无法检测对象是否存在
    * 假如只想知道某个值是否在数组中而并不关心它的索引位置，建议使用`includes()`。如果想获取一个值在数组中的位置，那么你只能使用`indexOf`方法。并且`includes()`可以识别NaN
    ```js
    var arr = [1,2,{name:"张三"}]
    arr.includes(2)     // true
    arr.includes(4)     // false
    arr.includes({name:"张三"})     // false
    ```
    * 可接收俩个参数：**要搜索的值,搜索的开始索引**
    ```js
    ['a', 'b', 'c', 'd'].includes('b')         // true
    ['a', 'b', 'c', 'd'].includes('b', 1)      // true
    ['a', 'b', 'c', 'd'].includes('b', 2)      // false
    ```
    * 此方法为 ES7新增，兼容性
    ![arr.includes兼容性](assets/001/07/08-1545037228000.png)




### 数组乱序
> 将数组顺序打乱：例如不重复随机选取数组内容，可将数组打乱后按顺序取出

`arr.sort(()=>Math.random()-0.5)`   数组乱序排列

```js
var arr=[1,2,3,4,5,6,7,8,9];
arr.sort(()=>Math.random()-0.5)
console.log(arr);
```
* 案例： 抽奖，有1等奖一名，2等奖1名，3等奖2名，未中奖5名，要求每次点击抽取一个奖项
