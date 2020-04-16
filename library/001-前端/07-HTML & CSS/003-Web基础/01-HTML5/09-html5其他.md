# svg
## SVG 简介
* 可缩放矢量图形（Scalable Vector Graphics，SVG）是基于可扩展标记语言（XML），用于描述二维矢量图形的一种图形格式。SVG由W3C制定，是一个开放标准。SVG是一种矢量图格式。
*   在 2003 年1月，SVG 1.1 被确立为 W3C 标准。参与定义 SVG 的组织有：Adobe、苹果、Auto Desk、Bit Flash、Corel、惠普、IBM、ILOG、INSO、Macromedia、微软、Netscape、OASIS、Open Text、Quark、RAL(CCLRC)、Sun、Visio、施乐等，所以SVG不是一个私有格式，而是一个开放的标准。也就是说，它并不属于任何个体的专利，而是一个通过协作、共同开发的工业标准。正是因为这点，才使得SVG能够得到更迅速的开发和应用。

## 优势
* SVG 可被非常多的工具读取和修改（比如记事本），支持多种滤镜和特殊效果，在不改变图像内容的前提下可以实现位图格式中类似文字阴影的效果，易于修改和编辑。
* SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
* SVG 是可伸缩的
* SVG 图像可在任何的分辨率下被高质量地打印
* SVG 可在图像质量不下降的情况下被放大
* SVG可以方便的建立文字索引，从而实现基于内容的图像搜索，图像中的文本是可选的，同时也是可搜索的（很适合制作地图）。
* SVG 可与现有技术可以互动融合。例如，SVG技术本身的动态部分（包括时序控制和动画）就是基于SMIL标准。另
* SVG文件还可嵌入JavaScript（严格的说应该是ECMA Script)脚本来控制SVG对象，还可以与 Java 技术一起运行
* SVG 文件是纯粹的 XML。
* SVG 图形格式可以用来动态生成图形。例如，可用SVG动态生成具有交互功能的地图，嵌入网页中，并显示给终端用户


SVG的出现带来了一次技术革命。利用SVG能够创建更加丰富多彩的信息可视化和交互性的应用，尤其是可以创建具有动态的、数据驱动的、交互式图形、图像。另外，由于是纯文本格式的．SVG比传统的图形、图像格式如GIF和JPEG占用更少的空间。因此，SVG更加适合有线带宽，并可提高下载速度。SVG和XML的开放式标准特性使其成为国际性语言。SVG标准得到了IBM、Adobe、Microsoft、Corel等几十家大公司的支持，其最新的版本是SVG 1.2。
总之，SVG技术的出现，变革了在Web上图文传递信息的方式，并将产生一种更适于Web信息发布的工作流模式，其中包括Web信息显示和印刷出版的组织方式。

## SVG 实例

```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
</svg>
```

>* 第一行包含了 XML 声明。请注意 standalone 属性！该属性规定此 SVG 文件是否是“独立的”，或含有对外部文件的引用。standalone="no" 意味着 SVG 文档会引用一个外部文件 - 在这里，是 DTD 文件。
* 第二和第三行引用了这个外部的 SVG DTD。该 DTD 于"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"该 DTD 位于 W3C,含有所有允许的 SVG 元素。SVG 代码以 `<svg> ` 元素开始，包括开启标签 `<svg>` 和关闭标签 `</svg>` 。这是根元素。
* width 和 height 属性可设置此 SVG 文档的宽度和高度。version 属性可定义所使用的 SVG 版本，xmlns 属性可定义 SVG 命名空间。
* SVG 的 `<circle>` 用来创建一个圆。cx 和 cy 属性定义圆中心的 x 和 y 坐标。如果忽略这两个属性，那么圆点会被设置为 (0, 0)。r 属性定义圆的半径。
* stroke 和 stroke-width 属性控制如何显示形状的轮廓。我们把圆的轮廓设置为 2px 宽，黑边框。
* fill 属性设置形状内的颜色。我们把填充颜色设置为红色。
* 关闭标签的作用是关闭 SVG 元素和文档本身。


