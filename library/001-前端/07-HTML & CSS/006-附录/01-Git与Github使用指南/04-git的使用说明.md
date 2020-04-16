# 1. 创建版本库   
## 1.1版本库  
版本库又名仓库，英文名repository,你可以简单的理解一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改，删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻还可以将文件”还原”。所以创建一个版本库也非常简单，如下我是E盘 目录下新建一个testgit版本库。  
  >$ cd E:(找到E盘)
  $ cd www(假如在www文件夹下)  
  $ mkdir testgit（新建名叫testgit的文件夹）  
  $ cd testgit（找到testgit文件夹）  
  $ pwd （显示当前目录）  
  /e/testgit  

pwd命令用于显示当前目录。在我的电脑上，这个仓库位于/e/testgit  
如果你使用Windows系统，为了避免遇到各种莫名其妙的问题，请确保目录名（包括父目录）不包含中文。  

第二步，通过git init命令把这个目录变成Git可以管理的仓库：  
  >$ git init  
  Initialized empty Git repository in E:/testgit/.git/  

瞬间Git就把仓库建好了，而且告诉你是一个空的仓库（empty Git repository），细心的读者可以发现当前目录下多了一个.git的目录，这个目录是Git来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把Git仓库给破坏了。  
如果你没有看到.git目录，那是因为这个目录默认是隐藏的，用ls -ah命令就可以看见。  
也不一定必须在空目录下创建Git仓库，选择一个已经有东西的目录也是可以的。不过，不建议你使用自己正在开发的公司项目来学习Git，否则造成的一切后果概不负责。  
以上全部步骤在git上操作如下图：  
![git使用说明图](amWiki/images/git31.png)  
电脑磁盘下的.git    
![git使用说明图](amWiki/images/git32.png)  
## 1.2 把文件添加到版本库中    
首先这里再明确一下，所有的版本控制系统，其实只能跟踪文本文件的改动，比如TXT文件，网页，所有的程序代码等等，Git也不例外。版本控制系统可以告诉你每次的改动，比如在第5行加了一个单词“Linux”，在第8行删了一个单词“Windows”。而图片、视频这些二进制文件，虽然也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是只知道图片从100KB改成了120KB，但到底改了啥，版本控制系统不知道，也没法知道。  

不幸的是，Microsoft的Word格式是二进制格式，因此，版本控制系统是没法跟踪Word文件的改动的，前面我们举的例子只是为了演示，如果要真正使用版本控制系统，就要以纯文本方式编写文件。  

因为文本是有编码的，比如中文有常用的GBK编码，日文有Shift_JIS编码，如果没有历史遗留问题，强烈建议使用标准的UTF-8编码，所有语言使用同一种编码，既没有冲突，又被所有平台所支持。  

演示demo:  
我在版本库testgit目录下新建一个记事本文件 readme.txt 内容如下：`Git is a version control system`。    

一定要放到testgit目录下（子目录也行），因为这是一个Git仓库，放到其他地方Git再厉害也找不到这个文件。  

<b>第一步，用命令git add告诉Git，把文件添加到仓库：</b>  
`$ git add readme.txt`  
执行上面的命令，没有任何显示，这就对了，Unix的哲学是“没有消息就是好消息”，说明添加成功。    

<b>第二步，用命令git commit告诉Git，把文件提交到仓库：</b>  
  >$ git commit -m "wrote a readme file"  
  [master (root-commit) cb926e7] wrote a readme file  
   1 file changed, 2 insertions(+)     
   create mode 100644 readme.txt  

如下图：  
![git使用说明图](amWiki/images/git33.png)  
简单解释一下git commit命令，-m后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。  
嫌麻烦不想输入-m "xxx"行不行？确实有办法可以这么干，但是强烈不建议你这么干，因为输入说明对自己对别人阅读都很重要。实在不想输入说明的童鞋请自行Google，我不告诉你这个参数。  
git commit命令执行成功后会告诉你，1个文件被改动（我们新添加的readme.txt文件），插入了两行内容（readme.txt有两行内容）。  
为什么Git添加文件需要add，commit一共两步呢？因为commit可以一次提交很多文件，所以你可以多次add不同的文件，比如：  
> $ git add file1.txt  
  $ git add file2.txt file3.txt  
  $ git commit -m "add 3 files."  

