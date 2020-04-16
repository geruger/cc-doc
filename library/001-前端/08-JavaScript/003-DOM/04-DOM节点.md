# DOM 节点
>在 HTML DOM 中，所有事物都是节点。DOM 是被视为节点树的 HTML。

## 节点的种类
1. 元素节点 (每个 HTML 元素是元素节点)       
2. 属性节点    (每个 HTML 属性是属性节点)
3. 文本节点   (文字、空格、换行)
4. 注释节点   (文档中的注释)
5. 文档节点   (整个文档是一个文档节点)

### 五种节点所对应的信息属性
|节点分类|节点类型(nodeTpe)|节点名称(nodeName)|节点内容(nodeValue)|
|----   |----     |----    |----   |
|元素节点 |1      |标签名    |null  |
|属性节点| 2      |属性名   | 属性值|
|文本节点|  3     | #text  |  文本  |
|注释节点|  8     |#comment |注释的文字   |
|文档节点|    9  |  #documen| null  |

## 节点的属性
1. parentNode    获取父节点
2. childNodes      获取子节点
3. firstChild     第一个子节点
4. lastChild      最后一个子节点
5. nextSibling     下一个兄弟节点
6. previousSibling     上一个兄弟节点

> 上面的6个属性在使用的时候有些情况下我们输出的时候会显示undefined，因为在浏览器解析的时候会把换行和空格一起解析，获取的并没有错误，只是获取的这些节点是一个换行或者是一个空格。所以推荐使用下面的四种方法来获取，它们会只获取元素节点

1. nextElementSibling   下一个元素节点 (标签)
2. previousElementSibling      上一个元素节点 (标签)
3. firstElementChild      第一个元素子节点 (标签)
4. lastElementChild      最后一个元素子节点 (标签)

### 节点练习
编写函数：
* 获取一个元素的所有子元素节点         
* 获取第一个子元素节点         
* 获取最后一个子元素节点   




## 节点的方法
1. document.createElement() 创建一个元素节点
>接收参数为string类型的nodename

2. document.createTextNode() 创建一个文本节点
>接收参数为string类型的text内容

3. document.createAttribute() 创建一个属性节点
>接收参数为string类型的属性名称

4. document.createComment() 创建一个注释节点
>接收参数为string类型的注释文本

5. document.createDocumentFragment() 创建一个虚拟的节点对象
>DocumentFragment节点不属于文档树,当请求把一个DocumentFragment节点插入文档树时，插入的不是DocumentFragment自身，而是它的所有子孙节点。

6. 父元素.insertBefore(要插入的节点, 插入到某个元素之前)
1. 父元素.removeChild(子节点)      删除子节点
2. 父元素.replaceChild(新节点,被修改的节点)            替换节点
3. node.cloneNode(boolean)          克隆节点

### 创建并插入节点流程
1. document.createElement("标签名")    (创建标签)
2. 添加属性： (给创建的标签添加属性，参考DOM属性和方法)
3. 添加内容： (给创建的标签添加内容，参考DOM属性和方法)
4. 添加样式： (给创建的标签添加样式，参考DOM属性和方法)
5. 父元素.appendChild(子节点)
> 被插入的节点，可以是新创建的，也可是页面中已经存在的  

6. 父元素.insertBefore(要插入的节点, 插入到某个元素之前)
1. 父元素.removeChild(子节点)      删除子节点
2. 父元素.replaceChild(新节点,被修改的节点)            替换节点
3. node.cloneNode(boolean)          克隆节点
```html
<div class="box">
  <span>克隆节点</span>
</div>
<script type="text/javascript">
  var box=document.querySelector(".box");
  // 参数为boolean，设置为true则意味着同时克隆该节点的所有子节点
  var newBox=div.cloneNode(true);
</script>
```
