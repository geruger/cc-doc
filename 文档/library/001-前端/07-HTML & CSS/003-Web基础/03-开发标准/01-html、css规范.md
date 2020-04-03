## 文件命名规范
>文件名称统一用英文字母、数字和下划线的组合，其中不得包含汉字、空格和特殊字符

命名原则的指导思想：
1. 使得你自己和工作组的每一个成员能够方便的理解每一个文件的意义，
2. 当我们在文件夹中使用“按名称排例”的命令时，同一种大类的文件能够排列在一起，以便我们查找、修改、替换、计算负载量等等操作

* HTML 的命名原则
    1. 引文件统一使用 index.htm index.html index.asp 文件名（小写）
    2. 各子页命名的原则首先应该以栏目名的英语翻译取单一单词为名称。例如：  
          关于我们 \ aboutus    
          信息反馈 \ feedback       
          产 品 \ product    
          如果栏目名称多而复杂并不好以英文单词命名，则统一使用该栏目名称拼音或拼音的首字母表示；

* 图片的命名规范
图片的名称分为头尾两部分，用下划线隔开，头部分表示此图片的大类性质
    * 放置在页面顶部的广告、装饰图案等长方形的图片取名： banner
    * 标志性的图片取名为： logo
    * 在页面上位置不固定并且带有链接的小图片我们取名为 button
    * 在页面上某一个位置连续出现，性质相同的链接栏目的图片我们取名： menu
    * 装饰用的照片我们取名： pic
    * 不带链接表示标题的图片我们取名： title
```
比如：banner_sohu.gif  banner_sina.gif  menu_aboutus.gif  menu_job.gif  title_news.gif
logo_police.gif  logo_national.gif  pic_people.jpg
```




## 代码规范
### html编码规范
1. head 区是指 html 代码的<head>和</head>之间的内容。
  * 必须加入的标签
      * 公司版权注释 <!--- the site is designed by ehm,inc 07/2005 --->
      * 网页显示字符集
            * 中文：`<meta charset=utf-8">`
      * 网页制作者信息 `<meta name="author" content="webmaster@maketown.com">`
      * 网站简介 `<meta name="description" content="xxxxxxxxxxxxxxxxxxxxxxxxxx">`
      * 搜索关键字 `<meta name="keywords" content="xxxx,xxxx,xxx,xxxxx,xxxx,">`
      * 网页标题 `<title>xxxxxxxxxxxxxxxxxx</title>`
  * 可以选择加入的标签
      * 设定网页的到期时间。一旦网页过期，必须到服务器上重新调阅。
      ```
      <meta http-equiv="expires" content="wed, 26 feb 1997 08：21：57 gmt">
      ```
      * 禁止浏览器从本地机的缓存中调阅页面内容。
      ```
      <meta http-equiv="pragma" content="no-cache">
      ```
      * 用来防止别人在框架里调用你的页面。
      ```
      <meta http-equiv="window-target" content="_top">
      ```
      * 自动跳转。
      ```
      <meta http-equiv="refresh" content="5;url=http：//www.yahoo.com">
      ```
      5 指时间停留 5 秒
      * 网页搜索机器人向导。用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。
      ```
      <meta name="robots" content="none">
      ```
        content 的参数有 all,none,index,noindex,follow,nofollow。默认是 all。
      * 收藏夹图标
      ```
      <link rel = "shortcut icon" href="favicon.ico">
      ```
      * 所有的 javascript 的调用尽量采取外部调用.
      ```
      <script language="javascript" src="script/xxxxx.js"></script>
      ```
      * 附<body>标签：
      ```
      <body>标签不属于 head 区，这里强调一下，为了保证浏览器的兼容性，必须设置页面背景<body
      bgcolor="#ffffff">
      ```
2. 字体要求和设置
    * 通用字体设置： `font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;`
    * PC端字体要求：
        * Windows 使用 `微软雅黑` 字体
        * Mac 使用`苹方` 字体
    * 移动端字体要求
        * ios 默认中文字体是Heiti SC、英文字体是Helvetica
        * android 默认中文字体是Droidsansfallback、英文和数字字体是Droid Sans
        * 各个手机系统有自己的默认字体，且都不支持微软雅黑
        * 如无特殊需求，手机端无需定义中文字体，使用系统默认
        * 英文字体和数字字体可使用 Helvetica ，三种系统都支持

    * 推荐参考字体
        * pc端： “Microsoft Yahei”,”微软雅黑”,”宋体”,Tahoma,Arial,Helvetica,STHeiti
        * 手机端：Arial,Helvetica,sans-serif



### css 书写规范  

