#  jquery.fullpage.js
>如今我们经常能见到全屏网站，尤其是国外网站。这些网站用几幅很大的图片或色块做背景，再添加一些简单的内容，显得格外的高端大气上档次。

* [文档地址](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/chinese#fullpagejs)

* 特点
    * 支持鼠标滚动
    * 支持前进后退和键盘控制
    * 多个回调函数
    * 支持手机、平板触摸事件
    * 支持 CSS3 动画
    * 支持窗口缩放
    * 窗口缩放时自动调整　
    * 可设置滚动宽度、背景颜色、滚动速度、循环选项、回调、文本对齐方式等等　

* 兼容性

![兼容性](https://camo.githubusercontent.com/1939c9bed726b887a303a6d06de7c9e77fba3a06/68747470733a2f2f7261772e6769746875622e636f6d2f616c7661726f747269676f2f66756c6c506167652e6a732f6d61737465722f6578616d706c65732f696d67732f636f6d70617469626c652e6769663f763d32)

## 使用方法
### 1. 引入需要的文件
```html
<link href="https://cdn.bootcss.com/fullPage.js/3.0.4/fullpage.min.css" rel="stylesheet">

<!-- 以下行是可选的。 只有在使用选项css3:false，并且您希望使用其他缓动效果，而非“linear”、“swing”或“easeInOutCubic”时才有必要。 -->
<script src="https://cdn.bootcss.com/fullPage.js/3.0.4/vendors/easings.min.js"></script>
<!-- 以下行仅在使用选项scrollOverflow:true的情况下是必需的 -->
<script src="https://cdn.bootcss.com/fullPage.js/3.0.4/vendors/scrolloverflow.min.js"></script>

<script src="https://cdn.bootcss.com/fullPage.js/3.0.4/fullpage.min.js"></script>
```     
### 2. html部分布局
```html
<div id="fullpage">
   <div class="section">第一屏</div>
   <div class="section">第二屏</div>
   <div class="section">第三屏</div>
   <div class="section">第四屏</div>
</div>
```
> 每个 `section` 代表一屏，默认显示“第一屏”，如果要指定加载页面时显示的“屏幕”，可以在对应的 section 加上 `class="active"`

### 3. js部分
```javascript
new fullpage('#fullpage', options);
```   
#### `fullpage()` options配置参数

|选项|类型|默认值|说明|
|:----:|:----:|:----:|:----:|
|verticalCentered	|布尔值|true	|内容是否垂直居中|
|resize|布尔值|false|字体是否随着窗口缩放而缩放|
|slidesColor|	函数|	无	|设置背景颜色|
|anchors|	数组	|无	|定义锚链接|
|scrollingSpeed|	整数|	700|	滚动速度，单位为毫秒|
|easing	|字符串|	easeInQuart|	滚动动画方式|
|menu|	布尔值	|false|	绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动|
|navigation|	布尔值|	false	|是否显示项目导航|
|navigationPosition|	字符串	|right|	项目导航的位置，可选 left 或 right|
|navigationColor|	字符串	|#000	|项目导航的颜色|
|navigationTooltips	|数组	|空|	项目导航的 tip|
|slidesNavigation	|布尔值|	false	|是否显示左右滑块的项目导航|
|slidesNavPosition|	字符串	|bottom	|左右滑块的项目导航的位置，可选 top 或 bottom|
|controlArrowColor|	字符串|	#fff|	左右滑块的箭头的背景颜色|
|loopBottom	|布尔值|	false|	滚动到最底部后是否滚回顶部|
|loopTop|	布尔值|	false|	滚动到最顶部后是否滚底部|
|loopHorizontal	|布尔值|true|	左右滑块是否循环滑动|
|autoScrolling|	布尔值	|true	|是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条|
|scrollOverflow	|布尔值	|false|	内容超过满屏后是否显示滚动条|
|css3	|布尔值	|false|	是否使用 CSS3 transforms 滚动|
|paddingTop	|字符串|	0	|与顶部的距离|
|paddingBottom	|字符串|	0	|与底部距离|
|fixedElements|	字符串	|无|定义的某个元素是否在网页的固定位置|
|normalScrollElements|字符串|无|避免自动滚动的元素|
|keyboardScrolling|	布尔值|	true	|是否使用键盘方向键导航|
|touchSensitivity	|整数|5|定义了浏览器窗口的宽度/高度的百分比，多远的触摸滑动可以跳转到下一个section / slide。|
|continuousVertical	|布尔值|	false	|是否循环滚动，与 loopTop 及 loopBottom 不兼容|
|animateAnchor|	布尔值|	true|定义当网页的URL中有锚文本的时候，是否帮用户定位到对应的section或者slide。|

* `options`回调函数

|名称|说明|
|:----:|:----:|
|afterLoad|	滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算|
|onLeave	|滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；|
|nextIndex |是滚动到的“页面”的序号，从1开始计算；|
|direction |判断往上滚动还是往下滚动，值是 up 或 down。|
|afterRender	|页面结构生成后的回调函数，或者说页面初始化完成后的回调函数|
|afterSlideLoad	|滚动到某一水平滑块后的回调函数，与 afterLoad 类似，接收 anchorLink、index、slideIndex、direction 4个参数|
|onSlideLeave|	某一水平滑块滚动前的回调函数，与 onLeave 类似，接收 anchorLink、index、slideIndex、direction 4个参数 |

#### fullpage对象方法

|名称|说明|
|:----:|:----:|
|moveSectionUp()|向上滚动|
|moveSectionDown()|向下滚动|
|moveTo(section, slide)|	滚动到|
|moveSlideRight()	|slide 向右滚动|
|moveSlideLeft()|	slide 向左滚动|
|setAutoScrolling()	|设置页面滚动方式，设置为 true 时自动滚动|
|setAllowScrolling()|	添加或删除鼠标滚轮/触控板控制|
|setKeyboardScrolling()|	添加或删除键盘方向键控制|
|setScrollingSpeed()|	定义以毫秒为单位的滚动速度|


## jQuery全屏滚动插件jquery-fullPage.js
`jquery-fullPage.js`是一个基于 jQuery 的插件，它能够很方便、很轻松的制作出全屏网站，使用方法与fullpage基本相同，可兼容到ie6。

* 兼容性
![兼容性](http://www.jq22.com/img/6.png)

* [文档地址](http://www.jq22.com/jquery-info1124)

### 使用方法
1. 引入文件
    ```html
    <link rel="stylesheet" href="css/jquery.fullPage.css">
    <script src="js/jquery.min.js"></script>
    
    <!-- jquery.easings.min.js 是必须的，用于 easing 参数，也可以使用完整的 jQuery UI 代替 -->
    <script src="js/jquery.easings.min.js"></script>
    
    <!-- 如果 scrollOverflow 设置为 true，则需要引入 jquery.slimscroll.min.js，一般情况下不需要 -->
    <script src="js/jquery.slimscroll.min.js"></script>
    
    <script src="js/jquery.fullPage.js"></script>
    ```

2. 布局结构
    ```html
    <div id="fullpage">
        <div class="section">第一屏</div>
        <div class="section">第二屏</div>
        <div class="section">
            <div class="slide">第三屏的第一屏</div>
            <div class="slide">第三屏的第二屏</div>
            <div class="slide">第三屏的第三屏</div>
            <div class="slide">第三屏的第四屏</div>
        </div>
        <div class="section">第四屏</div>
    </div>
    ```

3. js
    ```js
    $(function(){
        $('#fullpage').fullpage(options);
    });
    ```
    > `options`中的配置项和回调函数、方法与上文相同

## 案例：
[百度舆情](example/publicSentiment/index.html)


