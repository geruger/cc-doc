# bootstrap

## bootstrap概述
* **简介**
>Bootstrap是Twitter推出的一个开源的用于前端开发的工具包。它由Twitter的设计师合作开发，是一个CSS/HTML框架。Bootstrap提供了优雅的HTML和CSS规范，它即是由动态CSS语言Less写成。

* **特点**
>Bootstrap是基于jQuery框架开发的，它在jQuery框架的基础上进行了更为个性化和人性化的完善，形成一套自己独有的网站风格，并兼容大部分jQuery插件

* **功能**
  * 多样的布局
    >从网格布局到流式布局再到响应式布局

  * 美观的排版
    >几乎重新定义了html中所有的样式，包括标题,列表,表单,表格等等。

  * 丰富的组件
    >Bootstrap中包含了丰富的Web组件，根据这些组件，可以快速的搭建一个
漂亮、功能完备的网站。包括以下组件：<br/>
    >下拉菜单、按钮组、按钮下拉菜单、导航、导航条、面包屑、分页、排版、
缩略图、警告对话框、进度条、媒体对象等

  * 灵活的jQuery插件
    >Bootstrap自带了13个jQuery插件，这些插件为Bootstrap中的组件赋予了“生命”。其中包括：<br/>
    >模式对话框、标签页、滚动条、弹出框等

## bootstrap兼容性以及环境搭建

* 浏览器支持
>Bootstrap的目标是在最新的桌面和移动浏览器上有最佳的表现，也就是说，在较老旧的浏览器上可能会导致某些组件表现出的样式有些不同，但是功能是完整的。

  ```
  被支持的浏览器
    Chrome (Mac、Windows、iOS和Android)
    Safari (只支持Mac和iOS版)
    Firefox (Mac、Windows)
    Internet Explorer
    Opera (Mac、Windows)
    Internet Explorer 8 和 9
  ```
Internet Explorer 8 和 9 是被支持的，然而很多CSS3属性和HTML5元素是肯定不被支持的。另外，Internet Explorer 8 需要Respond.js配合才能实现对媒体查询（media query）的支持。注:respond.js只支出 max-width min-width。

* respond.js问题
  * Respond.js 和 file://
  >由于浏览器的安全规则问题，Respond.js 不能通过 file:// 协议（打开本地
HTML文件所用的协议）访问的页面上发挥正常的功能。如果需要测试IE8下
面的响应式特性，必须用http服务器（例如apache、nginx）托管HTML页面才
可以。请参考 Respond.js 文档 获取更多信息。

  * Respond.js 和@import
  >Respond.js 不支持通过 @import 引入的CSS文件。例如，Drupal 一般被配置
为通过 @import 引入CSS文件，Respond.js对其将无法起到作用。 请参考
Respond.js 文档获取更多信息

* IE10问题
  >Internet Explorer 10并没有将屏幕的宽度和视口（viewport）的宽度区别开，这就导致Bootstrap中的媒体查询并不能很好的发挥作用。

  * 为了解决这个问题，可以引入下面列出的这段CSS暂时修复此问题：
    ```CSS
    @-webkit-viewport {
      width: device-width;
    }
    @-moz-viewport {
      width: device-width;
    }
    @-ms-viewport {
      width: device-width;
    }
    @-o-viewport {
      width: device-width;
    }
    @viewport {
      width: device-width;
    }
    ```
    ```javascript
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement("style")
      msViewportStyle.appendChild(
        document.createTextNode(
          "@-ms-viewport{width:auto!important}"
        )
      )
      document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
    }
    ```
  * IE兼容模式
  >Bootstrap不支持IE的兼容模式。为了让IE浏览器运行最新的渲染模式，建议将此 <meta> 标签加入到你的页面中：

    ```HTML
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    ```

