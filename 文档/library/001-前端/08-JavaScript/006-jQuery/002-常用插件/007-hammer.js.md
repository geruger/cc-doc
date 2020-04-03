# hammer.js
> 是一个多点触摸手势库，实际上是对touchstart touchmove和touchend进行了封装，能够为网页加入Tap、Double Tap、Swipe、Hold、Pinch等多点触摸事件，免去自己监听底层touchstart、touchmove、touchend事件并且写一大堆判断逻辑的痛苦。

* [官方网站](http://hammerjs.github.io/)

## 使用方法
### 1. 引入需要的文件
```html
<script src="https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js"></script>
```
### 2. 原生js中使用
HammerJS的使用方式非常简单，只要将库引入到文件中，并创建一个新的实例即可：
```js
var hammertime = new Hammer( document.querySelector('tag') );

hammertime.on('tap'，function(e){ 
  console.log(e); 
})
```

它会默认为这个对象添加一系列事件，包括点击、双击、长按、平移、快速滑动等操作：

| 点击操作 | 功能 |
|:----:|:----:|
| tap | 单击 |
| doubletap | 双击 | 
| press | 长按251ms触发 |
| pressup | 长按抬起时触发 |

| 滑动操作 | 功能 |
|:----:|:----:|
| swipe | 快速滑动 |
| swipeleft | 快速向左滑动 |
| swiperight | 快速向右滑动 |
| swipeup | 快速向上滑动 （默认不识别垂直手势） |
| swipedown | 快速向下滑动 （默认不识别垂直手势） |
| pan | 平移 |
| panstart | 平移开始 |
| panmove | 平移移动过程中 |
| panend | 平移结束 |
| panleft | 向左平移 |
| panright | 向右平移 |
| panup | 向上平移 （默认不识别垂直手势）|
| pandown | 向下平移 （默认不识别垂直手势）|

* 默认情况下禁用垂直方向的`pan` 和 `swipe`，因为会和页面滚动条冲突，若要允许识别器识别垂直方位需声明：
```
hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
```

| 多指缩放操作 | 功能 |
|:----:|:----:|
| pinch | 多点触摸捏放 |
| rotate | 旋转 |

* 默认情况下禁用`pinch`和`rotate`，因为它们可能会导致元素被卡住,通过以下方式可以启用：
```js
hammertime.get('pinch').set({ enable: true });
hammertime.get('rotate').set({ enable: true });
```

#### 事件对象
每一个Hammer触发的事件都会收到一个包含了如下属性的事件对象：

| name | value |
|:----:|:----:|
| **type** | 事件名称，如`swipe` |
| **deltaX** | X坐标轴上的移动距离 |
| **deltaY** | Y坐标轴上的移动距离 |
| deltaTime | 交互过程的总时长( 毫秒) |
| **distance** | 移动距离 |
| **angle** | 移动角度 |
| velocityX | 在X坐标轴上的移动速率，单位为`px/ms` |
| velocityY | 在Y坐标轴上的移动速率，单位为`px/ms` |
| velocity | X/Y轴上最高的速率值 |
| direction | 移动方向 |
| scale  | 多点触摸结束时的缩放比例，若为单点触摸则为1|
| rotation | 多点触摸结束时的旋转数值，若为单点触摸则为0 |
| center | 多点触摸的中心位置，或者单点的坐标 |
| target | 事件的目标 |





## jquery.hammer.js —— jQuery插件形式使用hammerjs
[文档及下载地址](https://github.com/hammerjs/jquery.hammer.js)

```html
<script src = "http://eightmedia.github.com/hammer.js/jquery.hammer.js" > </script>
```
```Javascript
$("#element").hammer().bind("tap",function(e){
      console.log(e);
  });
```  
事件、事件对象等与`hammerjs`用法相同，




## 案例：
[移动端轮播图](example/banner-with-hammer/index.html)
