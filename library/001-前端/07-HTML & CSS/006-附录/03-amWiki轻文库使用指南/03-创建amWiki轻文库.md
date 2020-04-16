# 创建第一个 amWiki 轻文库
环境搭建好之后，我们来创建属于我们自己的第一个 amWiki 轻文库

## 创建 amWiki 轻文库
* 在本地创建一个文件夹
* 将刚才创建的文件夹，添加至 Atom 的项目文件 `Add Project Folder`

  ![添加项目文件](amWiki/images/lx3.png)
* 在刚刚创建的文件夹下创建 `config.json`

  * name，你的文库名称，设置但为空或不设置将显示默认名
  * ver，文本版本号或维护者名号，设置但为空将不显示，注意诺不设置此属性将显示 amWiki 作者
  * logo，logo 的 url，设置但为空或不设置将显示默认 logo
  * colour，自定义颜色，默认为蓝色
  * testing，是否启用接口测试模块，默认值 false

  ```
  {
    "name": "amWiki 轻文库使用指南",
    "ver": "starlee",
    "logo": "amWiki/images/logo.png",
    "colour": "#0085d0",
    "testing": false
   }
  ```
* 通过 `config.json` 配置文件创建轻文库

  > 通过 amWiki轻文库 -> 通过config.json创建轻文库

  ![文件目录](amWiki/images/lx4.png)

  在该项目中，amWiki文件夹放置一些静态文件例如js、css、images。library文件夹放置我们所要书写的文档。
  > 在静态文件中我们一般将所需图片放置到 `images` 文件夹，其他的不做过多操作。当然你也可以通过 **粘贴** ** 复制 ctrl+shift+v**自动创建 assetes 保存图片文件夹

* 预览文件
  * 方法1：使用 `F12` 启动本地服务器，访问项目首页
  * 方法2：使用 amWiki 轻文库 -> 启动本地静态 web 服务器 -> 在浏览器中打开当前文档

  ![启动预览文档](amWiki/images/lx5.png)

> 在此如果不能正常打开文档进行预览。请操作 amWiki轻文库-> 手动更新当前文库当行文件  或者  将电脑相关杀毒软件关闭。

## 文档目录结构

```
  index.html                 // http 访问入口页面
  amWiki/                    // amWiki Web 端程序文件夹
  library/                   // 您的 Markdown 文库目录，所有文件必须使用 .md 格式
     ├ $navigation.md        // amWiki 文库目录导航文件，可自动/手动更新
     ├ 首页.md                // Web 端打开页面时页面页面默认显示的内容
     ├ 001-SublimeText3使用指南     // Markdown 文件夹001
     │   ├ 01-SublimeText3介绍     // 一些 Markdown 文档，支持二级目录  
     │   └ 02-SublimeText3使用
     ├ 002- amWiki轻文库使用指南    // Markdown 文件夹002
     │   ├ 01-amWiki介绍           // 一些 Markdown 文档，支持二级目录
     │   └ 02-amWiki配置环境
     └ 003-...               // 更多 Markdown 文件夹
   (assetes/)                // 如果您粘帖截图，图片文件将自动创建在此处
```

## 如何使用

### 文档界面
![文档界面](amWiki/images/lx6.png)

* 预览。通过上述 创建 amWiki轻文库 -> 预览文件中两种方法打开预览文件。
* 左侧通过文档栏目可以任意切换，你要查看的文档。
* 关键字搜索栏，你可以根据关键字搜索指定的栏目。你也可以点击旁边的搜索按钮，在弹出的搜索页面中根据内容收缩相关文档。
* 如果存在页内目录，可以通过右下角的目录，实现在页面进行快速跳转。