<b>小结:</b>  
初始化一个Git仓库，使用git init命令。  
添加文件到Git仓库，分两步：  
第一步，使用命令git add <file>，注意，可反复多次使用，添加多个文件；  
第二步，使用命令git commit，完成。  
现在我们已经提交了一个readme.txt文件了，我们下面可以通过命令git status来查看是否还有文件未提交，如下：  
![git使用说明图](amWiki/images/git34.png)  
说明没有任何文件未提交，但是我现在继续来改下readme.txt内容，比如我在下面添加一行123456内容，继续使用git status来查看下结果，如下：  
![git使用说明图](amWiki/images/git35.png)  
上面的命令告诉我们 readme.txt文件已被修改，但是未被提交的修改。  
接下来我想看下readme.txt文件到底改了什么内容，如何查看呢？可以使用如下命令：  
git diff readme.txt 如下：  
![git使用说明图](amWiki/images/git36.png)  
git diff顾名思义就是查看difference，显示的格式正是Unix通用的diff格式.  
如上可以看到，readme.txt文件内容从两行Git is a version control system.Git is free software.改成 二行 添加了一行123456内容。  
知道了对readme.txt文件做了什么修改后，我们可以放心的提交到仓库了，提交修改和提交文件是一样的2步(第一步是git add 第二步是：git commit。)  
<b>小结:</b>  
要随时掌握工作区的状态，使用git status命令。  
如果`git status`告诉你有文件被修改过，用git diff可以查看修改内容。   
![git使用说明图](amWiki/images/git37.png)   
# 2.操作追踪  
## 2.1 版本回退  
如上，我们已经学会了修改文件，现在我继续对readme.txt文件进行修改，再修改一次内容为：  
Git is a distributed version control system.  
Git is free software distributed under the GPL.  
继续执行命令如下：  
> $ git add readme.txt  
$ git commit -m "append GPL"  
[master 3628164] append GPL  
 1 file changed, 1 insertion(+), 1 deletion(-)  

 不断对文件进行修改，然后不断提交修改到版本库里，每当你觉得文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在Git中被称为commit。一旦你把文件改乱了，或者误删了文件，还可以从最近的一个commit恢复，然后继续工作，而不是把几个月的工作成果全部丢失。  
现在我已经对readme.txt文件做了三次修改了，那么我现在想查看下历史记录，如何查呢？我们现在可以使用命令 git log演示如下所示：  
![git使用说明图](amWiki/images/git38.png)   
`git log`命令显示从最近到最远的提交日志，我们可以看到2次提交，最近的一次是`append GPL`，最早的一次是wrote a readme file。.如果嫌上面显示的信息太多的话，我们可以使用命令 `git log –pretty=oneline` 演示如下：  
![git使用说明图](amWiki/images/git39.png)  
需要友情提示的是，你看到的一大串类似3628164...882e1e0的是commit id（版本号），和SVN不一样，Git的commit id不是1，2，3……递增的数字，而是一个SHA1计算出来的一个非常大的数字，用十六进制表示，而且你看到的commit id和我的肯定不一样，以你自己的为准。为什么commit id需要用这么一大串数字表示呢？因为Git是分布式的版本控制系统，后面我们还要研究多人在同一个版本库里工作，如果大家都用1，2，3……作为版本号，那肯定就冲突了。  

现在我想使用版本回退操作，我想把当前的版本回退到上一个版本，要使用什么命令呢？可以使用如下2种命令，第一种是：git reset  –hard HEAD^那么如果要回退到上上个版本只需把HEAD^改成 HEAD^^以此类推。那如果要回退到前100个版本的话，使用上面的方法肯定不方便，我们可以使用下面的简便命令操作：git reset  –hard HEAD~100即可。  
未回退之前的readme.txt内容如下：   
![git使用说明图](amWiki/images/git40.png)  
如果想回退到上一个版本就可以使用`git reset`命令：
> $ git reset --hard HEAD^  

再来查看下 readme.txt内容，通过命令cat readme.txt查看  
最后我们用git log再看看现在版本库的状态。  
![git使用说明图](amWiki/images/git41.png)  
现在我想回退到最新的版本:只要上面的命令行窗口还没有被关掉，你就可以顺着往上找啊找啊，找到那个append GPL的commit id是fc632000db...，于是就可以指定回到未来的某个版本：  
>$ git reset --hard fc632000db
HEAD is now at fc632000db append GPL  

版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。  
再看看readme.txt的内容：  
![git使用说明图](amWiki/images/git42.png)  
果然，我胡汉三又回来了。  
Git的版本回退速度非常快，因为Git在内部有个指向当前版本的HEAD指针，当你回退版本的时候，Git仅仅是把HEAD从指向append GPL.
假如我已经关掉过一次命令行或者commit id内容的版本号我并不知道呢？要如何知道commit id内容的版本号呢？可以通过如下命令即可获取到版本号：git reflog 演示如下：  
![git使用说明图](amWiki/images/git43.png)  
`git reflog`用来记录你的每一次命令.  

