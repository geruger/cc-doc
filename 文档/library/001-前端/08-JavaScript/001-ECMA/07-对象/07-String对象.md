# 字符串(String)
>字符串用于存储和处理文本。字符串对象是用来处理字符串

## 单引号和双引号的区别
1. 代码编译的角度说的话，单引号在JS中被浏览器（IE，Chrome，Safari）编译的速度更快（在FireFox中双引号更快）
2. 双引号会搜索引号内的内容是不是有变量，有则输出其值，没有则输出原有内容。
3. 单引号内的内容会被认定为是纯字符串
4. json格式的文件必须使用双引号
    ```json
    {
        "name": "张三",
        "age": 20
    }
    ```

## 属性
1. length :字符串的长度
    ```js
    var str='hello word';
    console.log(str.length)    //10
    ```
## 方法

1. str.charAt(index);     
    * 功能：返回下标为index的子字符串
    * 参数: 数字下标
    * 返回值: 对应下标字符串
2. str.charCodeAt(index);       
    * 功能: 根据下标，返回对应下标的字符的ACSCII码
    * 参数: 数字下标
    * 返回值: 对应下表字符ACSCII码
3. String.fromCharCode(97);         
    * 功能: 将ACSCII码转化成字符串，涉及到数字与字母之间的转化可以使用该方法
    * 参数: 十进制ACSCII码
    * 返回值: ACSCII码对应字符串
4. str.indexOf('a');       
    * 功能： 查找一个字符或者字符串在字符串中第一次出现的位置,**未找到则返回-1**、
    * 参数： 要查找的字符串
    * 返回值： 目标字符串的下标位置，未找到则未-1
    ```js
    var str='hello world';
    str.indexOf('a');         //-1
    str.indexOf('o');        //4
    ```
5. str.lastIndexOf('a')     
    * 功能： 倒序查找一个字符或者字符串在字符串中第一次出现的位置,返回位置，,**未找到则返回-1**、
    ```js
    var str='hello world';
    str.lastIndexOf('o');      //7
    ```
6. str.replace("替换的内容","替换后的内容")   
    * 功能： 将指定的字符串替换，**只能替换第一个**
    * 参数： 1. 要替换的内容； 2. 替换后的内容 
    * 返回值： 返回替换后的字符串
    * 注意： 不修改原字符串，所以使用时需要将`replace`方法的返回值保存
    ```js
    var str='hello world';
    str.replace('o','a');        //"hella world"
    ```
    > `replace`支持正则查找，str.replace(/正则/,"替换后的内容")  

7. str.slice(起始下标,结束下标)      
    * 功能：字符串截取，识别负数，跟数组相同
    * 参数：1. 截取起始下标； 2. 截取结束下标。参数可以是负数，负数表示倒数，只传一个参数表示从起始下标截取到最后
    * 返回值：返回值是截取到的字符串
    * 注意： 截取时，包含起始下标，不包含结束下标； 不修改原字符串
8. str.substring(起始下标,结束下标)        
    * 功能： 字符串截取，同`slice`方法，但不识别负数
9.  str.substr(起始下标，截取的长度)          
    * 功能：根据长度进行字符串截取
    * 参数： 1. 起始下标； 2. 截取的长度

10. str.split('')     
    * 功能： 以某一字符串将目标字符串分割，可用于将特定格式的字符串转化如`2018/10/20`
    * 参数： 需要分割的字符串
    * 返回值： 原字符串呗参数字符串分割之后的**数组**
    * 注意： 返回值中传入的字符串会被删掉，不修改原字符串
    ```js
    var str='hello world';
    console.log(str.split('o'));   //["hell", " w", "rld"]
    console.log(str.split(''));    //["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
    ```
11. str.toLowerCase()  
    * 将str字符串中的字符转化为小写，不修改原字符串
12. str.toUpperCase()  
    * 将str字符串中的字符转化为大写
13. str.trim()   
    * 将字符串左右空格去除，可用于接收表单数据            IE9以下不识别
    * 返回值： 去掉左右空格之后的字符串
    ```js
    var a='   aa   bb   ';
    a.trim();       //"aa   bb"
    ```
14. str.match()     
    * 在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
    * 参数： 可以是字符串或者正则表达式
    * 返回值：检索到的结果
    ```js
    var str='hello world';
    str.match('o');   //["o", index: 4, input: "hello world", groups: undefined]
    str.match(/o/g);   // (2) ["o", "o"]
    ```
15. str.concat('a','b','c')        
    * 功能： 用于连接两个或多个字符串,与数组中的concat方法很象，不会修改原字符串
    * 参数： 多个字符串
    * 返回值：拼接之后的长字符串
16. str.padStart() 、str.padEnd()        
    * 功能： 向字符串开头(padStart)或结尾(padEnd)添加字符，使字符串达到指定的长度。返回在原字符串开头或末尾填充指定的填充字符串直到目标长度所形成的新字符串
    * 参数1: 当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
    * 参数2: （可选）填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。
    * 注意事项
        * 不写第二个参数填充字符串，则默认用空格填充
        * 填充字符串会自动重复直到达到目标长度
        * 如果原字符串长度已经大于等于目标长度，则直接返回原字符串

    ```js
    'abc'.padStart(10);         // "       abc"
    'abc'.padStart(10, "123");  // "1231231abc"
    'abc'.padStart(6,"123465"); // "123abc"
    'abc'.padStart(8, "0");     // "00000abc"
    'abc'.padStart(1);          // "abc"

    'abc'.padEnd(10);         // "abc       "
    'abc'.padEnd(10, "123");  // "abc1231231"
    'abc'.padEnd(6,"123465"); // "abc123"
    'abc'.padEnd(8, "0");     // "abc00000"
    'abc'.padEnd(1);          // "abc"
    ```
    * 使用场景：得到具有固定长度的数据 （时间、二进制数、十六进制数）
    ```js
    // 获取时间，如果只有一位则前面用0填充
    var time = new Date();
    var h = String(time.getHours()).padStart(2,'0')
    var m = String(time.getMinutes()).padStart(2,'0')
    var s = String(time.getSeconds()).padStart(2,'0')
    console.log(`${h}:${m}:${s}`)    // 18:09:03
    ```

### 字符串与json对象之间的转换
1. JSON.stringify()             将对象转化为字符串
2. JSON.parse()                 将字符串转化为对象
