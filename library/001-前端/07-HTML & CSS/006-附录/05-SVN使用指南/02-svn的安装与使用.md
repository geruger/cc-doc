## SVN使用环境  

使用SVN管理源代码，必须有2套环境  

1. 服务器  
用来存储客户端上传的源码  
一般都是在Windows环境下安装Visual SVN Server  
大部分情况下，不是由开发人员搭建SVN服务器  
2. 客户端  
用来提交、回退、修改、下载等操作  

### 在Windows安装Visual SVN Server  

下载Visual SVN Server安装包  
打开安装包 --> next --> 同意协议 --> next --> 选择默认选项（安装SVN控制台）--> next --> 选择第一个按钮（标准版）--> next --> location：安装路径 Repositories：仓库路径 server Port：端口 旁边的https://选项不勾选（因为一般SVN都是在局域网，不会有安全问题）--> next -->Install --> 完成  
![svn使用说明图](amWiki/images/svn1.gif)　　  

### 创建SVN仓库

* 打开Visual SVN Server  
* 右击Repositories --> 新建 --> Repository --> 设置仓库名称 --> 下一步 --> 选择第一项Enpty repository（空的仓库）--> 下一步 --> 设置访问权限（Nobody has access<无人能访问>、All Subversion users have Read/Write access<所有人可以读写>、Customize permissions<自定义访问>）因为是初始化仓库，所以先设置为没人能访问 --> 下一步 --> 完成  
![svn使用说明图](amWiki/images/svn2.gif)　
　
### SVN仓库配置

在新建的仓库中新建2个文件夹（Code、Doc）：新建 --> Folder --> 文件夹名称 --> 完成  
* 创建用户：右击Users --> Create user --> User name：用户名 Password：密码 Confirm password：确认密码 --> 完成  
* 创建用户组（iOS、Android）：右击Groups --> Create Group --> Group name：组名 --> Add：增加成员 --> 完成  
* 配置仓库用户权限：右击仓库 --> Properties --> Add：添加成员或组 --> Permissions：设置权限（NO Access<无权限>、Read Only<只读>、Read/Write<可读可写>）--> 应用  
* 配置完成  
![svn使用说明图](amWiki/images/svn3.gif)　

###测试SVN仓库链连接是否正常

连接仓库分为测试连接和远程连接2种  
* 测试连接：也叫本地连接，就是在搭建SVN的服务器上测试是否可以连接，步骤如下：  
* 右键仓库 --> Copy URL to Clipboard --> 打开浏览器 --> 在地址栏粘贴（我这边的地址：http://yeshaoji-ef1f42/svn/test/）并回车 --> 输入用户名密码 --> 这样就连接上仓库了  
![svn使用说明图](amWiki/images/svn4.gif)　

* 远程连接：测试完毕后就可以将地址发放给成员使用了  
 * 服务器地址获取方式  
   在服务器端打开命令行工具 --> $ ipconfig --> IP Address就是我们服务器地址  
 * 拼接链接地址  
   格式：http://服务器地址/SVN仓库路径 （比如我的：http://172.16.153.128/svn/test/）
使用者打开浏览器 --> 在地址栏粘贴并回车 --> 输入用户名密码 --> 这样就连接上仓库了  
![svn使用说明图](amWiki/images/svn5.gif)　

### 管理者初始化项目

* 将远程仓库下载到本地  
进入我们需要放置的文件件下  
`$ cd /Users/yeshaojian/Desktop/SVN/mgr`  
* 连接并下载  
`$ svn checkout 仓库路径 --username=用户名 --password=密码`  
下载成功后，在我们的文件夹下会出现下载下来的仓库，仓库里面有.svn的隐藏文件（显示和隐藏mac上文件的方法）  

* 进入本地仓库  
- $ cd 本地仓库目录（就是有.svn隐藏文件的目录）  
- 创建文件 main.m    
- `$ touch main.m`  
* 查看文件状态    
- `$ svn status`  

说明：    
1. ?表示该文件不受SVN管理  
2. A表示该文件受SVN管理   
3. M表示该文件被修改   
将文件添加到svn管理中    
`$ svn add main.m （也可使用 $ svn add * <表示提交所有文件>）`  
将main.m文件提交到远程仓库  
`$ svn commit main.m -m "注释"`  
![svn使用说明图](amWiki/images/svn6.gif)　  

新成员使用SVN和多人开发

### 新成员篇：

第一次加入项目需要进行下面操作   
获取到SVN账号与密码与远程仓库路径  
连接远程仓库并将仓库下载到本地  

* 进入我们需要放置的文件件下  
`$ cd /Users/yeshaojian/Desktop/SVN/newTest`  
* 连接并下载  
`$ svn checkout 仓库路径 --username=用户名 --password=密码`  
* 添加文件  
`$ touch test1.m test2.m test3.m  `
* 查看文件状态  
`$ svn status  `
* 将不受SVN管理的文件添加到管理中  
`$ svn add test1.m test2.m test3.m`
* 将文件提交到远程仓库  
`$ svn commit test1.m test2.m test3.m -m "注释" 或者 $ svn commit -m "注释"（不写表示全部提交）`  
![svn使用说明图](amWiki/images/svn7.gif)　

在后面的开发中（多人开发）就只根据需要提交代码就可以了：    
### 管理者篇：  
管理者加入开发步骤：    
- 进入我们需要放置的文件件下  
`$ cd /Users/yeshaojian/Desktop/SVN/mgr`  
- 更新代码  
`$ svn update`  
- 在test1.m文件中修改文件内容，上传服务器  
`$ svn commit -m "注释"`  
![svn使用说明图](amWiki/images/svn8.gif)　

### 新成员篇：  

