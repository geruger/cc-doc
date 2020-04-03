if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m004']=[{"name":"001-物料智能分类和单位统一.md","path":"004-算法/001-物料智能分类和单位统一.md","content":"# 1 文本分类\r\n\r\n## 1.1业务场景\r\n\r\n现有文本数据：物料名称及其规格型号，及物料对应的四级分类数据(几十万条数据)\r\n\r\n需求：学习现有数据，将物料分类至最后一级分类\r\n\r\n![](assets/004/001-1585548287503.png)\r\n\r\n## 1.2 分类流程\r\n\r\n数据收集：1688工业品数据，商品名称规格型号及其对应的各级分类\r\n\r\n​\t\t\t\t\t艾钢云平台上的商品名称规格型号及其对应的各级分类\r\n\r\n\r\n\r\n数据清洗：针对数据中的异常文本/干扰文本，做筛选剔除，例如厂家等实体名词、广告文本，去掉无关符号\r\n\r\n\r\n\r\n数据预处理：分词，one-hot，Word Embedding\r\n\r\n### 1.2.1 模型方案一\r\n\r\n模型构建：基于文本分类模型，由于最后一级类别过多，并且中间存在小于四层类别的分类，于是使用多层级分类想法，构造分类的多叉树模型，各级之间独自分类，从根节点一直走到的叶子节点的目标分类\r\n\r\n![](assets/004/001-1585548325953.png)\r\n\r\n​        根据实际分类情况构建类别树，每一个圆圈代表一个类别也代表一个分类模型，模型只用于做当前级别类及其下一级子类之间的训练（例：某一级分类与其包含的二级分类之间的模型），红线表示分类模型的结果，沿红线做各级分类，直至走到叶子节点（最后一级类别），由于是多叉树，节点的模型选取softmax激活函数\r\n\r\n\r\n\r\n模型持久化：将训练的模型按照树状结构保存，模型个数和分类节点个数相同\r\n\r\n\r\n\r\n模型测试评估：选择准确率/召回率评估模型准确性\r\n\r\n\r\n\r\n迭代优化：节点模型可选择CNN/fasttext/LSTM等方法\r\n\r\n\r\n\r\n### 1.2.2 模型方案二\r\n\r\n模型构建：模型方案一中存在以下缺陷\r\n\r\n​\t\t\t\t1、到第四级分类时模型的准确率为p的四次方，存在指数衰减\r\n\r\n​\t\t\t\t2、需要持久化的模型过多，再进行预测时需要做繁琐的选择操作\r\n\r\n![](assets/004/001-1585548325953.png)\r\n\r\n根据上述缺陷改良算法模型，将整个树模型看作一个神经网络的模型，每个非最终分类的节点看作是隐藏层节点，每个叶子节点为输出层，那么：对于任意一个文本，树中必存在一条从根节点到类别对应的路径（红色路径，且唯一），路径L上存在N个分支，每一个分支看作一个多分类，每一次分类产生一个概率，这些概率的乘积就是所需的最后概率p，模型训练结束后每一个叶子节点的概率为\r\n$\r\npi/Σpi\r\n$\r\n此方法类似于CBOW中的huffman树模型，区别在于：1、树的构建是基于实际分类情况，2、在叶子节点块将单词转换为分类，3、分支采用模型为多分类softmax，而非logistic\r\n\r\n\r\n\r\n模型持久化：将训练的模型按照树状结构保存，模型个数为1\r\n\r\n\r\n\r\n模型测试评估：选择准确率/召回率评估模型准确性\r\n\r\n\r\n\r\n# 2 单位统一\r\n\r\n## 2.1业务场景\r\n\r\n​\t\t如图所示有物料的名称、规格型号、单位和分类几个特征，在同一分类的数据中存在不同的单位，在分析使用物料的业务场景中，如果想知道哪一分类下物料消耗的数量（非金额）比较多，就无法对物料数量直接相加。\r\n\r\n​\t\t由于很多的单位之间不存在通用单位（如L/ml都可换算成ml，KG/T都可换算成g，但是套/个/把无法进行单位统一换算），希望找到一种方法，或找到一个能连接各个单位的量，使单位能统一，方便计算使用量大小。\r\n\r\n![](assets/004/001-1585548345019.png)","timestamp":1585877701769}]