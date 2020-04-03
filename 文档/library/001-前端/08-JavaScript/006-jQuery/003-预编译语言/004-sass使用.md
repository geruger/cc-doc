# sass
## 使用
sass的使用与less的使用很相似
### 变量
sass使用$符号来标识变量,变量可以在css规则块定义之外存在。当变量定义在css规则块内，那么该变量只能在此规则块内使用。
```scss
/* 编译前 */
$b-color:#451aaa;
.box{
  $b-width:100px;
  width:$b-width;
  color:$b-color;
}
/* .box1{
  width:$b-width;
}    会报错，不能编译 */

/* 编译后 */
.box {
  width: 100px;
  color: #451aaa;
}
```

#### 数据类型
支持6种主要的数据类型：
* 数字，1, 2, 13, 10px
* 字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
* 颜色，blue, #04a3f9, rgba(255,0,0,0.5)
* 布尔型，true, false
* 空值，null
* 数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
* maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)

### 嵌套CSS 规则
在css中，我们需要重复写选择器，在sass中可以只写一遍，sass在输出css时会把这些嵌套规则处理好，避免重复书写。       
```scss
/* 编译前 */
$b-color:#451aaa;
.box{
  $b-width:100px;
  width:$b-width;
  color:$b-color;
  p{
    font-size: 18px;
    .box1{border:1px solid #ddd}
  }
  a{font-size: 19px}
}
/* 编译后 */
.box {
  width: 100px;
  color: #451aaa;
}
.box p {
  font-size: 18px;
}
.box p .box1 {
  border: 1px solid #ddd;
}
```
#### 父选择器的标识符&
用法与less中一样，这里就不再赘述，直接上例子
```scss
/* 编译前 */
article a {
  color: blue;
  &:hover { color: red }
}
/* 编译后 */
article a {
  color: blue;
}
article a:hover {
  color: red;
}
```
#### 嵌套属性
嵌套属性的规则：把属性名从中划线-的地方断开，在根属性后边添加一个冒号:，紧跟一个{ }块，把子属性部分写在这个{ }块中。         
```scss
/* 编译前 */
.box {
  border: {
  style: solid;
  width: 1px;
  color: #ddd;
  }
}
/* 编译后 */
.box {
  border-style: solid;
  border-width: 1px;
  border-color: #ddd;
}
```
```scss
/* 编译前 */
.box {
  border: 1px solid #ccc {
    left: 0px;
    right: 0px;
  }
}
/* 编译后 */
.box {
  border: 1px solid #ccc;
  border-left: 0px;
  border-right: 0px;
}
```

### 导入SASS文件
css中的`@import`允许在一个css文件中导入其他css文件，后果是只有执行到@import时，浏览器才会去下载其他css文件，这导致页面加载起来特别慢。                      
sass中的`@import`在生成css文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求。

- 如果需要导入 SCSS 或者 Sass 文件，但又不希望将其编译为 CSS，只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线。
将文件命名为 `_colors.scss`，便不会编译 `_colours.css` 文件。
```scss
@import "colors";
/* 导入的其实是 _colors.scss 文件 */
```
>不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略。


#### 默认变量值`!default`
`!default`用于变量，含义是：如果这个变量被声明赋值了，那就用它声明的值，否则就用这个默认值。      
```scss
$b-width: 400px !default;
.box {
  width: $b-width;
}
```
如果导入文件对$b-width进行了赋值，则400px的赋值是无效的，没有的话则$b-width被赋值为400px
#### 嵌套导入
sass允许@import命令写在css规则内。这种导入方式下，生成对应的css文件时，局部文件会被直接插入到css规则内导入它的地方。   
```scss
/* test1.scss文件的内容 */
p{
  color:red;
  a{
    color:yellow;
  }
}
/* test.scss文件的内容 */
.box{
  @import "test1.scss"
}
/* 编译test.scss文件后生成 */
.box{
  p{
    color:red;
    a{
      color:yellow;
    }
  }
}
```

#### 插值语句`#{}`
通过 `#{}` 插值语句可以在选择器或属性名中使用变量
```scss
/* 编译前 */
$b:100px;
.box#{$b}{
  height: $b;
}
/* 编译后 */
.box100px {
  height: 100px;
}
```

### 静默注释
sass另外提供了一种不同于css标准注释格式`/* ... */`的注释语法，即静默注释，其内容不会出现在生成的css文件中。静默注释的语法跟JavaScriptJava等类C的语言中单行注释的语法相同，它们以//开头，注释内容直到行末。

### 混合器
混合器使用@mixin标识符定义,这个标识符给一大段样式赋予一个名字，这样就可以通过引用这个名字重用这段样式。                     
然后就可以在样式表中通过@include来使用这个混合器，放在任何地方。@include调用会把混合器中的所有样式提取出来放在@include被调用的地方。
```scss
/* 编译前 */
@mixin rounded-box{
  border-radius: 5px;
  background: blue;
  font-size: 20px;
  a{
    font-weight: 800;
    font-size: 21px;
    margin-left: 0px;
  }
}
.box{
  border:1px solid #aaa;
  @include rounded-box;
}
/* 编译后 */
.box {
  border: 1px solid #aaa;
  border-radius: 5px;
  background: blue;
  font-size: 20px;
}
.box a {
  font-weight: 800;
  font-size: 21px;
  margin-left: 0px;
}
```


