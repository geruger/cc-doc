#### 什么是 hack ？
> 由于不同的浏览器，对CSS的解析认识不一样，因此会导致生成的页面效果不一样，这时就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果。这个针对不同的浏览器写不同的CSS code的过程，就叫`CSS hack`。

# 移动端布局常见问题

## webkit内核中的一些私有的meta标签
```html
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
<!-- 强制让文档的宽度与设备的宽度保持1:1，并且文档最大的宽度比例是1.0，且不允许用户点击屏幕放大浏览； -->
<meta content="yes" name="apple-mobile-web-app-capable">
<!-- iphone设备中的safari私有meta标签，它表示：允许全屏模式浏览； -->
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<!-- iphone的私有标签，它指定的iphone中safari顶端的状态条的样式； -->
<meta content="telephone=no" name="format-detection">
<!-- 告诉设备忽略将页面中的数字识别为电话号码 -->
```


## 横竖屏限制问题    
```html
  <meta name="x5-orientation" content="portrait | landscape" />
```
> 只支持x5内核

```html
  <meta name="screen-orientation" content="portrait">
```
> 只支持uc浏览器

## 全屏限制问题  
```html
  <meta name="x5-fullscreen" content="true" />  
```
>只支持x5内核

```html
  <meta name="full-screen" content="yes">
```
>只支持uc浏览器

## 禁止识别电话号码和邮箱
```html
  <meta name="format-detection" content="telephone=no, email=no" />
```
> 禁止识别后页面当中所有的邮箱和电话将不会识别,如果有特殊需求,要配合一下代码实现

```html
  <a href="tel:110">请拨打电话110</a>
  <a href="mailto:qq@.com">请发送邮件qq@.com</a>        
```
## 消除链接\表单\按钮 默认背景

```
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
```

## 消除按钮圆角

```
  -webkit-appearance: none;
```

## 移动端字体
  * ios系统  
    + 默认中文字体是Heiti SC   
    + 默认英文字体是Helvetica   
    + 默认数字字体是HelveticaNeue   
    + 无微软雅黑字体   
  * android 系统
    + 默认中文字体是Droidsansfallback  
    + 默认英文和数字字体是Droid Sans  
    + 无微软雅黑字体  
  * winphone 系统
    + 默认中文字体是Dengxian(方正等线体)  
    + 默认英文和数字字体是Segoe  
    + 无微软雅黑字体     
  * 结论  
    + 各个手机系统有自己的默认字体，且都不支持微软雅黑  
    + 如无特殊需求，手机端无需定义中文字体，使用系统默认  
    + 英文字体和数字字体可使用 Helvetica ，三种系统都支持    

```
  body{font-family:Helvetica;}
```

## 禁止用户设置字体大小

```
 -webkit-text-size-adjust:100%
```

## 禁止文字选中

```
  -webkit-user-select:none  //安卓不支持
```

## 字体增强 font boosting

>移动端设备为了使用户能看清楚大批量的字体,会自动对字体进行放大,但是只要指定了容器的高度,就能解决

```
  p{max-height:9999999px}
```      

## 调用原生滚动事件

```
 -webkit-overflow-scrolling:touch
```

## CSS动画页面闪白,动画卡顿

>  解决方法:
  * 尽可能地使用合成属性`transform`和`opacity`来设计CSS3动画，不使用`position`的left和top来定位
  * 使用 CSS3 动画的时尽量利用3D加速，从而使得动画变得流畅。动画过程中的动画闪白可以通过 `backface-visibility` 隐藏

```
  -webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);
```
## fixed定位缺陷
  * ios下fixed元素容易定位出错，软键盘弹出时，影响fixed元素定位
  * android下fixed表现要比iOS更好，软键盘弹出时，不会影响fixed元素定位
  * ios4下不支持`position:fixed`

>解决方案： 可用iScroll插件解决这个问题  

## 阻止旋转屏幕时自动调整字体大小
```
  html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {-webkit-text-size-adjust:none;}
```
## 上下拉动滚动条时卡顿、慢
```
body {-webkit-overflow-scrolling:touch; overflow-scrolling: touch;}
```
> Android3+和iOS5+支持CSS3的新属性为overflow-scrolling

## 禁止复制、选中文本

```
  -webkit-user-select:none;user-select:none;
```
> 解决移动设备可选中页面文本(视产品需要而定)

