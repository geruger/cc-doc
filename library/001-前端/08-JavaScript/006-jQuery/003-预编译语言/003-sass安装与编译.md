# sass(Syntactically Awesome Stylesheets)
sass是css的一个扩展开发工具，它允许你使用变量、条件语句等，使开发更简单可维护     

## 安装(使用编辑器不需要安装)          
### 安装ruby
因为sass是基于ruby编写的，所以需要安装ruby后才能下载sass，才可以用。              
ruby下载地址： https://rubyinstaller.org/downloads/              
安装时请勾选Add Ruby executables to your PATH这个选项，添加环境变量，不然以后使用编译软件的时候会提示找不到ruby环境                
完成后运行cmd进入命令符，输入ruby -v查看版本号，如果能正确显示版本号，则说明ruby安装成功。    
![ruby -v查看版本号](amWiki/images/ruby.jpg)

### 安装sass
运行cmd进入命令行输入`gem install sass`进行安装

## 编译Sass
Sass文件后缀为 .scss或者.sass，要编译成 .css 文件
### 命令行编译
```
sass test.scss test.css
```
Sass 提供4种编译风格 :                     
    * nested：嵌套缩进的css代码，它是默认值。
    * expanded：没有缩进的、扩展的css代码。
    * compact：简洁格式的css代码。
    * compressed：压缩后的css代码。
```
sass --style compressed test.scss test.css
```
可以监听某个文件或目录，一旦文件发生改变，就自动生成编译后文件          
```
# 单文件监听命令
sass --watch input.scss output.css
# 文件夹监听命令
sass --watch app/sass public/css
```
css文件转成sass/scss文件
```
sass-convert style.css style.scss
```

### node编译
前提是你已经安装了node          
#### Node-SASS安装
全局安装node-sass
```
npm install node-sass -g
```

#### 编译命令
node-sass的编译命令与上面的命令行编译相似，也支持文件夹编译和监听编译
```
node-sass test.scss test.css
```
![node-sass](amWiki/images/node-scss.jpg)



### koala编译
一个优秀的免费编译器，界面清晰简洁，操作起来也非常简单
### 编辑器编译(不需要安装ruby和sass)
现在很多编辑器中都内置了sass编译,例如在vsCode中，商店搜索easysass，然后安装，在编写好sass代码之后，保存，vsCode就会为你自动转化成两个css文件，一个是未压缩，一个是压缩版的。

## scss和sass的区别
SCSS 是 Sass 3 引入新的语法，其语法完全兼容 CSS3，并且继承了 Sass 的强大功能。也就是说，任何标准的 CSS3 样式表都是具有相同语义的有效的 SCSS 文件。另外，SCSS 还能识别大部分 CSS hacks（一些 CSS 小技巧）和特定于浏览器的语法，可以理解scss是sass的一个升级版本，完全兼容sass之前的功能，又有了些新增能力。                            

1. SCSS 需要使用分号和花括号而不是换行和缩进：
```css
/* sass语法 */
#sidebar
  width: 30%
  background-color: #faa
/* scss语法 */
#sidebar {
  width: 30%;
  background-color: #faa;
}
```
scss语法更符合我们写css的规范，更好理解              
2. 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名
3. `@import`SCSS中的指令与Sass中的指令一样，只是它需要引用一个带引号的字符串。

```css
/* sass语法 */
@import themes/dark
@import font.sass
/* scss语法 */
@import "themes/dark";
@import "font.sass";
```
