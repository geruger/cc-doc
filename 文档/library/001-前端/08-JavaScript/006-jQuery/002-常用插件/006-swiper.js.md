#  jquery.swiper.js
> Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端。Swiper能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果。Swiper开源、免费、稳定、使用简单、功能强大，是架构移动终端网站的重要选择！

* [swiper中文官网](http://www.swiper.com.cn/)

|swiper版本|兼容性|
|---|---|
|swiper4.x|移动端浏览器、部分PC端浏览器、IE10+|
|swiper3.x|移动端浏览器、部分PC端浏览器|
|swiper2.x|PC端浏览器，IE7+，部分移动端浏览器，支持IE7需引入JQuery|


## 使用方法
### 1. 引入文件
```html
<link href="https://cdn.bootcss.com/Swiper/4.4.6/css/swiper.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/Swiper/4.4.6/js/swiper.min.js"></script>
```
### 2. html部分布局
```html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
导航等组件可以放在container之外
```  
### 3. 设置Swiper大小 (可选)
控制swiper大小可通过`swiper-container`容器
```css
.swiper-container {
    width: 600px;
    height: 300px;
}  
```

### 4. js初始化Swiper
初始化Swiper必须放到页面加载完成之后， 例如放到`<body>`末尾，或者`window.onload`事件中，或者jQuery`$(document).ready()`方法中，否则无法获取到元素。

```javascript
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })          
```

**注意：**当页面中有多个swiper轮播时，需要用不同类名或id进行区分，否则会发生冲突，但必须要保留默认的类名`swiper-container`。
```html
<!-- 轮播1 -->
<div class="swiper-container" id="mySwiper1"></div>
<!-- 轮播2 -->
<div class="swiper-container" id="mySwiper2"></div>

<script>
  var swiper1 = new Swiper ('#mySwiper1', {})
  var swiper2 = new Swiper ('#mySwiper2', {})
</script>
```

#### 常用配置项

[官方完整配置选项](https://www.swiper.com.cn/api/start/new.html)

| 常用配置 | 类型 | 默认值 | 功能 |
|:----:|:----:|:----:|:----:|
| initialSlide | number | `0` | 初始化时默认选中的slide的索引 |
| direction | string | `horizontal` | 设置轮播的滑动方向，水平(`horizontal`)或垂直(`vertical`) |
| speed | number | `200` | 切换速度，即slider自动滑动开始到结束的时间，单位ms |
| width / height | number | `500` | 强制设置Swiper的宽高(px)，当Swiper在隐藏状态下初始化时可以使用。这个参数会使自适应失效 |
| autoHeight | boolean | `false` | 自动高度。设置为`true`时，wrapper和container会随着当前slide的高度而发生动态变化 |
| uniqueNavElements | boolean | `true` | 独立分页元素。设置为`true`时，只有swiper内部的分页器生效 |
| centeredSlides | boolean | `false` | slide位置。设定为true时，active slide会居中，而不是默认状态下的居左 |
| slidesPerView | number  | `1` | slide宽度。设置slider容器能够同时显示的slides数量 |
| slidesPerGroup | number  | `1` | 定义slides的数量多少为一组，即一次切换多少个slides |
| spaceBetween | number  | `0` | 在slide之间设置距离（单位px） |
| loop | boolean  | `false` | swiper循环切换 |
| autoplay | object/boolean  | `false` | 设置为`true`启动自动切换，并使用默认的切换设置 |


| effect | string  | `slide` | 切换效果。可设置为`slide`（普通切换）,`fade`（淡入）`cube`（方块）`coverflow`（3d流）`flip`（3d翻转） |
| effect | string  | `slide` | 切换效果。可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转） |