## ios和android下触摸元素时出现半透明灰色遮罩
>设置alpha值为0就可以去除半透明灰色遮罩，备注：`transparent`的属性值在android下无效。

```
  -webkit-tap-highlight-color:rgba(255,255,255,0)
```

## 关于 iOS 与 OS X 端字体的优化(横竖屏会出现字体加粗不一致等)
> iOS 浏览器横屏时会重置字体大小，设置 `text-size-adjust` 为 none 可以解决 iOS 上的问题，但桌面版Safari 的字体缩放功能会失效，因此最佳方案是将 `text-size-adjust` 为 100% 。

```css
  /* -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%; */
```

## Android 2.0以下平台中圆角的问题
>android 2.0以下的平台中问题特别的多，比如说边框圆角这个问题吧。
在对一个元素定义圆角时，为完全兼容android 2.0以下的平台，我们必须要按照以下技巧来定义边框圆角：
1＼-webkit这个前缀必须要加上（在iOS中，你可以不加，但android中一定要加）；
2＼如果对针对边框做样式定义，比如`border:1px solid #000;`那么`-webkit-border-radius`这属性必须要出现在border属性后。
3＼假如我们有这样的视觉元素，左上角和右上角是圆角时，我们必须要先定义全局的(4个角的圆角值)`-webkit-border-radius:5px;`然后再依次的覆盖左下角和右下角，`-webkit-border-bottom-left-radius:0;-webkit-border-bottom-right-border:0;`否则在android 2.0以下的平台中将全部显示直角，还有记住！-webkit这个前缀一定要加上！

## 去除iOS和Android中的输入URL的控件条
>能否让我们的webapp更加像nativeapp，我不想让用户看见那个输入url的控件条？
答案是可以做到的。我们可以利用一句简单的javascript代码来实现这个效果
`setTimeout(scrollTo,0,0,0);`

## iOS 4.3版本中safari对页面中5位数字的自动识别和自动添加样式
>iOS系统4.3版本对safari造成了一个bug：即使你添加了如下的meta标签，safari仍然会对页面中的5位连续的数字进行自动识别，并且将其重新渲染样式，也就是说你的css对该标签是无效的。
`<meta name="format-detection" content="telphone=no" />`        
比如说支付宝wap站点中显示金额的标签，我们都做了如下改写：        
`<button class="t-balance"style="background:none;padding:0;border:0;">95009.00</button>`

## iOS中如何获取滚动条的值
>桌面浏览器中想要获取滚动条的值是通过`document.scrollTop`和`document.scrollLeft`得到的，但在iOS中你会发现这两个属性是未定义的，为什么呢？因为在iOS中没有滚动条的概念，在Android中通过这两个属性可以正常获取到滚动条的值，那么在iOS中我们该如何获取滚动条的值呢？  
通过`window.scrollY`和`window.scrollX`我们可以得到当前窗口的y轴和x轴滚动条的值。

## iOS中禁止用户选中文字
>我们通过指定文字标签的`-webkit-user-select`属性为none便可以禁止iOS用户选中文字。

## iOS中禁止用户保存图片＼复制图片
>元素的`-webkit-touch-callout`属性，同样为一个img标签指定`-webkit-touch-callout`为none也会禁止设备弹出列表按钮，这样用户就无法保存＼复制你的图片了。

## iOS中彻底禁止用户在新窗口打开页面
>有时我们可能需要禁止用户在新窗口打开页面，我们可以使用a标签的`target="_self"`来指定用户在新窗口打开，或者target属性保持空，但是你会发现iOS的用户在这个链接的上方长按3秒钟后，iOS会弹出一个列表按钮，用户通过这些按钮仍然可以在新窗口打开页面，这样的话，开发者指定的target属性就失效了，但是可以通过指定当前元素的`-webkit-touch-callout`样式属性为none来禁止iOS弹出这些按钮。这个技巧仅适用iOS对于Android平台则无效。

## 关闭iOS中键盘自动大写
>在iOS中，当虚拟键盘弹出时，默认情况下键盘是开启首字母大写的功能的，根据某些业务场景，可能我们需要关闭这个功能，移动版本webkit为input元素提供了`autocapitalize`属性，通过指定`autocapitalize=”off”`来关闭键盘默认首字母大写。