* 进入我们需要放置的文件件下      
`$ cd /Users/yeshaojian/Desktop/SVN/newTest`  
* 新成员更新服务器上的代码到本地    
`$ svn update`    
* 提交代码到远程仓库    
`$ svn commit -m "注释"`  
注意：每次要修改前先更新一下代码再进行修改。  
![svn使用说明图](amWiki/images/svn9.gif)　

### SVN命令行方式删除文件

SVN不能使用普通的右键删除方式删除文件  
* 使用命令行删除  
`$ svn remove test3.m`
* 为确认文件被删除，查看下状态   
`$ svn status`  

说明：   
1. ?表示该文件不受SVN管理    
2. A表示该文件受SVN管理  
3. M表示该文件被修改  
4. D表示该文件已被删除  
* 提交更改  
`$ svn commit -m "删除了test3.m文件"`  
* 别的成员修改前需要更新代码，才能继续操作  
`$ svn update`  
![svn使用说明图](amWiki/images/svn10.gif)　  

### SVN一些命令行简写  

最常用的简写  
- checkout --> co  
- status --> st  
- commit --> ci  
- update --> up  
![svn使用说明图](amWiki/images/svn11.gif)　  

### SVN版本查看和回退  

* SVN查看版本信息很简单，使用下面指令就可以      
 - `$ svn log`    
SVN中有2中恢复或回退的情况，下面会介绍：    
* 情况一：我们本地修改了文件，但还没有提交到服务器    
 - 解决方法：$ svn revert 需要恢复的文件    
 ![svn使用说明图](amWiki/images/svn12.gif)　   

 * 情况二：回退到以前的版本
  - 首先要先更新本地版本到最新版
 `$ svn update 版本`
  - 解决方法：
  1. 查看历史版本
 `$ svn log`
  2. 合并版本
  `$ svn merge -r版本:版本 .（比如现在最新版本为9 --> $ svn merge -r9:r5 .）`  
 说明：这边会提示“U”标识，表示该文件为合并状态    
 注意：这边最后面的 "." 要敲，表示当前目录    
 提交到远程服务器    
 `$ svn commit -m "注释"`   
 ![svn使用说明图](amWiki/images/svn13.gif)　     

### 多人开发常见冲突解决  

场景描述：多个人同时修改了同一个文件的同一个地方，且有人已经提交到远程仓库，后面的人还在继续开发，且后面开发的人不是最新版本了，所以无法提交（SVN中如果远程服务器版本大于要提交的版本，就无法提交），这样的情况下就需要通过下面的步骤解决：  

* 先获取最新版本（这时会提示冲突，并给出了解决方案，因为我们修改了同一文件的同一个地方）  
`$ svn update`  
提示：在提示解决方案中，经常用到的是以下几项  
- (p) postpone：延迟处理 (最常用，先不解决)  
- (mc) mine-conflict：以我的为准，覆盖掉仓库  
- (tc) theirs-conflict：以原创仓库为准，覆盖掉本地版本  
- (s) show all options：显示所有选项   

* 方式一：这边选择mc（以我的为准）--> 回车  
说明：如果看到显示了大写的 "G" 就说明冲突已经解决   
 - 提交     
 svn commit -m "覆盖了远程仓库代码，解决冲突"  
* 方式二：这边选择tc (以远程版本为准，覆盖掉本地版本) --> 回车  
 - 提交   
`svn commit -m` "添加了某某属性，但不成功，稍后添加"  
注：因为此次提交不会有提示，因为本地版本和远程版本一样  
* 方式三：这边选择p（延迟处理）--> 回车  
这时我们的本地仓库内会多生成3个文件，这是我们需要手动解决相应的问题  
打开冲突文件，根据冲突提示进行相应修改  
修改完成后，告诉远程仓库，我们已经解决冲突  
`$ svn resoved` 冲突文件名    
 - 提交  
`$ svn commit -m `"手动解决了冲突"  

### SVN图形化管理软件（Cornerstone）使用  

Cornerstone界面介绍  
![svn使用说明图](amWiki/images/svn14.png)　  

* 初始化项目管理  
 - 连接SVN服务器 --> 左下角（REPOSITORIES）栏的 “+” 号 --> 选择HTTP Server --> 填写相应信息后点击Add  
 ![svn使用说明图](amWiki/images/svn15.gif)　  

  - 下载远程仓库内容到本地 --> 点击左上角的Check out --> 选择需要保存的位置 --> 打开下面的隐藏选项 --> 将Format选项调制最高（不然可能出现未知错误）--> check out --> 完成   
  ![svn使用说明图](amWiki/images/svn16.gif)　  
 - 创建项目 --> 文件存放位置为SVN的工作区的Code中  
 ![svn使用说明图](amWiki/images/svn17.gif)　  
 - 忽略不需要管理的文件 --> Cornerstone --> 点击Commit --> 在弹出的对话框中选择ignore(忽略) --> 打开项目中的.xcodeproj --> project.xcworkspace --> 删除2个xcuserdate文件 --> 提交 --> 修改项目中的任意地方（比如打个断点或者声明变量等） --> 运行项目 --> 回到Cornerstone --> 会发现刚刚删除的2个文件又出现了 --> 分别右击选择Ignore --> 然后更新仓库版本 --> 提交  
 ![svn使用说明图](amWiki/images/svn18.gif)　   
 - 测试文件是否忽略成功 --> 随便修改任意文件 --> 点击Source Control --> Commit --> 发现只有我们修改的文件需要提交怎么已经成功忽略文件   
 ![svn使用说明图](amWiki/images/svn19.gif)　    
 - 这样项目的初始化就完成了，以后就只需要用XCode来进行版本控制操作就可以了，不需要再进行忽略文件操作
