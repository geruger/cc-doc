# Amaze UI
Amaze UI 是一个针对 HTML5 开发的轻量级、模块化、移动优先的跨屏前端框架，通过拆分、封装了一些常用的网页组件，比如轮播图框、文字框等等组件。

[AmazeUI官网及下载](http://amazeui.org/)
[AmazeUI官方文档](http://amazeui.org/widgets/accordion)
[W3C文档](https://www.w3cschool.cn/amazeui/)

兼容性：
由于Amaze UI 面向现代浏览器开发，因此，Amaze UI 对 IE 8/9 等浏览器只提供有限的支持。

## 下载

文件结构：
```
|-- assets
|   |-- css
|   |   |-- amazeui.css             // Amaze UI 所有样式文件
|   |   |-- amazeui.min.css           // 约 42 kB (gzipped)
|   |   |-- amazeui.flat.css        // 圆角版 Amaze UI CSS
|   |   `-- app.css
|   |-- i                           // 图片文件夹
|   |   |-- favicon.png
|   `-- js
|       |-- amazeui.js                //  Amaze UI 所有js
|       |-- amazeui.min.js                // 约 56 kB (gzipped)
|       |-- amazeui.ie8polyfill.js        // IE8 polyfill
|       |-- amazeui.widgets.helper.js
|       |-- amazeui.widgets.helper.min.js
|       |-- app.js
|       `-- handlebars.min.js
|-- blog.html      // 博客页面模板
|-- index.html      // 空白 HTML 模板；
|-- landing.html    //  Landing Page 模板
|-- login.html      // 登录界面模板
|-- sidebar.html    // 带边栏的文章模板
`-- admin-*.html     // 简单的管理后台界面
```

## 使用
框架使用方法详见各个功能的html模板，如登录、文件上传、博客页面、后台管理等模板。

|页面| CSS组件说明 |js插件组件说明|
|展示页面| 网格 图标 按钮 表单 文章页 导航条 辅助类|下拉组件 滚动侦测|
|登录页面| 网格 图标 按钮 按钮组 表单| |
|博客页面| 网格 等宽布局 图标 按钮 面板 列表 分页|下拉组件 |
|博客侧栏页面| 网格 文章页 评论列表 按钮 图标 列表 辅助类 |侧边栏组件 |

引入相关依赖文件时也可采用官方CDN：
```
http://cdn.amazeui.org/amazeui/2.7.2/css/amazeui.css
http://cdn.amazeui.org/amazeui/2.7.2/css/amazeui.min.css

http://cdn.amazeui.org/amazeui/2.7.2/js/amazeui.js
http://cdn.amazeui.org/amazeui/2.7.2/js/amazeui.min.js

http://cdn.amazeui.org/amazeui/2.7.2/js/amazeui.ie8polyfill.js
http://cdn.amazeui.org/amazeui/2.7.2/js/amazeui.ie8polyfill.min.js

http://cdn.amazeui.org/amazeui/2.7.2/js/amazeui.widgets.helper.js
http://cdn.amazeui.org/amazeui/2.7.2/js/amazeui.widgets.helper.min.js
```


### 使用方法
1. 在[组件库](http://amazeui.org/widgets/accordion)中找到自己需要的布局结构，拷贝演示中的代码，粘贴到 Amaze UI HTML 模板 (即下载的amaze压缩包html文件) `<body>` 区域；
2. 引入 Handlebars 库(`handlebars.min.js`)及 `amui.widget.helper.js`
3. 渲染数据 （以下以折叠面板accordion 举例）
    1. 将组件调用代码写在模板中：
    ```html
    <script type="text/x-handlebars-template" id="my-tpl">
        {{>accordion accordionData}}
    </script>
    ```
    2. 获取模板内容，传入数据渲染并插入到页面中。其中`data`字段中的`accordionData`即为渲染折叠面板所需要的数据
    ```js
    $(function() {
        var $tpl = $('#my-tpl'),
            tpl = $tpl.text(),
            template = Handlebars.compile(tpl),
            data = {
                accordionData: {
                    "theme": "basic",     // 主题
                    // 内容（*为必备项）
                    "content": [  
                        {
                            "title": "标题一",   // 标题，支持 html
                            "content": "内容一",  // 内容，支持 html
                            "active": true,      // 是否激活当前面板，如果需要激活则设置为 true，否则可不用设置此项
                            "disabled": null // 是否禁用当前面板，如果需要禁用则设置为 true，否则不用设置此项，禁用以后此面板将保持默认状态，不响应用户操作
                        },
                        {
                            "title": "标题二",
                            "content": "内容二"
                        },
                        {
                            "title": "标题三",
                            "content": "内容三"
                        }
                    ]
                }
            },
            html = template(data);

        $tpl.before(html);
    });
    ```
4. 其他模板使用方法与上文折叠面板相同，只需要改变`data`中的渲染数据即可。可参考 Amaze UI HTML 模板 里的 `widget.html` 文件    


