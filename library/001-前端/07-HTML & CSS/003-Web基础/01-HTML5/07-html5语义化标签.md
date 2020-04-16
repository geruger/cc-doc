## HTML5新增标签
  在HTML5中新添加了一系列语义化的标签，能够更恰当的描述你的内容是什么。布局时就更加的灵活和多变，使用语义化标签有利于浏览器的seo，更加有利于网站的检索。

## 为什么要使用语义化的标签？
1. 可以更好地理解网页的框架。即使在没有CSS的情况下，HTML页面也能呈现出很好地内容结构、代码结构。
2. 不同的语义化标签实际上为我们将网页划分了不同的模块，结构分明更利于分解模块，利于团队的合作和维护。
3. 使用语义化标签有利于浏览器的seo，更加有利于网站的检索。

## 文档声明
* <!DOCTYPE> 声明必须位于 HTML5文档中的第一行，也就是位于`<html>` 标签之前。该标签告知浏览器文档所使用的HTML规范。

* DOCTYPE 声明不属于 HTML 标签; 它是一条指令，告诉浏览器编写页面所用的标记的版本。 在所有 HTML文档中规定 DOCTYPE 是非常重要的，这样浏览器就能了解预期的文档类型。

* HTML 4.01 中的 DOCTYPE 需要对 DTD 进行引用，因为 HTML4.01 基于 SGML（标准通用标记语言）。而 HTML 5 不基于 SGML，因此不需要对DTD （文档类型定义）进行引用，但是需要 DOCTYPE 来规范浏览器的行为（让浏览器按照它们应该的方式来运行。）

## meta标签
` <meta name ="viewport" content ="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1,user-scalable=no">`

* content 属性说明

| 属性值 | 说明     |
| :------------- | :------------- |
|   width         | viewport 宽度(数值/device-width)      |
|   height        | viewport 高度(数值/device-height)      |
|   initial-scale      | 初始缩放比例      |
|   maximum-scale      | 最大缩放比例      |
|   minimum-scale      | 最小缩放比例      |
|   user-scalable      | 是否允许用户缩放(yes/no)      |

## 结构性标签
  结构性标签（construct tag）主要负责Web的上下⽂文结构的定义，确保 HTML文档的完整性，这类标签包括以下几个。
  * section <br>
    用于表达书的一部分或一章，或者一章内的一节。在Web 页⾯面应 用中，该标签也可以 用于区域的章节表述。
  * header <br>
    页面主体上的头部，注意区别于head标签。这里可以给初学者提供一个判断的小技巧：head标签中的内容往往是不可见的，而header标签往往在一对body标签之中。
  * footer <br>
    页面的底部（页脚）。通常，人们会在这里标出网站的一些相关信息，例如关于我们、法律申明、邮件信息、管理入口等。
  * nav <br>
    是专门用于菜单导航、链接导航的标签，是navigator的缩写。
  * article <br>
    用于表示一篇文章的主体内容，一般为文字集中显示的区域。　
  * 语义化页面展示  　　
![语义化页面](amWiki\images\yuyi.jpg)
## 块级性标签 <br>
   块级块性标签（block tag）主要完成Web页面区域的划分，确保内容的有效分隔，这类标签包括以下几。
 * aside <br>
   用以表达注记、贴士、侧栏、摘要、插入的引 用等作为补充主体的内容。从一个简单页面显示上，就是边栏，可以在左边，也可以在右边。从一个页面的局部看，就是摘要。
 * figure <br>
   标签规定独立的流内容，通常与figcaption联合使 用。
 * code <br>
   表示一段代码块。
 * dialog <br>
   对话标签配合dt dd标签使用

## 行内标签
   行内语义性标签（in-line tag ）主要完成Web页面具体内容的引用和表述，是丰富内容展示的基础，这类标签包括以下几个。
 *  meter <br>
   表示特定范围内的数值， 可用于工资、数量、百分比等。max表示最大值，min表示最小值，value代表当前值。
   ```
   <meter min="2" max="10"  value="3"></meter>
   ```
 * time <br>
   表示时间值，属性datetime强调时间
 * progress <br>
   用来表示进度条   

## 多媒体标签
 * video <br>
  视频标签，用于支持和实现视频（含视频流）文件的直接 播放，支持缓冲预载和多种视频媒体格式如MPEG-4、OggV和WebM等。
```html
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
    您的浏览器不支持Video标签。
</video>
```
> `<video>` 元素提供了 播放、暂停和音量控件来控制视频。同时 `<video>` 元素元素也提供了 width 和 height 属性控制视频的尺寸.如果设置的高度和宽度，所需的视频空间会在页面加载时保留。。如果没有设置这些属性，浏览器不知道大小的视频，浏览器就不能再加载时保留特定的空间，页面就会根据原始视频的大小而改变。
`<video>`与`</video>` 标签之间插入的内容是提供给不支持 video 元素的浏览器显示的。
`<video>` 元素支持多个 `<source>` 元素。`<source>` 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式。