<b>小结:</b>   
1. HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。  
2. 穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。  
3. 要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。  
## 2.2 工作区与暂存区的区别  
<b>工作区</b>：就是你在电脑上看到的目录，比如目录下testgit里的文件(.git隐藏目录版本库除外)。或者以后需要再新建的目录文件等等都属于工作区范畴。  

<b>版本库(Repository)</b>：工作区有一个隐藏目录.git,这个不属于工作区，这是版本库。其中版本库里面存了很多东西，其中最重要的就是stage(暂存区)，还有Git为我们自动创建了第一个分支master,以及指向master的一个指针HEAD。  

我们前面说过使用Git提交文件到版本库有两步：  

第一步：是使用 `git add` 把文件添加进去，实际上就是把文件添加到暂存区。  

第二步：使用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支上。  

  因为我们创建Git版本库时，Git自动为我们创建了唯一一个master分支，所以，现在，`git commit`就是往master分支上提交更改。你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。    
现在，我们再练习一遍，先对readme.txt做个修改，比如加上一行内容：  
Git is a distributed version control system.  
Git is free software distributed under the GPL.  
Git has a mutable index called stage.  
接着在目录下新建一个文件为test.txt 内容为test  
先用`git status`查看一下状态：  
![git使用说明图](amWiki/images/git44.png)  
Git非常清楚地告诉我们，readme.txt被修改了，而test还从来没有被添加过，所以它的状态是Untracked。  
现在我们先使用`git add `命令把2个文件都添加到暂存区中，再使用git status来查看下状态，如下：    
![git使用说明图](amWiki/images/git45.png)  
接着我们可以使用`git commit`一次性提交到分支上，如下：  
![git使用说明图](amWiki/images/git46.png)  
<b>小结:</b>  
* 暂存区是Git非常重要的概念，弄明白了暂存区，就弄明白了Git的很多操作到底干了什么。  
* 没弄明白暂存区是怎么回事的童鞋，请向上滚动页面，再看一次。    
## 2.3 Git管理修改操作  
Git比其他版本控制系统设计得优秀，因为Git跟踪并管理的是修改，而非文件。什么是修改？比如你新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。  
为什么说Git管理的是修改，而不是文件呢？我们还是做实验。第一步，对readme.txt做一个修改，比如加一行内容：  
Git is a distributed version control system.  
Git is free software distributed under the GPL.  
Git has a mutable index called stage.   
Git tracks changes.  
查看readme.txt内容：  
![git使用说明图](amWiki/images/git47.png)   
然后，添加：  
![git使用说明图](amWiki/images/git48.png)   
然后，再修改readme.txt：  
![git使用说明图](amWiki/images/git49.png)   
提交后，然后查看状态：  
![git使用说明图](amWiki/images/git50.png)   
我们回顾一下操作过程：  
第一次修改 -> git add -> 第二次修改 -> git commit  
你看，我们前面讲了，Git管理的是修改，当你用git add命令后，在工作区的第一次修改被放入暂存区，准备提交，但是，在工作区的第二次修改并没有放入暂存区，所以，git commit只负责把暂存区的修改提交了，也就是第一次的修改被提交了，第二次的修改不会被提交。  
提交后，用git diff HEAD -- readme.txt命令可以查看工作区和版本库里面最新版本的区别：  
![git使用说明图](amWiki/images/git51.png)   
![git使用说明图](amWiki/images/git52.png)   
可见，第二次修改确实没有被提交。  
那怎么提交第二次修改呢？你可以继续`git add`再`git commit`，也可以别着急提交第一次修改，先git add第二次修改，再git commit，就相当于把两次修改合并后一块提交了：  
第一次修改 -> `git add` -> 第二次修改 -> `git add` -> `git commit`  
好，现在，把第二次修改提交了。  
<b>小结:</b>  
现在，你又理解了Git是如何跟踪修改的，每次修改，如果不add到暂存区，那就不会加入到commit中。  
## 2.4 Git撤销修改和删除文件操作  
### 3.4.1 撤销修改  
比如我现在在readme.txt文件里面增加一行 内容为My stupid boss still prefers SVN.我们先通过命令查看如下：
![git使用说明图](amWiki/images/git53.png)   
在准备提交前，发现My stupid boss still prefers SVN这句话有错误，想恢复上一个版本的状态，有如下几种方法可以做修改：  
1. 如果我知道要删掉那些内容的话，直接手动更改去掉那些需要的文件，然后add添加到暂存区，最后commit掉。  
2. 我可以按以前的方法直接恢复到上一个版本。使用`git reset  –hard HEAD^`  
但是现在我不想使用上面的2种方法，我想直接想使用撤销命令该如何操作呢？首先在做撤销之前，我们可以先用 git status查看下当前的状态。如下所示：  
![git使用说明图](amWiki/images/git54.png)   
可以发现，Git会告诉你，`git checkout — file` 可以丢弃工作区的修改，如下命令：  
`git checkout  —  readme.txt`,如下所示：  
![git使用说明图](amWiki/images/git55.png)   
命令 `git checkout –readme.txt `意思就是，把readme.txt文件在工作区做的修改全部撤销，这里有2种情况，如下：  
1. readme.txt自动修改后，还没有放到暂存区，使用 撤销修改就回到和版本库一模一样的状态。  
2. 另外一种是readme.txt已经放入暂存区了，接着又作了修改，撤销修改就回到添加暂存区后的状态。  
假如你不但写错了，还git add到暂存区了。    
对于第二种情况，我想我们继续做demo来看下，假如现在我对readme.txt添加一行 内容为My stupid boss still prefers SVN.    我git add 增加到暂存区后，接着添加内容good jop see you，我想通过撤销命令让其回到暂存区后的状态。如下所示：  
![git使用说明图](amWiki/images/git56.png)     
<b>注意：</b> 命令`git checkout -- readme.txt` 中的-- 很重要，如果没有--的话，那么命令变成创建分支了。  
在commit之前。用git status查看一下，修改只是添加到了暂存区，还没有提交 ,并且Git还告诉我们，用命令git reset HEAD file可以把暂存区的修改撤销掉（unstage），重新放回工作区：  
![git使用说明图](amWiki/images/git57.png)     
`git reset`命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本。  
再用`git status`查看一下，现在暂存区是干净的，工作区有修改：  
![git使用说明图](amWiki/images/git58.png)      
下面，我们再丢弃工作区的修改：  
![git使用说明图](amWiki/images/git59.png)      
现在，假设你不但改错了东西，还从暂存区提交到了版本库，怎么办呢？还记得版本回退一节吗？可以回退到上一个版本。不过，这是有条件的，就是你还没有把自己的本地版本库推送到远程。还记得Git是分布式版本控制系统吗？我们后面会讲到远程版本库，一旦你把“stupid boss”提交推送到远程版本库，你就真的惨了……    
<b>小结：</b>   
1. 场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。  
2. 场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作。  
3. 场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。  
### 2.4.2 删除文件  
假如我现在版本库testgit目录添加一个文件b.txt,然后提交。如下：  
![git使用说明图](amWiki/images/git60.png)      
如上：一般情况下，可以直接在文件目录中把文件删了，或者使用如上rm命令：rm b.txt ，如果我想彻底从版本库中删掉了此文件的话，可以再执行commit命令 提交掉，现在目录是这样的:  
![git使用说明图](amWiki/images/git61.png)      
可以使用如下命令` git checkout — b.txt`，如下所示  ：
只要没有commit之前，如果我想在版本库中恢复此文件如何操作呢？  
![git使用说明图](amWiki/images/git62.png)     
再来看看我们testgit目录，添加了1个文件了。如下所示：  
![git使用说明图](amWiki/images/git63.png)     
# 3. 远程仓库
在了解之前，先注册github账号，由于你的本地Git仓库和github仓库之间的传输是通过SSH加密的，所以需要一点设置：  
>第一步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果有的话，直接跳过此如下命令，如果没有的话，打开命令行，输入如下命令：  
ssh-keygen  -t rsa –C "youremail@example.com", 你需要把邮件地址换成你自己的邮件地址,并且必须要用双引号，不能用单引号。然后一路回车，使用默认值即可。由于我本地此前运行过一次，所以本地有，如下所示：  
![git使用说明图](amWiki/images/git64.png)     
id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。  
第二步：登录github,打开” settings”中的SSH Keys页面，然后点击“Add SSH Key”,填上任意title，在Key文本框里黏贴id_rsa.pub文件的内容。点击 Add Key，你就应该可以看到已经添加的key。  
![git使用说明图](amWiki/images/git65.png)      
为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。    
当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。确保你拥有一个GitHub账号后，我们就即将开始远程仓库的学习。   
    
