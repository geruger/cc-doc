# webstrom配置
### 一、主题配色
主题设置
方法：File -> Settings -> Appearance & Behavior -> Appearance ->Theme.


![安装界面](amWiki/images/wb3.jpg)

配色设置
方法：File -> Settings -> Editor -> Colors & Fonts->Scheme.（注：如果你是从从Sublime text3转过来的朋友，比较偏好monokia配色的，可以参见此文 webstorm入门1-主题和配色）

![安装界面](amWiki/images/wb4.jpg)
### 二、打开多个项目
WebStorm默认情况下一次只能打开一个项目，这点很不爽，其实是可以设置的。（注：如果你一开始就建了项目再来配置，记得要把左边显示的根路径移除，不然可能点击Add Content Root配置后也不一定能生效）
方法：File -> Settings -> Directories -> Add Content Root 中添加你当前的工程目录。


![安装界面](amWiki/images/wb2.jpg)
### 三、配置webserver选项（端口）
方便其他ip设备访问(如手机等测试效果）
方法：File -> Settings -> Build,Execution,Development -> Debugger ->port


![安装界面](amWiki/images/wb8.jpg)
### 四、设置文件的默认编码
方法：File -> Settings -> Editor -> File Encodings -> IDE Encoding,Project Encoding.
(注：配置前和配置后都可以打开页面，在页面的右下角显示有编码，下面截图右下角就有)


![安装界面](amWiki/images/wb6.jpg)
### 五、快捷键配置
你可以使用默认快捷键配置，也可以根据自己的风格选择配置。习惯eclipse和myeclipse开发的可以配置成eclipse快捷键。
方法：File -> Settings -> Keymap-> Keymaps


![安装界面](amWiki/images/wb5.jpg)
### 六、emmet配置，语法等等
上面提到了快捷键，webstorm自带emmet插件。用过zen coding的人应该都知道，emmet就是zen coding的升级版。当然，webstorm也不是支持所有的emmet语法，不过够用了。可以参考此文Enabling Emmet Support看看具体情况。

如下图，可以看到css自动加浏览器厂商前缀。

![安装界面](amWiki/images/wb7.png)
### 七、行号，换行，参考线
打开页面后，右击页面左边边界，弹窗选项，根据自己需要勾选就是，如下图：


![安装界面](amWiki/images/wb1.png)
###  八、导入导出配置
当你需要在其他电脑的webstorm上也想用自己编码风格时，将配置文件导入重启webstorm即可生效。

导出方法：File -> Export Settings... ->自己选择选项和路径。用默认也可以。

导入方法：File -> Import Settings... ->选择.jar文件路径。

### 九、插件配置
webstorm自带很多插件，你可以根据自己需要配置。我暂时未使用，如果你用到了，可以参考下面的一些文章。

SVN、Git插件配置，CSS预处理语言的预编译、JS 实时压缩等等可以参考此文webstorm入门2-配置

使用css预编译器（sass,less）的朋友,可以省掉gulp、grunt类前端辅助工具,参考此文webstorm入门5-sass、scss、less监听编译

### 十、添加VIM插件

File -> Settings -> Plugins -> Browse repositories -> 搜索vim，对它单击右键Download and install，然后重启IDE就可以了。

### 十一、phper的开发工具
除了webstorm之外，此公司还提供另外一个针对phper的开发工具,phpStorm，主页上说明，phpstorm包括所有webstorm的功能。但是习惯于大括号去方法名在同一行显示，所以还得配置：File -> Settings -> code style -> PHP -> Wrapping and Braces -> Braces placement ->In method declaration : End of line.


### 十二、提示配置
5.在开发js时发现，需要ctrl + return 才能选提示候选项，又需要配置：File -> Setting -> Editor -> Code Completion -> Preselect the first suggestion:’Smart’ 改为 Always

### 十二、注意
Webstorm的调试不支持中文路径中文文件名。
