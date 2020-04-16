# LESS

## 原理及使用方式
>本质上，LESS 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。LESS 并没有裁剪 CSS 原有的特性，更不是用来取代 CSS 的，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性。

## 安装

### 服务器端使用

#### 安装步骤

  1. 在服务器端最容易的安装方式就是通过 npm （node.js 的包管理器），方法如下：
  ```
  $ npm install -g less
  ```
  2. 安装 Less 后，就可以在命令行上调用 Less 编译器了，如下：
  ```
  $ lessc styles.less
  ```
  3. 这将输出编译之后的 CSS 代码到 stdout，你可以将输出重定向到一个文件：
  ```
  $ lessc styles.less > styles.css
  ```
  4. 若要输出压缩过的 CSS，只需添加 -x 选项
  5. 如果你想下载最新稳定版本的 LESS，可以尝试像下面这样操作:
  ```
  $ npm install less@latest
  ```

### 客户端使用

#### 使用步骤

  1. 在页面中加入 .less 样式表的链接，并将 rel 属性设置为 "stylesheet/less"：
  ```html
  <link rel="stylesheet/less" type="text/css" href="styles.less" />
  ```

  2. 接下来，下载 less.js 并通过 <script></script> 标签将其引入，放置于页面的 <head> 元素内：
  ```html
  <script src="less.js" type="text/javascript"></script>
  ```

  3. 注意你的less样式文件一定要在引入less.js前先引入。
