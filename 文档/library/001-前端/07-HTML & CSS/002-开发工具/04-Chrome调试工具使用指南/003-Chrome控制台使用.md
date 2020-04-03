# Console    控制台
打开chrome浏览器，按f12，选择`Console`就可以轻松的打开控制台。

> 在界面重构阶段， console 主要用来查看网页报错，如css、图片路径错误时会将错误信息输出到控制台

##　js代码编写
控制台主要是显示JS文件里面打印的日志信息(console对象)。你也可以直接在里面写javascript，查看或修改当前作用域的变量信息。  
如果是当前作用域内的对象（包含全局对象）的话，console还会自动帮你补全，有时候我忘记某个对象有什么方法，可以会用这个来看。

<img src="amWiki/images/chrome_console.png"/>

如果想清空控制台，可以点击左上角那个<img src="amWiki/images/chrome_clear.png" style="vertical-align: middle;"/>来清空。


## console对象
可以通过输出`console`查看Console对象上的方法：

<img src="amWiki/images/chrome_console2.png"/>

### 常用输出
| 语法 | 含义 |
|----|----|
| console.log | 普通信息 |
| console.error | 错误信息 |
| console.warn | 警示信息 |
| console.table | 以表格的形式将数据输出 |
| console.dir | 将DOM结点以对象的形式输出到控制台 |