#### 给混合器传参
混合器并不一定总得生成相同的样式。可以通过在@include混合器时给混合器传参，来定制混合器生成的精确样式。当@include混合器时，参数其实就是可以赋值给css属性值的变量。跟JavaScript的function很像。                     
```scss
/* 编译前 */
@mixin rounded-box($a,$b,$c){
  border-radius: $a;
  background: blue;
  font-size: $b;
  a{
    font-weight: 800;
    font-size: $c;
    margin-left: 0px;
  }
}
.box{
  border:1px solid #aaa;
  @include rounded-box(5px,20px,21px);
}
/* 编译后 */
.box {
  border: 1px solid #aaa;
  border-radius: 5px;
  background: blue;
  font-size: 20px;
}
.box a {
  font-weight: 800;
  font-size: 21px;
  margin-left: 0px;
}
```
##### 默认参数值
可以给参数指定一个默认值。参数默认值使用$name: value的声明形式，默认值可以是任何有效的css属性值，甚至是其他参数的引用。
```scss
@mixin rounded-box($a:18px,$b:20px,$c:$a){
  border-radius: $a;
  background: blue;
  font-size: $b;
  a{
    font-weight: 800;
    font-size: $c;
    margin-left: 0px;
  }
}
.box{
  border:1px solid #aaa;
  @include rounded-box;
}
```

### 使用选择器继承
选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。这个通过`@extend`语法实现         
```scss
/* 编译前 */
.box{
  width:200px;
  height:200px;
  background:red;
  a{color:blue}
}
.footer{
  @extend .box;
  border:1px solid #999;
}
/* 编译后 */
.box, .footer {
  width: 200px;
  height: 200px;
  background: red;
}
.box a, .footer a {
  color: blue;
}
.footer {
  border: 1px solid #999;
}
```
* 跟混合器相比，继承生成的css代码相对更少。因为继承仅仅是重复选择器，而不会重复属性，所以使用继承往往比混合器生成的css体积更小。
* 继承遵从css层叠的规则。当两个不同的css规则应用到同一个html元素上时，并且这两个不同的css规则对同一属性的修饰存在不同的值，通常权重更高的选择器胜出，如果权重相同，定义在后边的规则胜出。

### 计算功能
#### 数字计算
sass变量的计算能力 (+, -, 乘, /, %)
```scss
/* 编译前 */
$a:200px;
.box{
  width:$a+200*2;
}
/* 编译后 */
.box {
  width: 600px;
}
```
`/` 在 CSS 中通常起到分隔数字的用途，scss 作为 CSS 语言的拓展也支持这个功能，同时也赋予了 `/` 除法运算的功能。也就是说，如果 `/` 在 SassScript 中把两个数字分隔，编译后的 CSS 文件中也是同样的作用。                 

以下三种情况 / 将被视为除法运算符号
1. 如果值，或值的一部分，是变量或者函数的返回值
2. 如果值被圆括号包裹
3. 如果值是算数表达式的一部分  

如果需要使用变量，同时又要确保 / 不做除法运算而是完整地编译到 CSS 文件中，只需要用 #{} 插值语句将变量包裹。    
```scss
/* 编译前 */
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
/* 编译后 */
p {font: 12px/30px; }
```
#### 字符串运算
+ 可用于连接字符串           
有引号字符串（位于 + 左侧）连接无引号字符串，运算结果是有引号的，相反，无引号字符串（位于 + 左侧）连接有引号字符串，运算结果则没有引号。
```scss
/* 编译前 */
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}
/* 编译后 */
p:before {
  content: "Foo Bar";
  font-family: sans-serif;
}
```
#### 圆括号
圆括号可以用来影响运算的顺序

### 控制指令
scss提供了一些基础的控制指令，比如在满足一定条件时引用样式，或者设定范围重复输出格式。控制指令是一种高级功能。
#### @if、@else、@else if
`@if` 声明后面可以跟多个 `@else if` 声明，或者一个 `@else` 声明。如果 `@if` 声明失败，Sass 将逐条执行 `@else if` 声明，如果全部失败，最后执行 `@else` 声明
```scss
/* 编译前 */
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}
/* 编译后 */
p {
  color: green;
}
```
#### @for、
`@for` 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。这个指令包含两种格式：`@for $var from <start> through <end>`，或者 `@for $var from <start> to <end>`，区别在于 through 与 to 的含义：当使用 through 时，条件范围包含 `<start>` 与 `<end>` 的值，而使用 to 时条件范围只包含 `<start>` 的值不包含 `<end>` 的值。`<start>` 和 `<end>` 必须是整数值。                 
```scss
/* 编译前 */
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
/* 编译后 */
.item-1 {
  width: 2em;
}
.item-2 {
  width: 4em;
}
.item-3 {
  width: 6em;
}
```
#### @each，与@for相似，@for用来遍历数字，@each用来遍历数组类型的值
`@each` 指令的格式是`@each $var in <list>`  `<list>` 是一连串的值，也就是值列表。               
`@each` 将变量 $var 作用于值列表中的每一个项目，然后输出结果    
```scss
/* 编译前 */
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
/* 编译后 */
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```
#### `@while`
`@while` 指令重复输出格式直到表达式返回结果为 false。这样可以实现比 `@for` 更复杂的循环       
```scss
/* 编译前 */
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
/* 编译后 */
.item-6 {
  width: 12em; }
.item-4 {
  width: 8em; }
.item-2 {
  width: 4em; }
```

### 函数指令
Sass 支持自定义函数，格式为`@function name($a){@return} `                   
与 mixin 相同，也可以传递若干个全局变量给函数作为参数。一个函数可以含有多条语句，需要调用 `@return` 输出结果。
```scss
/* 编译前 */
$a:55px;
$b:100px;
@function fun($c){
  @return $a*$c;
}
.box{
  width:fun(2);
  height: $b;
}
/* 编译后 */
.box {
  width: 110px;
  height: 100px;
}
```