[清除默认样式点击使用](https://github.com/allcky/u-reset.css/blob/master/u-reset.css)

1. 协作开发及分工: 项目搭建者会根据各个模块,同时根据页面相似程序,事先写好大体框架文件,分配给前端人员实现内部结构&表现&行为;
2. 共用css文件(清除默认样式等)由项目搭建者提供,协作开发过程中,每个页面请务必都要引入,此文件包含 reset 及头部底部样式, 此文件不可随意修改;
2. class与id 的使用: id 是唯一的,class 是可以重复的,所以id仅使用在大的模块上,class可用在重复使用率高的地方; id原则上都是由项目搭建者分发框架文件时命名的;
4. class 与 id 命名:大的框架命名比如 header/footer/wrapper/left/right 之类的由项目搭建者统一命名,避免使用中文拼音,尽量使用简易的单词组合; 总之, 命名要语义化, 简明化.

5. 规避 class 与 id 命名:重复使用率高的命名, 请以自己代号加下划线起始, 比如 bao_clear;

6. css 属性书写顺序, 建议遵循 布局定位属性-->自身属性-->文本属性-->其他属性. (尽量保证同类属性写在一起.)
>属性列举: 布局定位属性主要包括: margin、padding、float（包括clear）、position（相应的top,right,bottom,left）、display、visibility、overflow 等；自身属性主要包括: width& height & background & border; 文本属性主要包括：font、color、text-align、text-decoration、text-indent等；其他属性包括: list-style(列表样式)、vertical-vlign、cursor、z-index(层叠顺序) 、zoom 等.所列出的这些属性只是最常用到的.

7. 书写样式代码前, 考虑并提高样式重复使用率;

8. 充分利用 html 自身属性及样式继承原理减少代码量

9. 样式表中中文字体名, 请务必转码成 unicode 码, 以避免编码错误时乱码;
10. 背景图片请尽可能使用 sprite 技术, 减小 http 请求, 考虑到多人协作开发, sprite 按模块制作;
11. 使用 table 标签时(尽量避免使用 table 标签), 请不要用 width/height/cellspacing/cellpadding 等 table属性直接定义表现 , 应尽可能的利用 table 自身私有属性分离结构与表现 ,如thead,tr,th,td,tbody,tfoot,colgroup,scope;(cellspaing 及 cellpadding 的 css 控制方法 :table{border:0;margin:0;border-collapse:collapse;} table th, table td{padding:0;} , base.css 文件中我会初始化表格样式)
15. 减少使用影响性能的属性, 比如 position:absolute || float ;
16. 必须为大区块样式添加注释, 小区块适量注释;

#### 常用类名和id的命名

| 命名部分                 | 命名     | 命名部分 | 命名              |
| ------------------------ | -------- | -------- | ----------------- |
| 头                       | header   | 内容     | content/container |
| 尾                       | footer   | 导航     | nav               |
| 侧栏                     | sidebar  | 栏目     | column            |
| 页面外围控制整体布局宽度 | wrapper  | 左右中   | left right center |
| 登陆条                   | loginbar | 标志     | logo              |
| 广告                     | banner   | 页面主体 | main              |
| 热点                     | hot      | 新闻     | news              |
| 下载                     | download | 子导航   | subnav            |
| 菜单                     | menu     | 子菜单   | submenu           |
| 搜索                     | search   | 友情链接 | friendlink        |
| 页脚                     | footer   | 版权     | copyright         |
| 滚动                     | scroll   | 内容     | content           |
| 标签页                   | tab      | 文章列表 | list              |
| 提示信息                 | msg      | 小技巧   | tips              |
| 栏目标题                 | title    | 加入     | joinus            |
| 指南                     | guild    | 服务     | service           |
| 注册                     | regsiter | 状态     | status            |
| 投票                     | vote     | 合作伙伴 | partner           |

### 图片规范

1. 所有页面元素类图片均放入 img 文件夹, 测试用图片放于 img/demoimg 文件夹;
3. 命名全部用英文字母 || 数字 || _ 的组合，其中不得包含汉字 || 空格 || 特殊字符；尽量用易懂的词汇, 便于团队其他成员理解; 另, 命名分头尾两部分, 用下划线隔开, 比如 ad_left01.gif || btn_submit.gif;
4. 在保证视觉效果的情况下选择最小的图片格式与图片质量, 以减少加载时间,使用的图片一定要经过压缩处理;
5. 尽量避免使用半透明的 png 图片(若使用, 请参考 css 规范相关说明);
6. 运用 css sprite 技术集中小的背景图或图标, 减小页面 http 请求, 但注意, 请务必在对应的 sprite psd 源图中划参考线, 并保存至 img 目录下.

### 注释规范 （给一部分内容做注释处理的时候，开始和结束都要有）

1. html 注释: 注释格式 `<!--这儿是注释-->`;
2. css 注释: 注释格式 `/*这儿是注释*/`;
     * 文件头部需要写清楚文件的用途、作者、创建日期、版本（可选）
3. 注释需要表述清楚，表明代码块的总用区域、功能。
