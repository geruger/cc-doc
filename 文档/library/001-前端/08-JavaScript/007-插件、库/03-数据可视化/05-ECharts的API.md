# ECharts的API

| API | 描述 |
| ---- | ---- |
| echarts | 全局 echarts 对象，在 script 标签引入 echarts.js 文件后获得|
| echartsInstance | 通过 echarts.init 创建的实例 |
| action | ECharts 中支持的图表行为,通过 dispatchAction 触发，一些数据可视化的行为设置例如高亮、tooltip位置设置 |
| events | 所有 ECharts 的事件列表。 |


### echarts对象上的主要方法
1. init：创建一个 ECharts 实例，返回 echartsInstance，参数有多个，主要参数也是第一个参数传入一个DOM元素，其余请查看官方文档，其他参数主要的作用是设置应用的主题、设备的像素比、渲染器(支持 'canvas' 或者 'svg')，实例的宽高
2. connect：多个图表实例实现联动。参数是 group 的 id，或者图表实例的数组。
3. disconnect：解除图表实例的联动，如果只需要移除单个实例，可以将通过将该图表实例 group 设为空。参数是group 的 id。
4. dispose：销毁实例，实例销毁后无法再被使用。
5. getInstanceByDom：获取 dom 容器上的实例。
6. registerMap：注册可用的地图，必须在包括 geo 组件或者 map 图表类型的时候才能使用。
7. getMap：获取已注册的地图，返回的对象类型如下
```js
{
    // 地图的 geoJson 数据
    geoJson: Object,
    // 地图的特殊区域，见 registerMap
    specialAreas: Object
}
```
8. registerTheme：注册主题，用于初始化实例的时候指定。

### echartsInstance对象
1. group：图表的分组，用于联动    值为string或者number
2. setOption：设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过setOption完成，ECharts 会合并新的参数和数据，然后刷新图表。 参数：
    * option：图表的配置项和数据
    * notMerge：可选，是否不跟之前设置的option进行合并，默认为false，即合并
    * lazyUpdate：可选，在设置完option后是否不立即更新图表，默认为false，即立即更新
    * silent：可选，阻止调用 setOption 时抛出事件，默认为false，即抛出事件
3. getWidth、getHeight、getDom、getOption：这四个方法是用来获取
4. dispatchAction：触发图表行为，例如图例开关legendToggleSelect, 数据区域缩放dataZoom，显示提示框showTip等等
5. on：绑定事件处理函数。
6. off：解绑事件处理函数。
7. appendData：此接口用于，在大数据量（百万以上）的渲染场景，分片加载数据和增量渲染
8. clear：清空当前实例，会移除实例中所有的组件和图表。
9. dispose：销毁实例，销毁后实例无法再被使用。

### action
1. legend对象：图例组件相关的行为，必须引入图例组件后才能使用
2. tooltip对象：提示框组件相关的行为，必须引入提示框组件后才能使用。
3. dataZoom对象：数据区域缩放组件相关的行为，必须引入数据区域缩放组件后才能使用。
4. timeline对象：时间轴组件相关的行为，必须引入时间轴组件后才能使用。
5. pie、geo、map、graph：这些对象分别是饼图、地图组件、地图图标、关系图的相关的行为，需要引入相关的组件才能使用

```js
echarts:{         //一个全局对象，引入echarts.js后获得
    init()        //初始化实例，注意单个容器不能初始化多个实例
    connect()      //多个图表实例实现联动
    disconnect()     //解除图表之间的联动，如果只需要移除单个实例，可以将通过将该图表实例  group 设为空
    dispose()     //销毁实例，销毁后无法再使用
    getInstanceByDom()     //获取DOM上的实例
    registerMap()     //注册可用的地图，必须在包括 geo 组件或者 map 图					表类型的时候才能使用。
    getMap()     //获取已注册的地图
    registerTheme     //注册主题，初始化时使用
},
echartsInstance:{},   //通过echarts.init创建的实例可以获得实例的各种							属性
action:{},   //echarts中支持的图表的行为包括legend:{},tooltip:{}等
events:{}   //echarts中包含的事件
```