* audio
  音频标签，用于支持和实现音频（音频流）文件的直接播放，支持缓冲预载和多种音频媒体格式。
```html
  <audio controls>
    <source src="audio.ogg" type="audio/ogg">
    <source src="audio.mp3" type="audio/mpeg">
    您的浏览器不支持 audio 元素。
</audio>
```

| 属性 | 值     | 描述 |
| :------------- | :------------- | :----|
|autoplay|	autoplay|如果出现该属性，则音频在就绪后马上播放|
|controls|	controls|	如果出现该属性，则向用户显示音频控件（比如播放/暂停按钮）|
|loop|	loop|	如果出现该属性，则每当音频结束时重新开始播放|
|muted|muted|	如果出现该属性，则音频输出为静音。|
|preload|	auto、metadata、none|规定当网页加载时，音频是否默认被加载以及如何被加载。|
|src|	URL	|规定音频文件的 URL。|

## 列表标签
 * datalist <br>
  标签定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。datalist 及其选项不会被显示出来，它仅仅是合法的输入值列表。所有主流浏览器都支持 <datalist> 标签，除了 Internet Explorer 和Safari。
```html
<input list="browsers" name="browser">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
```


## HTML5 新标签兼容性
> 低版本浏览器无法识别一些 H5 的语义化标签，解决方法：浏览器不认识H5标签，所以可以在js中手动创建好这些标签，浏览器就能识别；并且需要给这些标签设置`display:block`，否则通过这种方法创建的新标签，默认是行元素。  下方如：

* 自己写兼容
```html
<style>
     section,article,aside,header,footer,nav,figure,figcaption,time,mark,main{
        display:block;
    }
</style>
<script>
    document.createElement('section');
    document.createElement('article');
    document.createElement('aside');
    document.createElement('header');
    document.createElement('footer');
    document.createElement('nav');
    document.createElement('figure');
    document.createElement('figcaption');
    document.createElement('time');
    document.createElement('mark');
    document.createElement('main');
</script>
```
对于代码位置，我们需要注意，要将script标签放置到head中，而不是body的后面，这是因为，浏览器从上到下进行代码的执行与解析，在已经渲染之后再执行js就没有任何意义和价值了。

* 借用封装好的js库 --- html5shiv.js
```html
<!DOCTYPE html>
<html>
  <head lang="en">
     <meta charset="UTF-8">
     <title>测试H5新标签兼容性</title>
     <script src="js/html5shiv.js"></script>
   </head>
   <body>
     <header id="header">header</header>
     <footer id="footer">footer</footer>
     <script src="js/jquery-1.11.0.min.js"></script>

     <script>
       $('#header').css('color','#f00');
       $('#footer').css({'width':'50px','height':'50px',
                         'border':'1px solid #ddd',
                         'backgroundColor':'red'});
      $('#header').html('h5标签兼容');
    </script>

  </body>
</html>
```
## 新增标签兼容性
* `<address>` 标签定义文档或文章的作者/拥有者的联系信息。  兼容所有浏览器
* `<area>` 标签定义图像映射中的区域（注：图像映射指得是带有可点击区域的图像）。兼容所有浏览器
* `<small>` 标签呈现小号字体效果。  兼容所有浏览器
* `<base>` 标签为页面上的所有链接规定默认地址或默认目标。   兼容所有浏览器
* `<bdo>` 元素可覆盖默认的文本方向。    兼容所有浏览器
* `<blockquote>` 长文本引用。       兼容所有浏览器
* `<caption>` 元素定义表格标题。    兼容所有浏览器
* `<del>` 定义文档中已被删除的文本    兼容所有浏览器
* `<sub>` 标签可定义下标文本。     兼容所有浏览器
* `<sup>` 标签可定义上标文本。     兼容所有浏览器
* `<article>` 标签规定独立的自包含内容。  IE9及以上
* `<aside>` 标签定义其所处内容之外的内容。   IE9及以上
* `<audio>` 标签定义声音，比如音乐或其他音频流。 IE9及以上
* `<bdi>` 标签允许您设置一段文本，使其脱离其父元素的文本方向设置。 只有 Firefox 和 Chrome 支持 `<bdi>` 标签
* `<canvas>` 标签定义图形，比如图表和其他图像。    IE9及以上
* `<footer>` 标签定义文档或节的页脚。    IE9及以上
* `<nav>` 标签定义导航链接的部分。    IE9及以上
* `<video>` 标签定义视频，比如电影片段或其他视频流。     Internet Explorer 9+, Firefox, Opera, Chrome 以及 Safari 支持 `<video>` 标签
