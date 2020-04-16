
# console对象
`Console` 对象是 `windows`子对象，提供了对浏览器控制台的接入，可以在任何全局对象中访问，被浏览器定义为 `Window.console`，也可被简单的 `console` 调用。


## console对象方法

| 属性 | 参数 | 返回值 | 功能 | 兼容性|
---|---|---|---|---
log | msg | undefined | 向 Web 控制台输出一条消息 | 全部
dir | object | undefined | 打印出对象的所有属性和属性值 | >ie8
error | msg | undefined | 向 Web 控制台输出一条错误消息 | >ie7
warn | msg | undefined | 向 Web 控制台输出一条警告信息 | >ie7
time | timerName | undefined | 启动一个计时器（timer）来跟踪某一个操作的占用时长 | >ie10
timeEnd | timerName | undefined | 停止一个通过 `console.time()` 启动的计时器 | >ie10


### 利用`console.time()` 进行js运行速度测试
`consoel.time()`和`console.timeEnd()`这两个方法可以用来让WEB开发人员测量一个javascript脚本程序执行消耗的时间。

`console.time`方法是开始计算时间，`console.timeEnd`是停止计时，输出脚本执行的时间:
```js
// 启动计时器
console.time('testForEach');
// (测试用代码)
// 停止计时，输出时间
console.timeEnd('testForEach');

// testForEach 4522.303ms
```

#### 参数
这两个方法中都可以传入一个参数，作为计时器的名称，它的作用是在代码并行运行时分清楚各个计时器。所以**两个方法的参数必须相同**。

对`console.timeEnd`的调用会立即输出执行总共消耗的时间，单位是毫秒

测试ajax请求所需时间：
```js
console.time("ajax请求时间")
$.ajax({
  url:"https://zhihu-daily.leanapp.cn/api/v1/last-stories",
  success(res){
    console.timeEnd("ajax请求时间")
  }
})
//  ajax请求时间: 189.089111328125ms
```