#### 异步数据的加载和更新
1. Echarts中实现异步只需要jquery中的工具异步获取数据后通过setOption填入数据和配置即可
```js
var mychart=echarts.init(document.getElementById(‘main’));
$.get(‘data.json’).done(function(data){
    mychart.setOption({
        title:{},
        tooltip:{},
        legend:{},
        xAxis:{},
        yAxis:{},
        series:[{
          data:data
        }]
    })
})
```
2. 还可以先设置一个空的坐标轴，然后再异步获取数据同样通过setOption载入，如果加载数据时间很长可以在获取数据的这段时间加上一个loading动画。只需调用showLoading ()方法就可以实现，数据加载完成后再用hideLoading()方法隐藏 。
```js
myChart.showLoading();
	$.get('data.json').done(function (data) {
   	 myChart.hideLoading();
   	 myChart.setOption(...);});
```
3. 数据的动态更新            
所有数据的更新都通过 setOption实现，只需要定时获取数据，setOption 填入数据，而不用考虑数据到底产生了那些变化，ECharts 会找到两组数据之间的差异然后通过合适的动画去表现数据的变化。                  
一般地，是通过定时器定时获取数据并更新到页面

#### echarts.js响应式实现
在浏览器窗口变化时调用Echarts提供的resize方法，详见 http://echarts.baidu.com/api.html#echartsInstance.resize ，该方法的描述是：改变图表尺寸，在容器大小发生改变时需要手动调用。当然需要外部容器也是自适应的。

#### 事件和行为
Echarts中所涉及的事件包含两种，一种是鼠标点击事件，或者hover时触发的事件；另一种是用户在使用可交互组件后触发的行为事件。
1. 所有的鼠标事件都包含参数params，这是一个包含点击图形的数据信息的对象。可以在回调函数中获取这个对象中的函数名、系列名称等。
```js
myChart.on('click', function (parmas) {
     $.get('detail?q=' + params.name, function (detail) {
        myChart.setOption({
            series: [{
                name: 'pie',
                // 通过饼图表现单个柱子中的数据分布
                data: [detail.data]
            }]
        });
    });});
```
2. 组件交互的行为事件             
交互组件都会触发事件其中的事件种类都在events文档中有列出。用法一样用on.





#### 微信小程序中使用 ECharts
由于微信小程序是不支持 DOM 操作的，Canvas 接口也和浏览器不尽相同，所以百度团队和小程序团队合作给我们提供了Echarts的微信小程序版本，熟悉ECharts的配置你就能很快在微信小程序中使用ECharts            

1. 下载
下载 GitHub 上的项目： https://github.com/ecomfe/echarts-for-weixin            
这个项目其实就是一个小程序的项目，你可以只在用小程序的编辑器运行测试(需要将 project.config.json 中的 appid 替换成在公众平台申请的项目 id)，其中克隆的文件中的ec-canvas文件就是ECharts提供给小程序的组件，项目中同时也提供了很多使用这个组件的例子。              
ec-canvas 目录下有一个 echarts.js，默认ECharts会在每次 echarts-for-weixin 项目发版的时候替换成最新版的 ECharts。如有必要，可以自行从 ECharts 项目中下载最新发布版，或者从官网自定义构建以减小文件大小。下载的文件放在 ec-canvas/echarts.js，注意一定需要重命名为 echarts.js。            

2. 使用
将ec-canvas文件放置在你的小程序中适当的位置，然后在你使用ECharts的页面json进行配置，允许使用组件 ec-canvas ;
```js
{
  "usingComponents":{
    "ec-canvas":"../../ec-canvas/ec-canvas"       //这里写的是你放置ec-canvas文件的位置
  }
}
```
wxml文件中使用组ec-canvas组件
```
<view class="container">
  <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>
</view>
```
其中 ec 是一个我们在 index.js 中定义的对象，它使得图表能够在页面加载后被初始化并设置。         
页面中js文件的配置如下
```js
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    ...
  };
  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart
    }
  }
});
```
这对于所有 ECharts 图表都是通用的，只需要修改上面 option 的内容，即可改变图表。
