# zepto.js
> Zepto是一个轻量级的针对现代高级浏览器的JavaScript库， 它与jquery有着类似的api。 如果你会用jquery，那么你也会用zepto。

* [中文官网](https://www.css88.com/doc/zeptojs_api/)

## zepro的使用

### 下载
[zepto.js下载地址](https://www.css88.com/doc/zeptojs_api/#download)

或直接使用CDN：
```html
<script src="https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js"></script>
```
### zepto语法
Zepto有着与 jQuery 类似的API，所以语法与jQuery相同。
```js
$('.btn').on('click',function(){
    $(this).toggleClass('active)
})
```
### 兼容性
* Safari 6+
* Chrome 30+    对谷歌较为友好
* Firefox 24+
* iOS 5+ Safarii  ios的支持版本也比较早
* Android 2.3+ Browser,注意支持Android的版本比较早
* Internet Explorer 10+   对ie不太友好

### zepto与jquery的不同点
* 文件更精简，不在支持ie10以下，移除了很多在移动端不适用的api
* jQuery的底层是通过DOM来实现效果的，zepto.js 是用css3来实现的；
* 增加了对于css3 转换属性的支持
  > 诸如 translateX rotate 都可以在 动画中设置

  ```Javascript
  $("div").animate({rotate:'45deg',translateX:'100px'})
  ```
* 增加了对于移动端事件的支持
  > 增加了 `tap` `singleTap`  `doubleTap` `loneTap` `swipe`  `swipeLeft` `swipeRight` `swipeUp` `swipeDown`的支持，也可以通过`on`的形式添加。

  ```Javascript
  $("div").swipe(function(){
    alert("this is a swipe event")   
  })
  $("div").on('tap',function(){
    alert("this is a tap event")  
  })
  ```
* **zepto默认只带有部分功能，扩展功能需要额外引入模块文件。** 例如`animate()`、`tap`事件、更多选择器等功能。
  * [fx模块下载(支持animate)](example/zepto/fx.js)  
  * [fx_methods模块下载(支持faed等动画)](example/zepto/fx_methods.js)  
  * [selector模块下载(支持实验性的选择器)](example/zepto/selector.js)  
  * [touch模块下载(支持移动端手势tap、swipe等)](example/zepto/touch.js)  

  ![zepto模块](assets/006/002/008-1546584875000.png)