* 页面基本模板

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Bootstrap 101 Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Bootstrap -->
      <link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap.min.css">
      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and mediaqueries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
        <script src="http://cdn.bootcss.com/html5shiv/3.7.0/html5shiv.min.js"></script>
        <script src="http://cdn.bootcss.com/respond.js/1.3.0/respond.min.js"></script>
      <![endif]-->
    </head>
    <body>
      <h1>Hello, world!</h1>
      <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
      <script src="http://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
      <!-- Include all compiled plugins (below), or include individual files as needed -->
      <script src="http://cdn.bootcss.com/twitter-ootstrap/3.0.3/js/bootstrap.min.js"></script>
    </body>
  </html>
  ```

* Safari对百分比数字凑整的问题
  >从OS X版Safari v6.1和iOS v7.0.1版Safari开始，Safari浏览器所包含的绘制引擎对于处理.col-* -1所对应的很长的百分比小数存在bug。也就是说，如果你在一行（row）之中定义了12个单独的列（.col-* -1），你就会看到这一行比其他行要短一些。我们目前解决不了这个问题(see #9282)，但是你可以避免：
    * 为最后一列添加.pull-right，将其暴力向右对齐
    * 手动调整百分比数字，让其针对Safari表现更好（这比第一种方式更困难）<br/>

    >我们将会继续跟踪此问题，如果有更简易的解决方案，我们会更新代码。

* 模态框和移动设备

  * 超出范围和滚动
    ><body>元素在iOS和Android上对overflow: hidden的支持很有限。结果就是，在这两种设备上的浏览器中，当你滚动屏幕超过模态框的顶部或底部时， <body>中的内容将开始随着滚动。

  * 虚拟键盘
    >还有，如果你正在模态框上面输入内容 -- iOS还有一个绘制上的bug，当触发虚拟键盘之后，其不会更新fixed元素的位置。这里有几种解决方案，包括将fixed元素转变为position: absolute或启动一个定时器手工修正其位置。<br/>
    这些没有加入Bootstrap中，因此，需要由你自己选择最好的解决方案并加入到你的应用中。

* 浏览器缩放
  >页面缩放功能不可避免的会将某些组件搞得乱七八糟，不光是Bootstrap，整个互联网上的所有网站都是这样。针对具体问题，我们或许可以修复它（如果有必要的话，请先搜索一下你的问题，看看是否已有解决方案，然后在向我们提交issue）。<br/>
  然而，我们更倾向于忽略这些问题，由于这些问题除了一些hack手段，一般没有直接的解决方案。

## bootstrap栅格系统

* 栅格系统
  >Bootstrap内置了一套响应式、移动设备优先的流式栅格系统，随着屏幕设备或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的预定义classe，还有强大的mixin用于生成更具语义的布局。

* Bootstrap栅格系统的工作原理：
  * “行（row）”必须包含在.container中，以便为其赋予合适的排列（aligment）和内补（padding）。
  * 使用“行（row）”在水平方向创建一组“列（column）”。
  * 你的内容应当放置于“列（column）”内，而且，只有“列（column）”可以作为行（row）”的直接子元素。
  * 类似Predefined grid classes like .row and .col-xs-4 这些预定义的栅格class可以用来快速创建栅格布局。Bootstrap源码中定义的mixin也可以用来创建语义化的布局。
  * 通过设置padding从而创建“列（column）”之间的间隔（gutter）。然后通过为第一和最后一样设置负值的margin从而抵消掉padding的影响。
  * 栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个.col-xs-4来创建。

* bootstrap栅格选项

|  | 超小屏幕设备 手机(<768px) | 小屏幕设备 平板(>=768px)| 中等屏幕设备 桌面(>=992px)| 大屏幕设备(>=1200px)|
|:-----:|:-----:|:-----:|:-----:|:-----:|
|栅格系统行为 | 总是水平排列 | 开始是堆叠在一起的，超过这些阈值将变为水平排列|开始是堆叠在一起的，超过这些阈值将变为水平排列|开始是堆叠在一起的，超过这些阈值将变为水平排列|
| 最大.container宽度 | None(自动) | 750px | 970px | 1170px |
| class前缀 | .col-xs- | .col-sm- | .col-md- | .col-lg- |
| 列数 | 12 |12 |12 |12 |
|最大列宽 | 自动 | 60px | 78px | 95px|
|列间距 |30px (每列左右均有15px)|30px (每列左右均有15px)|30px (每列左右均有15px)|30px (每列左右均有15px)|
|可嵌套 | Yes|Yes|Yes|Yes|
|偏移（Offsets）|  Yes|Yes|Yes|Yes|
|列排序 | Yes|Yes|Yes|Yes|
栅格class在屏幕宽度大于或等于阈值的设备上起作用，如果小于阀值小屏幕设备会将class覆盖掉。所以说越小阀值的class级别越高

* bootstrap栅格系统混合排列

  ![移动设备和桌面](amWiki/images/1.jpg)

* bootstrap栅格系统列偏移
  >使用 .col-md-offset-* 可以将列偏移到右侧。这些class通过使用*选择器将所有列增加了列的左侧margin。例如，.col-md-offset-4将.col-md-4向右移动了4个列的宽度

  ![列偏移](amWiki/images/2.jpg)

* bootstrap栅格系统列嵌套
  >为了使用内置的栅格将内容嵌套，通过添加一个新的.row和一系列 .col-md-* 列放进已经存在的 .col-md-* 列内即可实现。嵌套row所包含的列加起来应该等于12，也就是说所嵌套的row的宽度等于他的父元素

  ![列嵌套](amWiki/images/3.jpg)

* bootstrap栅格系统列排序
  >通过使用 .col-md-push-* 和 .col-md-pull-* 就可以很容易的改变列的顺序<br/>
  col-md-push-* 向右移动<br/>
  col-md-pull-* 向左移动

## bootstrap排版样式
>bootstrap给我们预定义了一系列页面当中标签的样式，有别于原生呆板的样式，他给我们加入进了一系列设计的元素如：圆角，阴影或者是将某些标签的默认边距进行了修改，或者是加入了一些特殊的类，总之能够使我们的页面更加的人性化，更加的符合用户的浏览习惯。<br/>
包括：标题 ，文本，列表，表格，表单等等

* bootstrap排版-标题
  * 标题 <h1-h6>

    HTML中的所有标题标签，从< h1\>到< h6\>均可用。另外，还提供了.h1到.h6 class，为的是给inline属性的文本赋予标题的样式

  * 副标题<small>

    在标题内还可以包含< small\>标签或 .small元素，可以用来标记副标题

    ```html
    <h1>标题<small>副标题</small></h1>
    ```

    当small放在标题里面时当做副标题来用，当他单独放在外面的时候样式有所变化，是小字体的意思,行内元素赋予.small以代替任何<small>标签。

* bootstrap排版-段落
  * 段落 < p>

    通过添加.lead可以让段落突出显示

  * 段落对齐

  ```html
  <p class="text-left">左对齐</p>
  <p class="text-center">中对齐</p>
  <p class="text-right">右对齐</p>
  ```

* bootstrap排版-字体颜色

  ```html
  <p class="text-muted">字体颜色 柔和的(灰色)</p>
  <p class="text-primary">字体颜色 突出重点(浅蓝色)</p>
  <p class="text-success">字体颜色 突出成功(绿色)</p>
  <p class="text-info">字体颜色 突出信息(蓝色)</p>
  <p class="text-warning">字体颜色 警告(橙色)</p>
  <p class="text-danger">字体颜色 危险(红色)</p>
  ```

* bootstrap排版-页面主体
  * Bootstrap将全局font-size设置为14px，line-height为1.428。这些属性直接赋给<body>和所有段落元素。
  * < p>（段落）还被设置了等于1/2行高的底部外边距（margin）（即10px）。

* bootstrap排版-引用样式
  * 将任何HTML裹在< blockquote>之中即可表现为引用添加< small>标签或.small class 来注明引用来源。
  * 来源名称可以放在< cite>标签里面使用.pull-right可以让引用展现出向右侧移动、对齐的效果。

* bootstrap排版-列表
  * 在bootstrap中的列表和默认样式没有什么不同。
  * 添加类名 .list-unstyled 去除列表默认样式。
  * 添加类名 .list-inline 添加少量内边距，将所有的元素放在一行。
  * 添加类名 .dl-horizontal 可以让<dl>内短语及其描述排在一行。开始是像<dl>默认样式堆叠在一起，随着导航条逐渐展开而排列在一行。

* bootstrap排版-表格
  * 在bootstrap中的table和默认样式没有什么不同。
  * 添加.table可以为其赋予基本的样式—少量的内补（padding）和水平方向的分隔线。
  * 利用.table-striped可以给<tbody>之内的每一样增加斑马条纹样式。<br/>
    跨浏览器兼容性：条纹状表格是通过:nth-child CSS选择器实现的，而这一功能不被Internet Explorer 8支持。
  * 利用.table-bordered为表格和其中的每个单元格增加边框。
  * 利用.table-hover可以让<tbody>中的每一行响应鼠标悬停状态。
  * 利用.table-condensed可以让表格更加紧凑，单元格中的内部（padding）均会减半。
  * 通过这些状态class可以为行或单元格设置颜色

|Class    | 描述    |
| :------------- | :------------- |
| .active      | 鼠标悬停在行或单元格上时所设置的颜色   |
| .success      | 标识成功或积极的动作   |
| .warning      | 标识警告或需要用户注意   |
| .danger      | 标识危险或潜在的带来负面影响的动作   |

  * 响应式表格
    >将任何.table包裹在.table-responsive中即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于768px宽度时，水平滚动条消失。

    ```html
    <div class="table-responsive">
    <table class="table">
    ...
    </table>
    </div>
    ```

## bootstrap表单样式

* bootstrap表单-基本样式
  * 单独的表单控件几乎和默认样式没有什么区别,仅仅有一些bootstrap的全局样式。
  * 设置了 .form-control 类 的< input\>、< textarea\>和< select\>元素都将被默认。
  * 设置为 width: 100%; 使表单具有获得焦点的状态。
  * 将label和前面提到的这些控件包裹在 .form-group中可以获得最好的排列。

  ```html
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
  </div>
  ```

* bootstrap表单-内联样式
  * 内联样式
    >为< form\>元素 form-inline可使其内容左对齐并且表现为inline-block级别的控件。只适用于浏览器窗口至少在 768px 宽度时（窗口宽度再小的话就会使表单折叠）。

  * 需要设置宽度
    >在Bootstrap中，input、select和textarea默认被设置为100%宽度。为了使用内联表单，你需要专门为使用到的表单控件设置宽度。

  * 一定要设置label
    >如果你没有为每个输入控件设置label，屏幕阅读器将无法正确识读。对于这些内联表单，你可以通过为label设置.sr-only已将其隐藏。

* bootstrap表单-水平排列
  >通过为表单添加 form-horizontal，并使用Bootstrap预置的栅格class可以将label和控件组水平并排布局。这样做将变.form-group为栅格系统中的行（row），因此就无需再使用.row了。

  ```html
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  ```

* bootstrap表单-支持的控件< input\>
  * 大部分表单控件、文本输入域控件。包括HTML5支持的所有类型：text、password、datetime、datetime-local、date、month、time、week、number、email、url、search、tel和color。
  * 必须添加类型声明
  * 只有正确设置了type的input控件才能被赋予正确的样式。

  ```html
  <input type="text" class="form-control" placeholder="Text input">
  ```

* bootstrap表单-支持的控件< textarea\>
  >支持多行文本的表单控件。可根据需要改变rows属性

  ```html
  <textarea class="form-control" rows="3"></textarea>
  ```

* bootstrap表单-支持的控件checkbox radio
  * Checkbox用于选择列表中的一个或多个选项，而radio用于从多个选项中只选择一个。
  * 默认外观(堆叠在一起)

  ```html
  <label>
    <input type="checkbox" value="">
    Option one is this and that&mdash;be sure to include why it's great
  </label>
  ```
  通过将.checkbox-inline 或 .radio-inline应用到一系列的checkbox或radio控件上，可以使这些控件排列在一行。
  ```html
  <label class="checkbox-inline">
    <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
  </label>
  <label class="checkbox-inline">
    <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
  </label>
  ```

* bootstrap表单-支持的控件< select\> <br/>
  >使用默认选项或添加multiple属性可以显示多个选项

  ```html
  <select multiple class="form-control">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  ```

* bootstrap表单-支持的控件-静态控件
  >在水平布局的表单中，如果需要将一行纯文本放置于label的同一行，为< p\>元素添加.form-control-static即可

  ```html
  <div class="form-group">
    <label class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <p class="form-control-static">email@example.com</p>
    </div>
  </div>
  ```

* bootstrap表单-支持的控件-帮助控件
  >用于表单控件的块级帮助文本。

  ```html
  <span class="help-block">自己独占一行或多行的块级帮助文本。</span>
  ```

* bootstrap表单-控件尺寸
  * 高度尺寸<br/>
    添加 input-lg类 使得表单控件变高。<br/>
    添加 input-sm类 使得表单控件高度变小。

  * 调整列尺寸<br/>
    用栅格系统中的列包裹input或其任何父元素，都可很容易的为其设置宽度。

## bootstrap按钮样式

* bootstrap按钮分类

  ![按钮分类](amWiki/images/anniu.jpg)

  ```html
  <button type="button" class="btn btn-default">Default</button>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-link">Link</button>
  <!-- .btn必须和 .btn-default一起使用才能获得“默认”样式的按钮 -->
  ```

* bootstrap按钮尺寸
  * 需要让按钮具有不同尺寸吗？使用 .btn-lg、.btn-sm、.btn-xs可以获得不同尺寸的按钮。
  * 通过给按钮添加 btn-block 可以使其充满父节点100%的宽度，而且按钮也变为了块级（block）元素。

* bootstrap按钮状态
  * 活动状态
    >由于:active是伪状态，因此 无需添加，但是在需要表现出同样外观的时候可以添加 active 类。

  * 禁用状态
    * < button\><br/>
      通过将按钮的背景色做50%的褪色处理就可以呈现出无法点击的效果。<br/>
      按钮元素为< button\>添加disabled属性。
    * < a\><br/>
      我们把.disabled作为工具class使用，因此不需要增加前缀。链接功能不受影响,只是改变<a>的外观，不影响功能。<br/>
      我们通过JavaScript代码禁用链接的默认功能。

* bootstrap按钮标签
  * 可作按钮使用的HTML标签
  * 可以为< a\>、< button\>或< input\>元素添加按钮class。

    ```html
    <a class="btn btn-default" href="#" role="button">Link</a>
    <button class="btn btn-default" type="submit">Button</button>
    <input class="btn btn-default" type="button" value="Input">
    <input class="btn btn-default" type="submit" value="Submit">
    ```
    尽可能使用< button>元素以确保跨浏览器的一致性样式。

* bootstrap图标按钮
  >bootstrap包括200个来自Glyphicon Halflings的字体图标

  * 不要和其它组件混合使用
  * 图标 class 不能和其它元素联合使用，因为这些图标被设计为独立的元素、独立使用。

  ```html
  <button type="button" class="btn btn-default btn-lg">
    <span class="glyphicon glyphicon-star"></span> Star
  </button>
  ```

## bootstrap工具类
* 关闭按钮
  >通过使用一个象征关闭的图标，可以用来让模式对话框和警告框消失

  ```html
  <button type="button" class="close" aria-hidden="true">&times;</button>
  ```

* 下拉三角

  ```html
  <span class="caret"></span>
  ```

* 快速浮动

  ```html
  <div class="pull-left">...</div>
  <div class="pull-right">...</div>
  ```

* 内容区域居中

  ```html
  <div class="center-block">...</div>
  ```

* 清除浮动

  ```html
  <div class="clearfix">...</div>
  ```

* 显示或隐藏

  ```html
  <div class="show">...</div>
  <div class="hidden">...</div>
  ```

* 隐藏元素
  >使用.sr-only可以针对除了屏幕阅读器之外的所有设备隐藏一个元素

* 图片替换
  >使用.text-hide 可以将页面元素所包含的文本内容替换为背景图。也就是隐藏
  文字但是标签所在的区域大小不变

  ```html
  <h1 class="text-hide">Custom heading</h1>
  ```

## bootstrap响应式设计

### bootstrap响应式添加标签

* Bootstrap是移动设备优先的。针对移动设备的样式融合进了框架的每个角落，而不是一个单一的文件。
* 为了确保适当的绘制和触屏缩放，需要在< head>之中添加viewport元数据标签。

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

* 在移动设备浏览器上，通过为viewport meta标签添加user-scalable=no可以禁用其缩放（zooming）功能。这样禁用缩放功能后，用户只能滚动屏幕，就能让你的网站看上去更像原生应用的感觉。**注意** 这种方式我们并不推荐所有网站使用，还是要看你自己的情况而定！

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  ```

