# DOM 文档对象模型
>DOM 是 Document Object Model（文档对象模型）的缩写。
>是用来呈现以及与任意 HTML 或 XML 交互的API文档。DOM 是载入到浏览器中的文档模型，它用节点树的形式来表现文档，每个节点代表文档的构成部分


# DOM属性和方法

## 属性
| 属性 | 描述 |
| ---- | ---- |
| URL | 网站的url (只读) |
| charset | 查看字符集 (只读) |
| title | 文档的标题 (读写) |
| forms | 文档中所有的form表单元素  |
| imgages | 文档中所有的img元素 |
| body | 获取body标签 |
| documentElement | 获取html标签 |
| cookie | 当前页面Cookie值的情况，它的值是一个字符串。 |
| fileSize | 文件大小 (只读) |


## 方法
1. document.write()   动态向页面写入内容         

### 获取元素
1. 通过标签名获取元素   (结果是**数组**)         
```js
document.getElementsByTagName()
```

2. 通过类名获取元素  (结果是**数组**)     //ie6-8不支持
```js
document.getElementsByClassName()
```

3. 通过id获取元素  (结果是DOM元素)
只能获取第一个拥有该id的元素    
在IE6、7中会把表单元素的name当做ID值获取到。
```js
document.getElementById()        
```

4. 通过name属性获取元素 (结果是**数组**)    
在IE浏览器中只能获取到表单元素，一般也只用它获取表单元素，从ie10开始可以不只是表单元素。
```js
document.getElementsByName()              
```

5. 通过css选择器获取元素         //不兼容IE7以及以下版本
    1. 获取单个元素 (结果是一个DOM元素)
    ```js
    document.querySelector("css选择器")
    ```
    2. 获取多个元素 (结果是 **数组**)
    ```js
    document.querySelectorAll("css选择器")
    ```

>注意事项：获取元素的时候，document可以写成其他的标签，这样表示从这个标签内部来进行元素的筛选获取

### 修改元素的内容
1. 标签.innerHTML

> 既能访问，又能修改
> 可以识别标签，用来给元素内添加子标签很方便

```js
标签.innerHTML = "内容"
```

2. 标签.innerText

> 既能访问，又能修改
> 输出纯文本，无法识别标签

```js
标签.innerText = "内容"
```

3. textContent

> 输出纯文本
> 保留文本格式

```js
标签.textContent = "内容"
```

### 修改样式
#### 修改类名、id
1. className 属性

> 访问、修改元素的类名

```
元素.className = "类名"
```

2. classList  属性    (ie9及以下不能用)
    * add(类名1,类名2)    不修改原类名，添加新类名，可同时添加多个
    * remove(类名1,类名2)  删除某一类名
    * contains(类名)      判断一个类名是否存在
    * toggle(类名1,类名2)     如果类名已存在，则删除；如果类名没有，则添加
    ```js
    元素.classList.add("类名")
    元素.classList.remove("类名")
    ```
    > 注： ie11及以下都不支持add、remove、toggle的多个参数

#### 修改行内样式
> 当样式名作为对象的属性名时，样式名需要使用**驼峰命名法**，因为对象的属性名不能包含`-`    fontSize

```js
标签.style.样式名 = "样式值"       // 不会覆盖原样式

// 所有行内样式组成的字符串
// 等价于重写行内样式 (不需要驼峰命名法)
// 原本行内样式会被覆盖
标签.style.cssText = ""      

// 原本行内样式 不会 覆盖
标签.style.cssText += ""      
```

### 操作属性
#### 原生属性
> html标签自带的属性

```js
标签.属性名 = "属性值"
标签.className = "类名"
```

例如：
```js
div.id = "box"
input.name = "age"
```

#### 自定义属性
* 设置属性  setAttribute()
* 获取属性  getAttribute()
* 移除属性  removeAttribute()

```js
标签.setAttribute(属性名,属性值)
标签.getAttribute(属性名)
标签.removeAttribute(属性名)
```

>往HTML标签上添加自定义属性来存储和操作数据,例如我们把图片的地址存放到自定义属性上，需要加载时再把属性值赋给img的src属性，等等操作
