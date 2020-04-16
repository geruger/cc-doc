# jquery.lazyload.js
> Lazy Load 是一款基于 jQuery 的图片延迟加载插件，它可以让浏览器可视区域外的图片不加载，当滚动到它们的位置时才加载。延迟加载可以使页面加载更快，减少服务器的负担，甚至是节约带宽。

 * [下载地址](http://www.jq22.com/jquery-info390)
## 使用方法
### 1. 引入所需要的文件
```html
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/jquery_lazyload/1.9.7/jquery.lazyload.min.js"></script>
```   
### 2. 在html中对于img做对应的处理
为图片加入样式类名`lazy`  图片路径引用方法用`data-original`

```html
<img class="lazy" data-original="demo.jpg"  />
```  
### 3. 在js中lazyload配置
```javascript
   $("img.lazy").lazyload({effect: "fadeIn"});
```  

* `lazyload()`参数设置:

|参数|含义|
|:----:|:----:|
|placeholder:"img/grey.gif"|用图片提前占位|
|effect|载入使用何种效果值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn|
|threshold: 200|代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉|
|event: 'click'|值有click(点击),mouseover(鼠标划过)可以实现鼠标莫过或点击图片才开始加载|
|container|值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片|
| failurelimit : 10 |值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题|