## HTML引入SVG的方式

* 使用 `<embed>` 标签
```html
<embed src="rect.svg" width="300" height="100"
type="image/svg+xml"
pluginspage="http://www.adobe.com/svg/viewer/install/" />
```

* 使用 `<object>` 标签
```html
<object data="rect.svg" width="300" height="100"
type="image/svg+xml"
codebase="http://www.adobe.com/svg/viewer/install/" />
```

* 使用 `<iframe>`标签
```html
<iframe src="rect.svg" width="300" height="100">
</iframe>
 `<iframe>` 标签可工作在大部分的浏览器中。
```


## H5的引入方式

* 把 SVG 直接嵌入 HTML 页面
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
  <polygon points="100,10 40,180 190,60 10,60 160,180"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
</svg>
```

## svg 的形状
* SVG 有一些预定义的形状元素，可被开发者使用和操作
* 矩形 `<rect>`
* 圆形 `<circle>`
* 椭圆 `<ellipse>`
* 线 `<line>`
* 折线 `<polyline>`
* 多边形 `<polygon>`
* 路径 `<path>`

## SVG的样式
> 主要是给svg定义的形状添加样式。
| 样式和属性     | 含义    | 可能的值 |
| :------------- | :------------- |:------|
| 样式和属性     | 含义    | 可能的值 |
| fill|	填充 |	颜色值|
| stroke|	描边 |	颜色值 |
| stroke-width |	描边宽度	| 数字（通常以像素为单位）|
| opacity	| 不透明度	| 0.0（完全透明）和1.0（完全不透明）之间的数值|
| font-family	| 字体	| text标签特有，CSS字体|
| font-size	| 字体大小	| text标签特有，数字|
| text-anchor	| 对齐方式	| text标签特有，left/center/right|





## 形状实例
* 矩形
> x和y的指定左上角的坐标，width和height指定矩形的尺寸。

  ```html
  <rect x="20" y="20" width="250" height="250"
  style="fill:blue;stroke:pink;stroke-width:5;
  fill-opacity:0.1;stroke-opacity:0.9"/>
  ```

* 圆形
> cx和cy指定圆心的坐标，ŗ表示半径大小

  ```html
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
  ```

* 椭圆
> cx和cy指定圆心坐标，rx和ry分别指定横半轴纵半轴长度

  ```html
  <ellipse cx="250" cy="25" rx="100" ry="25"/>
  ```

* 线条
>用x1和Y1到指定线的一端的坐标，x2和y2指定的另一端的坐标。stroke指定描边让线是可见的

  ```html
  <line x1="0" y1="0" x2="300" y2="300" style="stroke:rgb(99,99,99);stroke-width:2"/>
  ```

* 多边形
> points 表示多边形的每一个点

  ```html
  <polygon points="220,100 ,300,210 ,170,250" style="fill:#cccccc;stroke:#000000;stroke-width:1"/>
  ```

* 文本
> x和y指定文本的位置。

  ```html
  <text x="250" y="25">Easy-peasy</text>
  ```




# H5离线缓存技术

## 简介
离线存储可以将站点的一些文件存储在本地，在没有网络的时候还是可以访问到以缓存的对应的站点页面，其中这些文件可以包括html，js，css，img等等文件，但其实即使在有网络的时候，浏览器也会优先使用已离线存储的文件，返回一个200（from cache）头。这跟HTTP的缓存使用策略是不同的。

## 特点
它是浏览器自己的一种机制，随着移动互联网时代的到来，网络可靠性降低，如果我们已经将需要的文件缓存下下来，一旦网络无法访问，也能继续访问。而且做好相应资源的缓存可以带来更好的用户体验，当用户使用自己的流量上网时，本地缓存不仅可以提高用户访问速度，而且大大节约用户的使用流量。

### 什么是Manifest？
html新增了一个manifest属性，可以用来指定当前页面的manifest文件。

其实Manifest是一个简单的 文本文件，它的扩展名是任意的，定义需要缓存的文件、资源，当第一次打开时，浏览器会自动缓存相应的资源。

### Manifest 的特点：
* 离线浏览：即当网络断开时，可以继续访问你的页面。
* 访问速度快：将文件缓存到本地，不需每次都从网络上请求。
* 稳定性：做了Manifest缓存，遇到突发网络故障或者服务器故障，继续访问本地缓存。

### Manifest 的使用
1. 创建一个和html同名的manifest文件，比如页面为index.html，那么可以建一个index.manifest的文件，然后给index.html的html标签添加如下属性即可：
```
<html lang="en" manifest="index.manifest"> 或<html manifest="http://www.example.com/index.manifest">
```
    * manifest 的引入可以使绝对路径也可以是相对路径，如果你使用的是绝对路径，你的manifest文件必须和你的站点挂在同一个域名下。
    * manifest文件你可以保存为任意的扩展名，但mine-type 必须是 text/cache-manifest。
    * 在服务器上部署时需要在服务器上添加相应的mie-type
2. manifest 标签应该包含到你需要缓存资源的页面，当第一次打开该页面时，浏览器会解析该页面中的mainfest，并缓存里面列举的资源，同时该页面也会自动会被浏览器缓存，即使该页面没有在Manifest中列出。
    * 注意："/page-url/", "/page-url/?something", "/page-url/?something-else"  Manifest 会当成不同的页面，如果page-url页面中包含了 Manifest 属性则浏览器会将该页面中列举出来的资源分别保存，所以Manifest最好使用在SPA（单页应用）项目中。
    * 在Chrome中，可以使用 chrome://appcache-internals/ 查看你缓存在本地的资源文件。


### Manifest文件结构
manifest文件，基本格式为三段： CACHE， NETWORK，与 FALLBACK，其中NETWORK和FALLBACK为可选项。
1. 第一行CACHE MANIFEST为固定格式，必须写在前面。
> 以#号开头的是注释，可以是版本号，时间戳等等。一般会在这写个版本号，用来在缓存的文件更新时，更改manifest的作用：浏览器已经缓存下来的缓存，只有当manifest文件发生了改变才会更新本地缓存，即使你的代码发生了更新，本地浏览器也是不知道的，所以每次发布代码时你可以更改下#后面的信息比如版本号或者时间，告诉浏览器相应的更新本地缓存。

    * 第一行是CACHE MANIFEST 这是必须需要的。
    * CACHE（必须） 标识出哪些文件需要缓存，可以是相对路径也可以是绝对路径。这里列举出来的文件，当第一次加载下来时，会被浏览器缓存在本地。
    * NETWORk  这一部分是要绕过缓存直接读取的文件，可以使用通配符 *，大多数网站使用 * 。 当使用* 时 表示出 CACHE指定文件外，其它所有页面都需要联网访问
    * FALLBACK  （可选） 当资源无法访问时，浏览器使用后备资源去替代。第二个表示后备页面。两个 URI 都必须使用相对路径并且与清单文件同源。可以使用通配符。

```
CACHE MANIFEST  
#VERSION 2016-09-28 14:44

#直接缓存的文件  
CACHE:
../index.html
../css/index.css  
../js/index.js
../images/loading.gif

#需要在线请求的文件路径，*代表除CACHE以外的文件都进行在线请求
NETWORK:
*
#替代方案 ，当请求失败时需要跳转的页面
FALLBACK:
../error.html
```

### 更新缓存
* 更新manifest文件
> 给manifest添加或删除文件，都可更新缓存，如果我们更改了js，而没有新增或删除，前面例子中注释中的版本号，可以很好的用来更新manifest文件。

* 通过javascript操作
> html5中引入了js操作离线缓存的方法，下面的js可以手动更新本地缓存。
window.applicationCache.update();

* 清除浏览器缓存
> 如果用户清除了浏览器缓存（手动或用其他一些工具）都会重新下载文件
