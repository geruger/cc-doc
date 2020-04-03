# git的安装  

## 一. git的下载  
请到git的官网上直接下载，下面是官网地址和跳转链接：  

http://git-scm.com/download/    
[点击这里可以直接跳转到git下载页面](http://git-scm.com/download/)   

## 二. 测试笔记本是否安装git

1.使用WIN+R快捷键，输入cmd，回车，打开Dos命令行；  
2.输入git或者git --version，回车；  
![git安装教程](amWiki/images/git11.png)   
注意：上图说明该笔记本上未配置git  

## 三. git的安装  
1. 下载好git安装包之后，直接双击安装，点击next  
![git安装教程](amWiki/images/git12.png)  
2. 安装的路径，默认是在C盘，你也可以自定义路径；  
![git安装教程](amWiki/images/git13.png)  
3. 点击下一步，这些是默认勾选的，如果你不需要Git Bash Here和Git GUI Here，可以不勾选这两项；  
![git安装教程](amWiki/images/git14.png)  
4. 默认文件夹为Git，建议不要修改，点击下一步；  
![git安装教程](amWiki/images/git15.png)  
5. 如果用于普通使用，勾选第一项；如果个人使用，可勾选第二项；  
![git安装教程](amWiki/images/git16.png)  
6. 默认勾选第一项；  
![git安装教程](amWiki/images/git17.png)  
7. 默认勾选第一项；  
![git安装教程](amWiki/images/git18.png)  
8. 默认勾选第一项，点击next；  
![git安装教程](amWiki/images/git19.png)  
9. 默认勾选第一项，点击Install，进行安装；  
![git安装教程](amWiki/images/git20.png)   
10. 等待安装完成；  
![git安装教程](amWiki/images/git21.png)  

## 四. 接下来进行git的环境变量配置  
1. 找到Git文件夹，进入到cmd文件夹目录下，复制该文件路径；
以我的地址为例：C:\Program Files\Git\cmd；  
![git安装教程](amWiki/images/git22.png)     
注意：路径一定要到cmd这个文件夹下；  
2.  右键我的电脑>点击属性>点击高级系统设置  

  * 进入系统属性>点击高级>选中系统变量下的Path点击编辑>将刚才复制的路径粘贴到变量值后面>点击确定>确定>确定即可；   
  * 以我的为例：追加;C:\Program Files\Git\cmd;  
注意：  
  - 在添加Path路径时，如果之前变量值的末尾以英文分号结尾，可以直接添加，否则一定记得先添加添加英文分号，再追加新增的变量值；  
  - 也可以养成这样的习惯，每次添加新的变量值之后都以英文分号结尾；  
  ![git安装教程](amWiki/images/git23.png)  

# 五. 测试git环境是否配好  
1. 记得重新打开cmd，输入git命令即可，如下图说明配置成功；  
![git安装教程](amWiki/images/git24.png)  
> 一定要重新打开cmd，不然之前打开的cmd还是找不到git;  

2. 或者输入git --version，如下所示说明配置成功；  
![git安装教程](amWiki/images/git25.png)  
注意： 输入git -v或者git -version都是无效命令，git --version才有效！！！    
![git安装教程](amWiki/images/git26.png)   
