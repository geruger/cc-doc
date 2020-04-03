# Emmet插件
Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具。


## 快速编写HTML代码
### 初始化页面结构
HTML文档需要包含一些固定的标签，比如`<html>`、`<head>`、`<body>`等，现在你只需要1秒钟就可以输入这些标签。

比如输入“!”或“html:5”，然后按Tab键：

![初始化](amWiki/images/init.gif)

- html:5 或!：用于HTML5文档类型
- html:xt：用于XHTML过渡文档类型
- html:xxs：用于XHTML严格文档类型
- html:4s：用于HTML4严格文档类型

### 添加类、id、文本和属性
连续输入元素名称和ID 并按下Tab，Emmet会自动为你补全，比如输入p#foo：
![添加类id文本属性](amWiki/images/attr.gif)
#### 添加类
```
p.box

按下Tab

<p class="box"></p>
```
#### 添加id
```
p#boxmmm

按下Tab

<p id="box"></p>
```
#### 添加文本
```
p{hello}

按下Tab

<p>hello</p>
```


#### 添加属性
##### 属性结合内容
```
a[href=http://www.baidu.com]{百度一下}

按下Tab

<a href="http://www.baidu.com">百度一下</a>
```

##### 多个属性
```
input[type=search][placehodler=搜索内容]

按下Tab

<input type="search" placehodler="搜索内容">
```
#### 结合使用
```
div#box.container[title=容器标签]{你好}

按下Tab

<div id="box" class="container" title="容器标签">你好</div>
```

### 嵌套
现在你只需要1行代码就可以实现标签的嵌套。

- \>：子元素符号，表示嵌套的元素
- +：同级标签符号
- ^：可以使该符号前的标签提升一行

![嵌套](amWiki/images/qiantao.gif)

#### 嵌套
```
p>span

按下Tab

<p><span></span></p>
```

#### 同级
```
h1+h2

按下Tab

<h1></h1>
<h2></h2>
```
### 提升一行
```
p>span^div

按下Tab

<p><span></span></p>
<div></div>
```

### 分组
你可以通过嵌套和括号来快速生成一些代码块，比如输入(.foo>h1)+(.bar>h2)，会自动生成如下代码：

![分组](amWiki/images/group.gif)

```
(.foo>h1)+(.bar>h2)

按下Tab

<div class="foo">
	<h1></h1>
</div>
<div class="bar">
	<h2></h2>
</div>
```

### 隐式标签

声明一个带类的标签，只需输入div.item，就会生成`<div class="item"></div>`

在过去版本中，可以省略掉div，即输入.item即可生成`<div class="item"></div>`。现在如果只输入.item，则Emmet会根据父标签进行判定。比如在`<ul>`中输入.item，就会生成`<li class="item"></li>`。

![隐式标签](amWiki/images/tag.gif)

下面是所有的隐式标签名称：

- li：用于ul和ol中
- tr：用于table、tbody、thead和tfoot中
- td：用于tr中
- option：用于select中


### 定义多个元素
要定义多个元素，可以使用*符号。比如，ul>li*3可以生成如下代码：

![多个标签](amWiki/images/tags.gif)

```
ul>li*3

按下Tab

<ul>
	<li></li>
	<li></li>
	<li></li>
</ul>
```
### 定义多个带属性的元素

```
ul>li.item$*3{列表$}

按下Tab

<ul>
	<li class="item1">列表1</li>
	<li class="item2">列表2</li>
	<li class="item3">列表3</li>
</ul>
```
![多个标签属性](amWiki/images/tagsattrs.gif)
## 快速编写CSS代码
### 值

比如要定义元素的宽度，只需输入w100，即可生成
```
w100

按下Tab

width: 100px;  
```
![值](amWiki/images/cssval.gif)

除了px，也可以生成其他单位，比如输入h10p+m5e，结果如下：
```
h10p+m5e

按下Tab

height: 10%;  
margin: 5em;  
```

单位别名列表：
- p 表示%
- e 表示 em
- r 表示 rem

### 附加属性

可能你之前已经了解了一些缩写，比如 @f，可以生成：
```
@f

按下Tab

@font-face {  
  font-family:;  
  src:url();  
}  
```
![@f](amWiki/images/@f.gif)

一些其他的属性，比如background-image、border-radius、font、@font-face,text-outline、text-shadow等额外的选项，可以通过“+”符号来生成，比如输入@f+，将生成：

```
@f+

按下Tab

@font-face {
	font-family: 'FontName';
	src: url('FileName.eot');
	src: url('FileName.eot?#iefix') format('embedded-opentype'),
		 url('FileName.woff') format('woff'),
		 url('FileName.ttf') format('truetype'),
		 url('FileName.svg#FontName') format('svg');
	font-style: normal;
	font-weight: normal;
}
```

```
bg+  background: #fff url() 0 0 no-repeat;

br+ border-right: 1px solid #000;

f+ font: 1em Arial,sans-serif;

to+ text-outline: 0 0 #000;
```

### 模糊匹配

如果有些缩写你拿不准，Emmet会根据你的输入内容匹配最接近的语法，比如输入ov:h、ov-h、ovh和oh，生成的代码是相同的：
```
ovh

按下Tab

overflow: hidden;
```
![模糊匹配](amWiki/images/ovh.gif)


### 浏览器前缀
如果输入非W3C标准的CSS属性，Emmet会自动加上浏览器前缀，比如输入trs，则会生成：

```
trs

按下Tab

-webkit-transform: ;  
-moz-transform: ;  
-ms-transform: ;  
-o-transform: ;  
transform: ;
```
![前缀](amWiki/images/qianzhui.gif)


如果不希望加上所有前缀，可以使用缩写来指定，比如-wm-border-radius表示只加上-webkit和-moz前缀：

```
-wm-border-radius

按下Tab

-webkit-border-radius: ;
-moz-border-radius: ;
border-radius: ;
```

前缀缩写如下：

- w 表示 -webkit-
- m 表示 -moz-
- s 表示 -ms-
- o 表示 -o-