* **响应式图片:** 通过添加.img-responsive class可以让Bootstrap 3中的图片对响应式布局的支持更友好。其实质是为图片赋予了max-width: 100%; 和height: auto;属性，可以让图片按比例缩放，不超过其父元素的尺寸。

  ```html
  <img src="..." class="img-responsive" alt="Responsive image">
  ```

### bootstrap响应式类

| | 超小屏幕 手机(<768px) |小屏幕 平板(≥768px)|中等屏幕 桌面(≥992px)|大屏幕 桌面(≥1200px)|
| :------------- | :------------: | :------------: | :------------: | :------------: |
| .visible-xs      | 可见      | 隐藏      | 隐藏      | 隐藏      |
|.visible-sm | 隐藏 | 可见 | 隐藏 | 隐藏|
|.visible-md | 隐藏 | 隐藏 | 可见 | 隐藏|
|.visible-lg | 隐藏 | 隐藏 | 隐藏 | 可见|
|.hidden-xs | 隐藏 | 可见 | 可见 | 可见|
|.hidden-sm |可见 | 隐藏 | 可见 | 可见|
|.hidden-md |可见 | 可见 | 隐藏 | 可见|
|.hidden-lg | 可见 | 可见 | 可见 | 隐藏|



### bootstrap禁用响应式步骤

1. 移除（或者不要添加）viewport <meta>。

2. 通过为.container设置一个width值从而覆盖框架的默认width设置，例如width: 970px !important;。确保这些设置全部放在默认的Bootstrap CSS后面。可以略去!important 。

3. 如果使用了导航条，需要移除所有导航条的折叠和展开行为。对于栅格布局，额外增加.col-xs-* classe或替换掉.col-md-* 和.col-lg-* 。不要担心，针对超小屏幕设备的栅格系统能够在所有分辨率的环境下展开。

4. 针对IE8需要额外引入Respond.js文件 （由于仍然有媒体查询代码，因此还需要做处理）。这样就禁用了Bootstrap对小屏幕设备的响应式支持。
