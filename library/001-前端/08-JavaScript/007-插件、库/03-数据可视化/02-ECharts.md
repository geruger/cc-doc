# Echarts
这里主要介绍Echarts的使用。echarts.js得到了百度团队的重视，在git上面的更新也是比较的频繁，所以不会出现一些比较严重的bug之类的。同时官网中有大量的实例，提供给我们进行参考

## 下载
1. 官网下载界面：http://echarts.baidu.com/download.html    
    * 可自由选择下载不同版本、不同主题、所需地图数据，根据需求进行个性化定制。              
    * 刚开始学习和开发环境建议下载源代码版本，因为该版本包含了常见的警告和错误提示。          
    * 在线定制可以选择需要的图表、坐标系、组件、以及是否压缩等一些其他选项。    

2. 在 ECharts 的 GitHub 上下载最新的 release 版本，解压出来的文件夹里的 dist 目录里可以找到最新版本的 echarts 库。 https://github.com/apache/incubator-echarts

3. 使用如下命令通过 npm 安装 ECharts `npm install echarts --save` 然后直接在项目代码中 require('echarts') 。得到的是已经加载了所有图表和组件的 ECharts 包，因此体积会比较大，如果在项目中对体积要求比较苛刻，也可以只按需引入需要的模块。   按需引入的列表：https://github.com/apache/incubator-echarts/blob/master/index.js

4. 也可以通过cdn引入，国内bootcdn：https://www.bootcdn.cn/echarts/          
```html
<script src="https://cdn.bootcss.com/echarts/4.2.0-rc.2/echarts-en.common.js"></script>
```



## 使用  
Echarts这个框架的配置内容很是多，所以不要尝试着把这个框架中的方法都给记住，这是不太可能的事，Echarts的官方文档介绍十分详细，所以使用的时候查看官方文档就可以 http://echarts.baidu.com/

### 基本使用步骤
1. 首先将echarts.js引入`<script src="echarts.js"></script>`,然后为echarts提供一个DOM容器（具有宽高）`<div id="chart" style="width: 800px;height:400px;"></div>`
```html
<script src="echarts.js"></script>
<div id="chart" style="width: 800px;height:400px;"></div>
```
2. 为echarts配置参数
      1. 初始化DOM容器，用echarts.init()函数          
      `var myChart = echarts.init(document.getElementById('chart'));`
      2. 配置数据选项
      ```js          
          var options={  
							title:{},//图表的标题
              、、、、、、、、、、
			     }
      ```
3. myChart.setOption(options);将数据选项更新(就可以实现一个简单的图例)                  
echarts的图形化呈现主要是通过配置方法来实现的(setOption),然后是对图形标签进行初始化，最后把配置方法(setOption)赋值到初始化图形中。
4. 按照上面的流程就可以实现一个简单的图表，完整代码如下
>简单实现了一个饼图，请在后面查看具体的配置项介绍。

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ECharts展示</title>
	<script src="echarts.js"></script>
</head>
<body>
	<div id="chart" style="width: 800px;height:400px;"></div>
</body>
<script>
	var myChart = echarts.init(document.getElementById('chart'));
	var options={  
        series:[{
	            type:'pie',
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:274, name:'联盟广告'},
	                {value:235, name:'视频广告'},
	                {value:400, name:'搜索引擎'}
	            ]
        }]
    }
    myChart.setOption(options);
</script>
</html>
```
![简单案例](amWiki/images/简单实现.jpg)
