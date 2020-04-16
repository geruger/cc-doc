# Layui
Layui是一个模块化白那些的前端UI框架，兼容人类正在使用的全部浏览器（IE6/7除外）。可作为 PC 端后台系统与前台界面的速成开发方案，也可单独使用其中某一模块方便开发特定功能。

[Layui官网及下载](https://www.layui.com/)
[Layui官方文档](https://www.layui.com/doc/)
[W3C文档](http://www.dosrun.com/layui/)

## 下载
* 直接下载
[Layui下载地址](https://res.layui.com/static/download/layui/layui-v2.4.5.zip)

文件结构：
```
├─css      //css目录
│  │─modules       //模块css目录（一般如果模块相对较大，我们会单独提取，比如下面三个：）
│  │  ├─laydate
│  │  ├─layer
│  │  └─layim
│  └─layui.css     //核心样式文件
├─font         //字体图标目录
├─images       //图片资源目录（目前只有layim和编辑器用到的GIF表情）
│─lay      //模块核心目录
│  └─modules       //各模块组件
│─layui.js     //基础核心库
└─layui.all.js     //包含layui.js和所有模块的合并文件
```

* npm安装
```js
npm install layui-src
```

## 使用
### 按需模块化引入
需要什么功能，引入什么模块，更加节省资源
```html
<head>
    <!-- 引入核心样式文件 layui.css -->
  <link rel="stylesheet" href="layui/css/layui.css">
</head>
<body>
    <!-- 引入基础核心库 layui.js -->
    <script src="layui/layui.js"></script>
    <script>
        // 引入 'layer'、'form'模块
        layui.use(['layer', 'form'], function(){
            var layer = layui.layer, form = layui.form;
            
            layer.msg('Hello World');
        });
    </script> 
</body>
```


### 全部引入
非模块化引入，即所有模块一次性加载
```html
<head>
    <!-- 引入核心样式文件 layui.css -->
    <link rel="stylesheet" href="layui/css/layui.css">
</head>
<body>
    <!-- 引入基础核心库 layui.js -->
    <script src="layui/layui.all.js"></script>
    <script>
        // 由于模块都一次性加载，因此不用执行 layui.use() 来加载对应模块，直接使用即可
        
        var layer = layui.layer, form = layui.form;
        
        layer.msg('Hello World');
        
    </script> 
</body>
```

## 模块

模块名 | 功能
---|---
**layer** | **弹出框**
**table**| **表格**
**form** | **表单**
**upload** | **文件上传**
**element**| **元素操作(选项卡、导航、面包屑等)**
laydate | 日期时间选择
laypage | 分页
laytpl | 前端模板引擎 (数据渲染)
layim | 即时通讯
colorpicker | 颜色选择
slider | 滑块
rate | 评分
carousel | 轮播图
flow | 流加载 (信息、图片懒加载)
util | 工具集 (倒计时，回到顶部固定块)
code | 代码修饰器 (修改pre标签样式用以展示代码)


Layui常用来制作后台页面，常用内容包含： 栅格系统、Layer弹出模块、table表格模块、form表单模块、upload文件上传模块、element元素操作模块。

[Layui简单后台实现](https://www.layui.com/demo/layuiAdmin.html)
[官方提供后台模板解决方案](https://www.layui.com/admin/pro/#/)


## Layer 弹出层的独立使用
弹出层`Layer`是Layui中最著名的一个模块，用来实现Web弹层。前台页面经常使用的弹框提示(例如登录、退出、警告提示等)，都可以借助Layer来实现。

[Layer官网](http://layer.layui.com/)
[独立版本Layer下载](http://res.layui.com/static/download/layer/layer-v3.1.1.zip)

![后台模板](assets/007/01/01-1545470121000.png)



### 使用

**需要引入jQuery 1.8+**

```html
<head>
    <script src="http://cdn.bootcss.com/jquery/1.12.3/jquery.min.js"></script>
</head>
<body>
    <!-- 引入基础核心库 layer.js -->
    <script src="layer/layer.js"></script>
    <script>
        // 事件需自己绑定，以下只展现调用代码

        layer.alert('内容');
    </script> 
</body>
```
