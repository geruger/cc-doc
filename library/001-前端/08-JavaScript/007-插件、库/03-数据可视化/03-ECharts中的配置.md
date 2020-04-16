### 配置项
options中的配置项非常之多，记住所有的并不太现实，在这里列一些重要的做介绍

| 配置项 | 描述 |
| ---- | ---- |
| title | 标题组件，包含主标题和副标题。可以对这些标题设置样式 |
| legend | 图例组件，图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。 |
| grid | 直角坐标系内绘图网格，可以在网格上绘制折线图，柱状图，散点图（气泡图） |
| xAxis | 直角坐标系 grid 中的 x 轴 |
| yAxis | 直角坐标系 grid 中的 y 轴 |
| polar | 极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。 |
| radar | 雷达图坐标系组件，只适用于雷达图。 |
| tooltip | 提示框组件。 |
| axisPointer | 这是坐标轴指示器（axisPointer）的全局公用设置。 |
| brush | 区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据 |
| geo | 地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。 |
| timeline | 提供了在多个 ECharts option 间进行切换、播放等操作的功能。 |
| dataset | 数据集组件，用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。 |
| series | 系列列表。每个系列通过 type 决定自己的图表类型 |
| color | 调色盘颜色列表 |
| backgroundColor | 背景色，默认无背景。 |

#### title组件，包含主标题和副标题。(副标题的相关设置与主标题一样，在前面属性名前面加sub)
| 属性名 | 描述 | 值 |
| ---- | ---- | ---- |
| id | 默认不指定。指定则可用于在 options 或者 API 中引用组件。(所有的id解释都是相同的)| string |
| show | 是否显示标题 | 布尔值，默认为true |
| text | 主标题文本，支持使用 \n 换行 | 字符串 |
| link | 主标题文本超链接。| 字符串。比如`link:'http://www.echartsjs.com'` |
| target | 与a连接的target属性一样，设置打开主标题连接的方式。| 'self' 当前窗口打开， 'blank' 新窗口打开|
| textStyle | 设置主标题的文本样式，就是字体的颜色、字号、字体、行高、阴影等等| 一个对象 |
| subtext | 副标题的文本 | 字符串 |
| itemGap | 主标题与副标题之间的间距，| number类型，表示像素，默认为10 |
| zlevel | 用于 Canvas 分层，不同zlevel值的图形会放置在不同的 Canvas 中，Canvas 分层是一种常见的优化手段。 | number 默认为0 |
| z | 设置标题的层级,z值小的图形会被z值大的图形覆盖。| number类型 |
| left、right | 组件离容器左侧/右侧的距离 | number类型表示像素，string可以是'50%'、'left'、 'center'、'right' |
| top、bottom | 组件离容器上侧/下侧的距离。 | number类型表示像素，string可以是'50%'、'top'、 'middle'、'bottom' |
| backgroundColor | 标题背景色 | 默认透明，支持rgba格式 |
| borderWidth | 标题的边框线宽 | number 表示像素 |
| borderRadius | 边框的圆角半径　| number表示统一设置四个角，array可以对四个角分别设置 |
| borderColor | 边框的颜色 |　默认'#ccc' |
还可以设置标题阴影的模糊程度、偏移程度、颜色等进行设置

#### legend 图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
| 属性名 | 描述 | 值 |
| ---- | ---- | ---- |
| type | 图例的类型 | 'plain'：普通图例。缺省就是普通图例。'scroll'：可滚动翻页的图例。当图例数量较多时可以使用。 |
| id | 默认不指定。指定则可用于在 option 或者 API 中引用组件。| string |
| show | 是否显示图例 | 布尔值，默认为true |
| zlevel | 同title的zlevel | number |
| z | 同title的z | number默认值为2 |
| top、left、right、bottom | 同title组件 | 参看title |
| width、height| 图例组件的宽度、高度 | string、number，默认为auto自适应 |
| orient | 图例列表的布局朝向。 | 'horizontal':表示横排默认；'vertical'：表示竖排|
| padding | 图例内边距 | number和array |
| itemGap | 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。 | number，默认为10 |
| itemWidth、itemHeight | 图例标记的图形的宽度/高度 | number |
| formatter | 用来格式化图例文本 | string, Function |
| selectedMode | 控制是否可以通过点击图例改变系列的显示状态 | string, boolean，默认为true，可以设成 'single' 或者 'multiple' 使用单选或者多选模式。 |
| inactiveColor | 图例关闭时的颜色。 | 值为颜色 |
| selected | 图例选中状态表。 | 值为一个对象，{'a':true},表示a为选中 |
| textStyle | 图例的公用文本样式。 | 值为一个对象，与title中的一样 |
| tooltip | 提示框组件 | 值为一个对象详细介绍查看后面的tooltip组件 |
| data | 图例的数据数组 | 数组中内容可以为字符串，也可为对象，具体查看下面例子 |
|backgroundColor| 图例的背景颜色 | 同title的，默认透明 |
| borderColor、borderWidth、等 | 边框和阴影的设置  | 同title中的一样 |

以下的属性需要在图例组件的type值设为scroll才能生效

| 属性 | 描述 | 值 |
| ---- | ---- | ----|
| scrollDataIndex | 决定当前图例滚动到哪里 | number |
| pageButtonItemGap | 图例控制块中，按钮和页信息之间的间隔。 | number，默认值为5 |
| pageButtonGap | 图例控制块和图例项之间的间隔 | number |
| pageButtonPosition | 图例控制块的位置 | 'start'：控制块在左或上。'end'：按钮快在右或下。默认'end' |
| pageFormatter | 图例控制块中，页信息的显示格式。 | function、string，默认为 '{current}/{total}'，其中 {current} 是当前页号（从 1 开始计数），{total} 是总页数。使用函数，须返回这两个值 |
| pageIcons | 图例控制块的图标 | 值为一个对象，分别设置横排和竖排的图标 |
| pageIconColor | 翻页按钮的颜色 | string |
| pageIconInactiveColor | 翻页按钮不激活时（即翻页到头时）的颜色。 | string |
| pageIconSize | 翻页按钮的大小 | 可以是number，也可以是array表示 [宽,高]|
| pageTextStyle | 图例页信息的文字样式 | 一个对象，值同textStyle|
| animation | 翻页是否使用动画 |  布尔值 |
| animationDurationUpdate | 翻页是的动画时长 | number 毫秒 |

#### tooltip 提示框组件
提示框组件设置到的地方很多，
* 可以设置在全局，即 tooltip
* 可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip
* 可以设置在系列中，即 series.tooltip
* 可以设置在系列的每个数据项中，即 series.data.tooltip

| 属性 | 描述 | 值 |
| ----- | ---- | ----|
| show | 是否显示提示框组件 | 布尔值，默认为true |
| trigger| 触发类型| 'item'：数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'：坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none'：什么都不触发。 |
| axisPointer | 坐标轴指示器配置项。 | object，参看axisPointer组件 |
| showContent | 是否显示提示框浮层，| 布尔值，默认显示。 |
|alwaysShowContent | 是否永远显示提示框内容 | 布尔值，默认为false |
| triggerOn | 提示框触发的条件 | string，'mousemove'：鼠标移动时触发。'click'：鼠标点击时触发。'mousemove、click'(默认)：同时鼠标移动和点击时触发。 |
| showDelay | 浮层显示的延迟，单位为 ms， | number默认没有延迟 ，不建议设置，在 triggerOn 为 'mousemove' 时有效。|
| hideDelay | 浮层隐藏的延迟，单位为 ms， | number 默认100 |
| enterable | 鼠标是否可进入提示框浮层中 | 布尔值 默认为false|
| renderMode |   浮层的渲染模式 | 默认以 'html 即额外的 DOM 节点展示 tooltip；此外还可以设置为 'richText' 表示以富文本的形式渲染  |
| confine | 是否将 tooltip 框限制在图表的区域内。 | 布尔值，默认为false |
| transitionDuration| 提示框浮层的移动动画过渡时间 | number，单位为s |
| position | 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。 | array：[20,20]绝对位置 ['50%','50%']相对位置，只在 trigger 为'item'的时候有效。{'inside':鼠标所在图形的内部中心位置，'top':鼠标所在图形上侧,'left'、'right'、'bottom'} |
| formatter | 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。 | 查看上面legend的formatter |
| backgroundColor | 提示框浮层的背景颜色 | 写一个颜色值 |
| borderColor | 提示框浮层的边框颜色。 | 写一个颜色值 |
| borderWidth | 提示框浮层的边框宽 | number |
| padding | 提示框浮层的内边距 | number |
| textStyle | 提示框浮层的文本样式 | object 同title组件的textStyle |
| extraCssText | 额外附加到浮层的 css 样式 | string，就是写css样式就可以 |

#### toolbox 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
| 属性 | 描述 | 值|
| ---- | ---- | ---- |
| id | 指定则可用于在 option 或者 API 中引用组件 | string |
| show | 是否显示工具栏组件 | 布尔值 |
| orient | 工具栏 icon 的布局朝向。 | 同legend的orient |
| itemSize | 工具栏 icon 的大小。 | number，默认值为15 |
| itemGap | 工具栏 icon 每项之间的间隔 | number，默认值为10  |
| showTitle | 是否在鼠标 hover 的时候显示每个工具 icon 的标题。 | 布尔值 |
| iconStyle | 公用的 icon 样式设置 | 值为一个对象，包含icon的颜色、边框、阴影、透明度等 |
| emphasis | 鼠标 hover 时候的高亮样式。 | 值为一个对象，对象中包含一个iconStyle属性，也是对象，同上面的iconStyle |
| zlevel、z | 同上 | number |
| left、right、top、bottom | 同上 | string、number|
| width、height | 组件容器的宽/高 | string/number |
| feature | 各工具配置项 | object 查看下面的饼图的案例  |


#### series系列列表。每个系列通过 type 决定自己的图表类型
series是一个数组，里面可以写很多的对象，每一个对象就是一个图表类型，每个对象上的type属性来控制图表的类型，他们有很多都一样的样式，我在前面先总结一哈

| 属性  | 描述 | 值 |
| ---- | ---- | ---- |
| type | 设置图表的类型 | string |
| id | 组件 ID。指定则可用于在 option 或者 API 中引用组件 | string 默认不指定。|
| name | 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。 | string |
| legendHoverLink | 是否启用图例 hover 时的联动高亮。 | 布尔值，默认为true |
| cursor | 鼠标悬浮时在图形元素上时鼠标的样式是什么 | string 跟css的cursor一样 |
| label | 图形上的一些文本标签，可用于说明图形的一些数据信息 | object，主要控制文字颜色、字号、对齐方式、阴影、边框、宽高、描边颜色 |
| itemStyle | 图形样式 | object，主要控制图形颜色、边框、阴影、透明度 |
| emphasis | 高亮的图形样式和标签样式。| object，里面包换两个对象昂，分别是label和itemStyle，设置同上 |
| tooltip  | 本系列提示框的设置 | object，查看tooltip组件 |
| z和zlevel | 查看title组件的z和zlevel | number |
| markPoint | 图表标注 | object：http://www.echartsjs.com/option.html#series-scatter.markPoint |
| markLine | 图标标线 | object: http://www.echartsjs.com/option.html#series-scatter.markLine |
| markArea | 图表标域，常用于标记图表中某个范围的数据，例如标出某段时间投放了广告。 | object: http://www.echartsjs.com/option.html#series-scatter.markArea |
| silent | 图形是否不响应和触发鼠标事件 | 布尔值，默认为false  |
| datasetIndex | 如果 series.data 没有指定，并且 dataset 存在，那么就会使用 dataset。datasetIndex 指定本系列使用那个 dataset。| number，默认为0 |
| seriesLayoutBy | 系列“排布”到 dataset 的行还是列上 | 'column'：默认，dataset 的列对应于系列，从而 dataset 中每一列是一个维度。'row'：dataset 的行对应于系列，从而 dataset 中每一行是一个维度|
| animation | 是否开启动画 |　布尔值，默认为true |
| animationThreshold | 是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。 | number 默认值2000  |
| animationDuration | 初始动画的时长 | number 默认值为1000 |
| animationEasing | 初始动画的缓动效果。 | string 默认'cubicOut ' |  
| animationDelay | 初始动画的延迟，支持函数 | Function、number 默认为0|
| animationDurationUpdate | 数据更新动画的时长，支持回调函数 | function、number 默认值300  |
| animationEasingUpdate | 数据更新动画的缓动效果 | string 默认值为'cubicOut' |
| animationDelayUpdate | 数据更新动画的延迟，支持回掉函数 | function、number 默认值为0 |
| data | 系列中的数据内容数组 | 数组中可以包含很多对象，也可以直接写字符串数据 |
data是这里比较重要的，每种图表类型中都有，我在这里先总结了他们共有的部分，后面每种图表就只介绍他们特殊的部分。
```
data:[
  {
    name:'90-100',     //数据项名称
    value: 500,    //单个数据项的数值
    label:{},     //每种图表的解释不同
    itemStyle:{},   //折线拐点标志的样式,每种图标解释也不同
    emphasis:{itemStyle:{}},    //高亮样式，对于itemStyle
    tooltip:{},     //单个数据提示框的样式
  },
]
```


##### 饼图 type:'pie'
| 属性 | 描述 | 值 |
| ---- | ---- |---- |
| hoverAnimation | 是否开启 hover 在扇区上的放大动画效果。 | 布尔值，默认为true |
| hoverOffset | 高亮扇区的偏移距离 | number 默认为10 |
| selectedMode | 选中模式，表示是否支持多个选中 | 默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选 |
| selectedOffset | 选中扇区的偏移距离 | number 默认值为10 |
| clockwise | 饼图的扇区是否是顺时针排布 | 布尔值，默认为true |
| startAngle | 起始角度 | number 默认为90，支持范围[0, 360] |
| minAngle | 最小扇区角度，用于防止过小影响交互 | number，默认为0支持范围[0, 360] |
| roseType | 是否展示成南丁格尔图，通过半径区分数据大小 | string；'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。'area' 所有扇区圆心角相同，仅通过半径展现数据大小。 |
| avoidLabelOverlap | 是否启用防止标签重叠策略 | 布尔值，默认true |
| stillShowZeroSum | 是否在数据和为0（一般情况下所有数据为0） 的时候不显示扇区。| 布尔值，默认为true |
| labelLine | 标签的视觉引导线样式 | object 下面例子详细介绍 |
| center | 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。| array [400, 300];['50%', '50%'] |   
| radius | 饼图的半径 |  number：直接指定外半径值。string:'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。Array:['内半径','外半径']，内半径设大显示为圆环图 |
| data | 系列中的数据内容数组。数组项可以为单个数值 | Object 结合饼图案例 |

饼图简单案例
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
    	title:{
    		text:'学生成绩饼图',
    		textStyle:{
    			color:'red',
    			fontSize:20
    		},
    		link:'http://www.echartsjs.com/option.html#title.backgroundColor',
    		subtext:'这是期末成绩分布图',
    		left:'left',
    		itemGap:5,
    		backgroundColor:'blue',
    		borderWidth:5,
    	},
    	legend:{
    		type:'scroll',
    		data:['90-100','80-90','70-80','60-70',{name:'60分以下',icon:'triangle',textStyle:{color:'green'}}],  //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'    也可以设置通过 'image://url' 设置为图片，其中 URL 为图片的链接，
    		orient:'horizontal',
    		itemWidth:20,
    		inactiveColor:'red',
    		width:200,
    		scrollDataIndex:2,
    		pageButtonPosition:'start',
    		animationDurationUpdate:1000,
    	},
    	tooltip:{
    		enterable:true,    //鼠标是否可进入提示框浮层中默认为false
    		confine:true,   //是否将提示框限制在图表内 ，在用与移动端或者响应式的时候比较有用
    		//position:'bottom',    //提示框的位置
    		backgroundColor:'#ccc',   //提示框的背景颜色
    		borderWidth:20,     //边框的大小   number
    		borderColor:'red',   //边框的颜色
    		extraCssText:'color:#000',   //写提示框加css样式
    	},
    	toolbox:{
    		feature:{
    			saveAsImage:{        //保存为图片。
    				type:'png',      //保存图片的格式，支持 'png' 和 'jpeg'。
    				name:'测试',        //保存文件的名字，默认使用主标题
    				// backgroundColor:'auto'   保存的图片背景色，默认使用 backgroundColor，如果backgroundColor不存在的话会取白色。
    				excludeComponents:['toolbox'] , //保存为图片时忽略的组件列表，默认忽略工具栏。
    				show:true,     //是否显示该工具。
    				// icon:'image://http://xxx.xxx.xxx/a/b.png',   设置图标
    				iconStyle:{color:'red'},      //保存为图片 icon 样式设置。   
    				emphasis:{},      //移入设置样式，同toolbox的emphasis
    				pixelRatio:1,    //保存图片的分辨率比例，默认跟容器相同大小   number
    			},
    			restore:{          //还原
    				show:true,      //是否显示该组件
    				title:'这是还原',    //名称
    				// icon:'',      图标设置
    				iconStyle:{color:'blue'},    //图标样式
    				emphasis:{iconStyle:{color:'red'}},     //移入显示样式，同上
    			},
    			dataView:{         //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
    				show:true,    //是否显示该工具      布尔值
    				title:'数据视图',    //移入显示的名字   string
    				iconStyle:{color:'yellow'},    //icon emphasis同上
    				readOnly:false,      //是否不可编辑（只读）。
    				//optionToContent:fun,    //自定义函数展示数据
    				//contentToOption:fun,   //如果支持数据编辑后的刷新，需要自行通过该函数实现组装 option 的逻辑
    				lang:['数据视图的', '关闭了啊', '刷新一哈'],   //数据视图上有三个话术，默认是['数据视图', '关闭', '刷新']。
    			},
    			dataZoom:{        //数据区域缩放。目前只支持直角坐标系的缩放。

    			},
    			magicType:{      //动态类型切换
    				show:true,    //是否显示
    				type:['line', 'bar', 'stack', 'tiled'],   //启用的动态类型
    				title:{
    					line:'切换为折线图',
    					bar:'切换为柱状图',
    					stack:'切换为堆叠',
    					tiled:'切换为平铺',
    				},
    				icon:{
    					// line:'image://http://xxx.xxx.xxx/a/b.png',   配置各个icon
    				},
    				iconStyle:{color:'pink'},     //配置icon的样式
    				emphasis:{iconStyle:{}},     //移入样式
    				option:{line:{}},      //配置每一个的样式
    				seriesIndex:{line:[]},    //各个类型对应的系列的列表   
    			},
    			brush:{
    					type:['rect','polygon'],
    					icon:{},     //没个按钮的icon
    					title:{     //标题文本。
    						rect:'矩形选择',
    					}
    			}
    		}
    	},
    	series : [
        	{
            name: '学生成绩区间',       //数据项名称
            type: 'pie',      //饼图
            radius: '60%',   //设置半径， ['30%','70%']表示内圆30%，外圆70%也就是环图，只写一个值就是饼图
            itemStyle:{},     //图形样式
            emphasis:{},    //高亮的扇区和标签样式
            hoverOffset:15,   //高亮扇区的偏移距离
            roseType:false,   //是否设置为南丁格尔图
            labelLine:{
            	show:true,   //是否显示引导线
            	length:10,   //引导线第一段的长度
            	length2:50,   //引导线第二段的长度
            	smooth:0.5,    //0-1 平滑程度
            	lineStyle:{    //引导线的样式
            		color:'red',   //引导线的颜色，支持rgba，还可以设置渐变和纹理
            		width:2,     // number   线宽
            		type:'dashed',  // 线的类型 'solid'\'dashed'\'dotted'
            		//还支持阴影的设置
            		opacity:0.5,      //t透明度。同css的opacity
            	},
            	emphasis:{     //高亮状态下引导线的样式
            		lineStyle:{color:'blue'}      //同上面的lineStyle
            	},     
            },
            data:[
                {
                	value:235,
                	name:'90-100',
                	label:{show:true,position:'inside',color:'#000'},//position设置name值得位置，默认值为outside通过视觉引导线连到相应的扇区。
                	labelLine:{},    // 同series.lineStyle  单独设置这一项数据的引导线样式
                	emphasis:{lineStyle:{}},    // 同series.emphasis  单独设置这一项数据的高亮引导线样式
                	tooltip:{}    //单独设置这一项数据的提示框
                },   
                {value:274, name:'80-90'},
                {value:310, name:'70-80'},
                {value:335, name:'60-70'},
                {value:400, name:'60分以下',selected:true}    //selected设置默认选中
            	],
            center:['50%', '50%']     //圆心的位置，可以设置为绝对值和像素两种方式
        	}
	    ]
	}
    myChart.setOption(options);
</script>
</html>
```
![饼图](amWiki/images/饼图.jpg) ![数据视图](amWiki/images/数据视图.jpg) ![环图](amWiki/images/环图.jpg) ![南丁格尔图](amWiki/images/ndge.jpg)


##### 折线图 type:'line'
| 属性 | 描述 | 值 |
| ---- | ---- | ---- |
| coordinateSystem| 该系列使用的坐标系 | string 'cartesian2d'：使用二维的直角坐标系，通过 xAxisIndex, yAxisIndex指定相应的坐标轴组件。'polar'：使用极坐标系，通过 polarIndex 指定相应的极坐标组件  |
| xAxisIndex |  在单个图表实例中存在多个 x 轴的时候有用 | number 默认值为0  |
| yAxisIndex |  在单个图表实例中存在多个 y 轴的时候有用 | number 默认值为0  |
| polarIndex | 使用的极坐标系的 index，在单个图表实例中存在多个极坐标系的时候有用。 |number 默认值为0  |
| symbol | 标记的图形 | ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'，可以通过 'image://url' 设置为图片 |
| symbolSize | 标记的大小 | number, Array [8,10]表示宽8高10 |
| symbolRotate | 标记旋转的角度 | number |
| symbolKeepAspect | 是否在缩放时保持该图形的长宽比。 | 布尔值 默认为false |
| symbolOffset  | 标记相对于原本位置的偏移。 | array [string,number] ['50%',20] |
| showSymbol | 是否显示标记的图形  | 布尔值 默认为true |
| showAllSymbol | 是否显示所有的标记 |  布尔值，默认为auto：如果有足够空间则显示标志图形，否则随主轴标签间隔隐藏策略。true：显示所有图形。false：随主轴标签间隔隐藏策略。 |
| hoverAnimation | 是否开启 hover 在拐点标志上的提示动画效果 | 布尔值，默认为true |
| stack | 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。 | string  不太好理解，结合下面的折线案例比较好理解 |
| connectNulls | 是否连接空数据 | 布尔值，默认为false |
| clipOverflow | 是否对超出部分裁剪| 布尔值，默认为true裁剪 |
| step | 是否是阶梯线图  |布尔值 默认为false 也支持设置成 'start', 'middle', 'end' 分别配置在当前点，当前点与下个点的中间点，下个点拐弯。 |
| areaStyle | 区域填充样式 | object 查看折线图表的案例  |
| smooth | 是否平滑曲线显示 | 布尔值、number(0-1) 越小表示越接近折线段 |
| sampling | 数据量远大于像素点时候的降采样策略 | string 默认关闭 'average' 取过滤点的平均值 'max' 取过滤点的最大值 'min' 取过滤点的最小值 'sum' 取过滤点的和 |
| encode | 可以定义 data 的哪个维度被编码成什么 | object 不好理解，请结合下面的案例去学习 |
| data | 放置数据的地方， | object 里面的属性值同外面的属性值，只是给单个的设置 symbol、symbolSize、symbolRotate、symbolKeepAspect、symbolOffset |

我们还需要结合其他组件才能画出折线图，

#### grid 直角坐标系内绘图网格
>ECharts 3 中可以存在任意个 grid 组件

| 属性 | 描述 | 值 |
| ---- |---- | ---- |
|id | 默认不指定。指定则可用于在 option 或者 API 中引用组件 | string |
| show | 是否显示直角坐标系 | 布尔值，默认为false |
| zlevel、z | 图形的层级 | number 同上面组件的解释 |
| left、top、right、bottom | grid组件距离容器上下左右的距离 | 值得设置同上面组件的解释 |
| width、height | 组件的宽高 | string、number 默认为auto |
| containLabel | grid 区域是否包含坐标轴的刻度标签 |布尔值 默认为false |
| backgroundColor | 网格背景颜色 | 颜色值，默认为透明 |
| borderColor、borderWidth | 设置网格的边框 | 值得解释同上面组件 |
|shadowBlur、shadowColor、shadowOffsetX、shadowOffsetY | 阴影的设置 | 值得解释同上面组件 |
| tooltip | grid组件中的提示框 | 详细设置查看tooltip组件 |

#### xAxis、yAxis   直角坐标系 grid 中的x轴和y 轴
>x轴和y轴这两个组件的属性值一样，所以我把他们两放到一起，注意他们是两个组件。

|属性 | 描述| 值 |
| ---- |----|----|
| id | 所有的id  |  string|
| show | 是否显示x轴、y轴 |布尔值 默认为true |
| gridIndex| x轴、y轴所在的grid中的索引 | number，默认位于第一个grid中 |
| position | x轴、y轴的位置 | string x轴的可选值为top、bottom；y轴的可选值为left、right |
|offset | x轴、y轴的偏移位置，相对于默认位置 | number 多个轴时用到 |
| type | 坐标轴的类型 | 'value'：数值轴，适用于连续数据。'category'：类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。'time'：时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。'log'：对数轴。适用于对数数据。 |
|name | 坐标轴的名字 | string |
|nameLocation | 坐标轴名字显示的位置 | 可选值 'start'、'middle'、'center'、'end' |
| nameTextStyle | 坐标轴名字的样式 | object，具体是设置同title组件中的textStyle |
| nameGap | 坐标轴名字与轴线之间的距离 | number 默认为15 |
| nameRotate | 坐标轴名字的旋转角度值 | number，默认不旋转|
|inverse | 是否反向坐标轴，ECharts 3 中新加 | 布尔值，默认为false  |
| min | 坐标轴刻度最小值 |'dataMin'：取数据在该轴上的最小值作为最小刻度；在类目轴中，也可以设置为类目的序数 |
| max | 坐标轴刻度最大值 | 和min一样，也可以设置成函数；max: function(value) {return value.max- 20;}|
| boundaryGap | 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样 | 类目轴值为布尔值，默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带中间；非类目轴值为有两个值的数组，值可以是百分比或者数字，在设置 min 和 max 后无效|
| scale | 只在数值轴中（type: 'value'）有效；是否是脱离 0 值比例 | 布尔值 默认为false |
| splitNumber | 坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。| number 默认值为5 |
| minInterval| 自动计算的坐标轴最小间隔大小 | number 默认为0，只在数值轴或时间轴中有效 |
| maxInterval | 自动计算的坐标轴最大间隔大小 | number 只在数值轴或时间轴中有效 |
| interval| 强制设置坐标轴分割间隔 一般不建议使用 | number 无法在类目轴中使用 |
| logBase | 对数轴的底数，只在对数轴中（type: 'log'）有效| number 默认值为10 |
| silent | 坐标轴是否是静态无法交互 | 布尔值 默认为false  |
| triggerEvent | 坐标轴的标签是否响应和触发鼠标事件 | 布尔值 默认为false |
| axisLine | 坐标轴轴线相关设置 | object 接和下面的案例学习 |
| axisTick | 坐标轴刻度相关设置 | object 接和下面的案例学习 |
| axisLabel | 坐标轴刻度标签的相关设置 | object 接和下面的案例学习 |
| splitLine | 坐标轴在 grid 区域中的分隔线 | object 接和下面的案例学习 |
| splitArea | 坐标轴在 grid 区域中的分隔区域 | 默认不显示 object |
| data | 类目数据 | 数据，结合下面的案例学习 |
| axisPointer | 指示器的设置 | object，查看axisPointer组件的介绍 |
| z、zlevel | 组件的层级 | 值得设置同上 |

#### axisPointer 坐标轴指示器

| 属性 | 描述 | 值 |
| ---- | ---- | ---- |
| id | 同上 | string |
| show | 是否显示 | 布尔值 默认为false |
| type | 指示器的类型 | 可选值 'line'：直线指示器 'shadow'：阴影指示器 'none'：无指示器 |
| snap | 坐标轴指示器是否自动吸附到点上 | 布尔值， 默认为true |
| z | 坐标轴指示器的 z 值控制图形的前后顺序。z值小的图形会被z值大的图形覆盖 | number |
| label | 坐标指示器上的文本标签 | Object  设置参考下面的折线/面积图案例 |
| lineStyle | axisPointer.type 为 'line' 时有效。 | object 同上 |
| shadowStyle | axisPointer.type 为 'shadow' 时有效 | object 设置阴影的颜色，偏移程度，透明度 |
| triggerTooltip | 是否触发提示框 | 布尔值。默认为true |
| handle | 拖拽手柄，适用于触屏的环境 | object |
| value | 当前的 value。在使用 axisPointer.handle 时，可以设置此值进行初始值设定从而决定 axisPointer 的初始位置 | number  |
| link | 不同轴的 axisPointer 可以进行联动 | array [{xAxisId: ['aa', 'cc'],angleAxis: 'all'},]  // 表示左右 xAxisId 为 'aa'、'cc' 以及所有的 angleAxis 联动。|
| triggerOn | 提示框的触发条件 |  可选 'mousemove'：鼠标移动时触发。'click'：鼠标点击时触发。'none'：不在 'mousemove' 或 'click' 时触发。 |

折线图简单案例
```js
var options={
    	title:{
    		text:'学生成绩折线/面积图',
    	},
    	legend:{
    		type:'scroll',
    		data:['学生成绩区间'],
    		orient:'horizontal',
    		itemWidth:20,
    		inactiveColor:'red',
    		width:200,
    		scrollDataIndex:2,
    		pageButtonPosition:'start',
    		animationDurationUpdate:1000,
    	},
    	grid:{          // 直角坐标系内绘图网格
    		show:true,
    		// backgroundColor:'#ccc',   
    		tooltip:{},     //本坐标系特定的提示框   
    	},
    	//X轴设置
        xAxis:{
            data:['60分','70分','80分','90分',{value:'100分',textStyle: {    //类目数据
        		fontSize: 20,
        		color: 'red'     
    		}}],
            show:true,   //是否显示x轴，默认为true
            position:'top',   // x轴的位置，默认值为bottom
        	name:'成绩',   //x轴的名字   也可以设置文本样式，通过nameTextStyle
        	nameTextStyle:{
        		color:'yellow',
        	},
        	nameGap:20,    //坐标轴名称与轴线之间的距离。 默认为15
        	inverse:true,   //是否是反向坐标轴  默认为false
        	triggerEvent:true,  //坐标轴的标签是否响应和触发鼠标事件   默认为false
        	axisLine:{},    //坐标轴轴线相关设置。
        	axisTick:{},   //坐标轴刻度相关设置
        	axisLabel:{},   //坐标轴刻度标签的相关设置。
        	axisPointer:{},   //指示器的相关设置
        },
        yAxis:{
        	axisLabel:{       //坐标轴刻度标签的相关设置。
        		show:true
        	},
    		type : 'value',       //坐标轴类型
            // name : '价格',        设置Y轴的名字
        },
        axisPointer:{     //指示器的相关设置
        	show:true,    //默认为false 不显示
        	type:'line',     //指示器的类型 默认为line
        	snap:true,
        	label:{show:true,color:'#999'},  //   指示文本的样式设置
        	lineStyle:{color:'#000'},   //线的样式，颜色，阴影，宽度，透明度等
        	shadowStyle:{},    //axisPointer.type 为 'shadow' 时有效。阴影的样式
        	triggerTooltip:true,  //  是否触发提示框
        	handle:{                //拖拽手柄，适用于触屏的环境
        		show:true,     //默认为false ，不显示
        		// icon:可以通过 'image://url' 设置为图片，
        		size:35, // 手柄的尺寸，默认45可以设置单值，也可以设置为数组：[width, height]。
        		margin:50,  //手柄与轴的距离。注意，这是手柄中心点和轴的距离。  number 默认为50
        		color:'#999',    //颜色    默认 '#333'
        		throttle:40,   //手柄拖拽时触发视图更新周期，单位毫秒
        		//还可以设置阴影 模糊程度，偏移程度 颜色
        	}
        },
    	toolbox:{
    		feature:{
    			saveAsImage:{        //保存为图片。
    				type:'png',      //保存图片的格式，支持 'png' 和 'jpeg'。
    				name:'测试',        //保存文件的名字，默认使用主标题
    				// backgroundColor:'auto'   保存的图片背景色，默认使用 backgroundColor，如果backgroundColor不存在的话会取白色。
    				excludeComponents:['toolbox'] , //保存为图片时忽略的组件列表，默认忽略工具栏。
    				show:true,     //是否显示该工具。
    				// icon:'image://http://xxx.xxx.xxx/a/b.png',   设置图标
    				iconStyle:{color:'red'},      //保存为图片 icon 样式设置。   
    				emphasis:{},      //移入设置样式，同toolbox的emphasis
    				pixelRatio:1,    //保存图片的分辨率比例，默认跟容器相同大小   number
    			},
    			restore:{          //还原
    				show:true,      //是否显示该组件
    				title:'这是还原',    //名称
    				// icon:'',      图标设置
    				iconStyle:{color:'blue'},    //图标样式
    				emphasis:{iconStyle:{color:'red'}},     //移入显示样式，同上
    			},
    			dataView:{         //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
    				show:true,    //是否显示该工具      布尔值
    				title:'数据视图',    //移入显示的名字   string
    				iconStyle:{color:'yellow'},    //icon emphasis同上
    				readOnly:false,      //是否不可编辑（只读）。
    				//optionToContent:fun,    //自定义函数展示数据
    				//contentToOption:fun,   //如果支持数据编辑后的刷新，需要自行通过该函数实现组装 option 的逻辑
    				lang:['数据视图的', '关闭了啊', '刷新一哈'],   //数据视图上有三个话术，默认是['数据视图', '关闭', '刷新']。
    			},
    			dataZoom:{        //数据区域缩放。目前只支持直角坐标系的缩放。

    			},
    			magicType:{      //动态类型切换
    				show:true,    //是否显示
    				type:['line', 'bar', 'stack', 'tiled'],   //启用的动态类型
    				title:{
    					line:'切换为折线图',
    					bar:'切换为柱状图',
    					stack:'切换为堆叠',
    					tiled:'切换为平铺',
    				},
    				icon:{
    					// line:'image://http://xxx.xxx.xxx/a/b.png',   配置各个icon
    				},
    				iconStyle:{color:'pink'},     //配置icon的样式
    				emphasis:{iconStyle:{}},     //移入样式
    				option:{line:{}},      //配置每一个的样式
    				seriesIndex:{line:[]},    //各个类型对应的系列的列表   
    			},
    			brush:{
    					type:['rect','polygon'],
    					icon:{},     //没个按钮的icon
    					title:{     //标题文本。
    						rect:'矩形选择',
    					}
    			}
    		}
    	},
    	series : [
        	{
            name: '学生成绩区间',       //数据项名称
            type: 'line',      //饼图
            itemStyle:{},     //图形样式
        	lineStyle:{    //线条的样式
        		color:'red',   //线的颜色，支持rgba，还可以设置渐变和纹理
        		width:2,     // number   线宽
        		type:'dashed',  // 线的类型 'solid'\'dashed'\'dotted'
        		//还支持阴影的设置
        		opacity:0.5,      //t透明度。同css的opacity
        	},
        	emphasis:{     //高亮状态下提示的样式
        		itemStyle:{        //同上面的itemStyle
        			color:'blue',
        			borderWidth:5,
        			},      
        		label:{              //提示文字的设置
        			show:true,
        			position:'top',    //也可以设置为数组  [x,y]
        			offset:[30, 40],    //是否对文字进行偏移  横向偏移30 向上40
        			color:'blue',     //文字的颜色
        			fontSize:20,     //文字的大小
        		}
        	},   
        	areaStyle:{     //填充区域的样式
        		color:'#000',
        		opacity:0.5,
        	},
        	smooth:true,    //是否平滑曲线显示
        	markPoint:{   //图表标注
        		symbol:'roundRect',    //标注的图形样式
        		symbolSize:60,      //标注的大小
        		// symbolRotate: 60 ,   标记的旋转角度
        		symbolOffset:[20,20],   //标记的偏移位置 也可以写百分比
        		label:{show:true},    //标记的文本，同上面的label
        		itemStyle:{},   //标注的样式 同上面的itemStyle
        		emphasis:{},   //标注的高亮样式 同上面的emphasis
        		data:[     //标注的数据数组,//值大部分和下面的data一样，只写特殊的
        			{
        				// valueIndex:number,  默认使用第一个数值轴所在的维度
        				// x:number,   相对容器的屏幕 x 坐标，单位像素
        				// y:number,   相对容器的屏幕 y 坐标，单位像素
        			}
        		],
        	},  
        	markLine:{     //图表标线。
        		// precision:2,   标线数值的精度，在显示平均值线的时候有用。
        		label:{}, //标线的文本,同上面的label
        		lineStyle:{},    //标线的样式
        		emphasis:{},    //高亮标线的样式
        		data:{       //标线的数据数组
        			0:{},     //0和1里面的设置同markPoint.data数组中对象的设置
        			1:{},  
        		},
        	},
        	markArea:{   //图表标域，常用于标记图表中某个范围的数据
        		label:{},   //标域文本配置。   同上面的label
        		itemStyle:{},   //该标域的样式    同上面的itemStyle  
        		emphasis:{    //高亮的标域样式 , 	
        			label:{},   
        			itemStyle:{},
        		},   
        		data:{
        			0:{},        //同markLine的data
        			1:{}
        		}
        	},
            data:[
                {
                	value:235,
                	name:'90-100',
                	label:{show:true,position:'inside',color:'#000'},
                	itemStyle:{},    // 同series.itemStyle  单独设置这一项数据的引导线样式
                	emphasis:{itemStyle:{},label:{}},    // 同  单独设置这一项数据的高亮样式
                	tooltip:{},    //单独设置这一项数据的提示框
                	symbol:'arrow',   //标记的图形，还可以设置标记的一系列，查看markPoint属性
                },   
                {value:274, name:'80-90'},
                {value:310, name:'70-80'},
                {value:335, name:'60-70'},
                {value:400, name:'60分以下'}  
            	],
        	}
	    ]
	}
```
![折线图](amWiki/images/折线面积图.jpg)

##### 柱状/条形图     type:'bar'
柱状/条形图与折线图很像，都是放在坐标系中展示的

| 属性 | 描述 | 值|
| ---- | ----| ----|
|coordinateSystem | 该系列使用的坐标系 | string 默认是'cartesian2d' 好像也只能是这一个值 |
| xAxisIndex | 使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。 | number 默认为0 |
| yAxisIndex | 使用的 y 轴的 index，在单个图表实例中存在多个 y 轴的时候有用。 | number 默认为0|
|barWidth　| 柱条的宽度，不设时自适应。支持设置成相对于类目宽度的百分比。 | number, string 在同一坐标系上，此属性会被多个 'bar' 系列共享。应该设置在最后一个bar上面 |
| barMaxWidth | 柱条的最大宽度，不设时自适应。支持设置成相对于类目宽度的百分比。 | 值得解释同上的 barWidth|
| barMinHeight | 柱条最小高度，可用于防止某数据项的值过小而影响交互。 | number |
| barGap | 不同系列的柱间距离 | string 值为百分比 如果想要两个系列的柱子重叠，可以设置 barGap 为 '-100%'|
| barCategoryGap | 同一系列的柱间距离 | string 默认为类目间距的20% ，设定情况同barWidth |
| large | 是否开启大数据量优化，在数据图形特别多而出现卡顿时候可以开启。 | 布尔值 默认为false |
| largeThreshold | 开启绘制优化的阈值。 | number 默认值为400 |
| progressive | 渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。| number 默认为5000|
| progressiveThreshold |启用渐进式渲染的图形数量阈值 | number 默认值为3000 |
| progressiveChunkMode | 分片的方式 | 可选值 'sequential': 按照数据的顺序分片。缺点是渲染过程不自然。'mod': 取模分片，即每个片段中的点会遍布于整个数据，从而能够视觉上均匀得渲染。 |
| dimensions | 定义 series.data 或者 dataset.source 的每个维度的信息 | array |
| encode | 定义 data 的哪个维度被编码成什么。 | object |
| data | 系列中的数据内容数组 | object 包含name、value、label: {...}、itemStyle: {...}、emphasis: {...}、tooltip: |

柱状图简单案例
```js
var options={
    title:{
        text:'学生成绩柱状图'  ,   //主标题文本，支持使用 \n 换行。
    },
    legend:{
        data:['高中成绩占比','初中成绩占比']
    },
    grid:{        //直角坐标系内绘图网格
    	show:true,
    },
    //X轴设置
    xAxis:{
        data:['60分','70分','80分','90分',{value:'100分',textStyle: {
    		fontSize: 20,
    		color: 'red'     
		}}],
        show:true,   //是否显示x轴，默认为true
        position:'bottom',   // x轴的位置，默认值为bottom
    	name:'成绩',   //x轴的名字   也可以设置文本样式，通过nameTextStyle
    	nameGap:0,    //坐标轴名称与轴线之间的距离。 默认为15
    },
    yAxis:{
    	axisLabel:{       //坐标轴刻度标签的相关设置。
    		show:true
    	},
		type : 'value',       //坐标轴类型
        name : '人数',        //设置Y轴的名字
    },
    //name=legend.data的时候才能显示图例
    series:[{
        name:'高中成绩占比',
        type:'bar',      // 设置图标类型     柱状图
        coordinateSystem:'cartesian2d',   // 该系列使用的坐标系
        label:{    //图形上的文本标签 ,设置同折线图一样
            show:true,
            position:'top',   //标签的位置 [10,'50%']
            distance:10,      //距离元素的位置
            backgroundColor:'#ccc',  //标签的背景颜色
            borderWidth:5,     //标签的边框宽度
            borderColor:'red',     //标签的边框颜色
            textBorderColor:'yellow',   //文字本身的描边色
            //还可以设置阴影  文字阴影
        },
        itemStyle:{      //图形的样式
            color:'green',    //柱子颜色  ，默认在全局调色盘 option.color 获取颜色
            //还可以设置边框、阴影和透明度
        },
        emphasis:{     //高亮的样式
            label:{},
            itemStyle:{color:'red'},
        },
        barWidth:50,    //柱子的宽度
        barGap:'30%',    //不同系列柱子之间的距离

        data:['12','28','20',{
            name:'asd',
            value:25,
            label:{},     //同外面的series[0].label   设置单个的数据  
            itemStyle:{color:'blue'},  //同外面的series[0].itemStyle   设置单个的数据
            emphasis:{     //高亮的样式   设置单个的数据
                label:{},
                itemStyle:{color:'black'},
            },
        },'1'],
        markPoint:{
            symbol:'triangle',

        }      
    },{
        name:'初中成绩占比',
        type:'bar',      // 设置图标类型     柱状图
        coordinateSystem:'cartesian2d',   // 该系列使用的坐标系
        label:{    //图形上的文本标签 ,设置同折线图一样
            show:true,
            position:'top',   //标签的位置 [10,'50%']
            distance:10,      //距离元素的位置
            backgroundColor:'#ccc',  //标签的背景颜色
            borderWidth:5,     //标签的边框宽度
            borderColor:'pink',     //标签的边框颜色
            //textBorderColor:'yellow',   //文字本身的描边色
            //还可以设置阴影  文字阴影
        },
        itemStyle:{      //图形的样式
            color:'pink',    //柱子颜色  ，默认在全局调色盘 option.color 获取颜色
            //还可以设置边框、阴影和透明度
        },
        emphasis:{     //高亮的样式
            label:{},
            itemStyle:{color:'red'},
        },
        barWidth:50,    //柱子的宽度
        barGap:'30%',    //不同系列柱子之间的距离

        data:['42','25','15',{
            name:'asd',
            value:35,
            label:{},     //同外面的series[0].label   设置单个的数据  
            itemStyle:{color:'black'},  //同外面的series[0].itemStyle   设置单个的数据
            emphasis:{     //高亮的样式   设置单个的数据
                label:{},
                itemStyle:{color:'orange'},
            },
        },'1'],
        markPoint:{
            symbol:'triangle',

        }      
    }]

};
```
![柱状图](amWiki/images/柱状图.jpg)


##### 仪表盘     type:'gauge'

| 属性 | 描述 | 值 |
|----|----|----|
| radius | 仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。| string、number 默认值为'75%' |
| startAngle | 仪表盘起始角度 | number 圆心 正右手侧为0度，正上方为90度，正左手侧为180度。|
| endAngle | 仪表盘结束角度 | number 默认值为-45|
|clockwise | 仪表盘刻度是否是顺时针增长 | 布尔值 默认值为true |
| min | 最小的数据值 | number 默认为0 |
| max | 最大的数据值 | number 默认为100 |
|splitNumber | 仪表盘刻度的分割段数 | number 默认为10 |
| axisLine | 仪表盘轴线相关配置 | object 两个属性，show表示是否显示 lineStyle对象表示轴线的样式 |
|  splitLine |分隔线样式 | object 三个属性，show表示是否显示 length表示线长，支持百分比 lineStyle对象表示分割线样式 |
| axisTick | 刻度的样式| object 四个属性 show表示是否显示，length表示线长，splitNumber表示分隔线之间分割的刻度数 lineStyle对象表示刻度线的样式 |
| axisLabel | 刻度标签 | object 该对象的属性与label对象的设置一样 |
|pointer | 仪表盘指针 | Object 该对象有三个值 show表示是否显示，length表示指针的长度，可以设置百分比  width表示指针的宽度 |
| title | 仪表盘标题 | object 主要是设置标题的样式，位置 详细见下面的例子 |
| detail |仪表盘详情，用于显示数据 | object 属性值与title一样 |


仪表盘案例
```js
var options={
	title:{
		text:'仪表盘'
	},
	series:{
		type:'gauge',     //仪表盘
		radius:'70%',     //仪表盘半径
		name:'测试仪表盘',   //系列名称
		// startAngle:   225 , 仪表盘起始角度
		// endAngle:   -40 , 仪表盘结束角度
		min:-10,       //最小数据
		max:255,       //最大数据
		splitNumber:8,   //仪表盘刻度的分割段数
		axisLine:{     //仪表盘轴线相关配置。
			show:true,
			lineStyle:{     //仪表盘轴线样式
				color:[[0.2, 'blue'], [0.8, 'red'], [1, 'green']],    //颜色
			}
		},
		splitLine:{       //分隔线样式
			length:'50',     //线长
			lineStyle:{     //分隔线样式
				color:'red',   //还支持渐变色和纹理填充 ,  注意与轴线颜色设置的区别
				type:'dashed',   //线的类型
			}
		},
		axisTick:{      //刻度样式
			length:5,    //刻度线长，支持半径的百分比
            splitNumber:8, //分隔线之间分割的刻度数 默认为5
			lineStyle:{   //刻度线样式  
                color:'#eee',   //刻度线颜色
                width:1,    //刻度线宽度
                type:'solid', //刻度线类型
                //还支持设置阴影的模糊程度、颜色、偏移度    透明度
            }  
		},
        axisLabel:{},    //刻度标签,同label对象的设置
		pointer:{         //仪表盘指针
			show:true,
			length:'80%',    //仪表盘指针长度
            width:8
		},  
		itemStyle:{    //指针样式
            color:'#000',
            //还支持边框、阴影和透明度的设置
        },
        emphasis:{       //高亮的样式设置
            itemStyle:{color:'red',}
        },
		title:{      //仪表盘标题
			show:true,     //默认为true
            offsetCenter:[0,'-20%'],   //数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比
            //还可以设置文字的样式，边框 宽高 描边 阴影 内边距
		},
        detail:{         //属性的设置同title
            color:'yellow',
        },
		data: [{value: 50, name: '完成量'}],
        tooltip:{}   //查看tooltip组件的设置
	}
}
```
![仪表盘](amWiki/images/仪表盘.jpg)

##### 雷达图 type:'radar'  
>雷达图主要用于表现多变量的数据，例如球员的各个属性分析。依赖 radar 组件。

| 属性| 描述 | 值|
|---- | ----| ---- |
| radarIndex | 雷达图所使用的 radar 组件的 index | number |
|symbol | 标记的图形 | ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none' ，也可以自己引入图片 |
| symbolSize | 标记的大小 | number、array [20,10]表示宽20，高10 |
| symbolRotate | 标记的旋转角度 | number |
| symbolKeepAspect | 如果 symbol 是 path:// 的形式，是否在缩放时保持该图形的长宽比 |布尔值 默认为false |
| symbolOffset | 标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置 |array [0,'20%'] |
| areaStyle | 区域填充的样式 | object 属性 color表示填充色 opacity表示透明度， 还可以设置阴影 |
| emphasis | 高亮的样式设置  | object 里面包含itemStyle、label、lineStyle、areaStyle这四个对象 |
| data | 雷达图的数据是多变量的 | 数组，详细介绍结合下面的雷达图案例 |

#### radar 雷达图坐标系组件，只适用于雷达图
>该组件等同 ECharts 2 中的 polar 组件。因为 3 中的 polar 被重构为标准的极坐标组件，为避免混淆，雷达图使用 radar 组件作为其坐标系。

| 属性 | 描述 | 值 |
| ---- | ---- | ---- |
| id | 默认不指定。指定则可用于在 option 或者 API 中引用组件 | string |
| zlevel、z | 用于组件的层级 | number |
| center | 中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标| array [400,'50%'] |
|radius | 组件的半径 | number, string, Array [内半径,外半径] |
| startAngle | 坐标系起始角度，也就是第一个指示器轴的角度 | number |
| name | 雷达图每个指示器名称的配置项 | object 可以设置文字的样式、边框、背景色、阴影、宽高、描边|
| nameGap | 指示器名称和指示器轴的距离 | number 默认值为15 |
| splitNumber | 指示器轴的分割段数 | number 默认值为5|
| shape | 雷达图绘制类型 | string 支持 'polygon' 和 'circle' |
| scale | 是否是脱离 0 值比例 | 布尔值 默认为false |
| silent | 坐标轴是否是静态无法交互 | 布尔值 默认为false |
| triggerEvent | 坐标轴的标签是否响应和触发鼠标事件 | 布尔值，默认为false |
| axisLine | 坐标轴轴线相关设置 | object 同坐标轴中的同名属性  |
| splitLine | 坐标轴在 grid 区域中的分隔线 | object 包含两个属性，show表示是否显示，lineStyle对象用来设置分割线的样式 |
| splitArea | 坐标轴在 grid 区域中的分隔区域| object 包含两个属性，show表示是否显示，默认不现实，areaStyle对象设置分隔区域的样式，主要包括color、阴影和透明度|
| indicator | 雷达图的指示器，用来指定雷达图中的多个变量（维度） | array，详细介绍结合下面的雷达图案例 |

雷达图案例
```js
var options={
    title: {
        text: '雷达图'
  },
  legend: {           //图例组件
      data: ['预算分配', {
        name:'实际开销',
        icon:'circle',      //设置该图例组件为圆形，样式还有很多，也可以设置图片
      }],
      bottom:0  ,      //设置组件距离容器下方的距离，值可以为字符串'20%',还有left，right，top
      right:0,
      orient:'vertical',      //图例列表的布局朝向。
      textStyle:{},       //图例的公用文本样式。
  },
  radar: {            //雷达图坐标系组件，只适用于雷达图
      shape: 'circle',     //雷达图绘制类型 圆形 默认为polygon是方形的
      center:['50%', '50%'],
      radius:['30%','75%'],     //设置雷达图的半径，值可以为number、string、array，数组的话第一个值为内半径，第二个是外半径
      startAngle:90,    //起始角度
      splitNumber:10,            //指示器轴的分割段数
      name: {
          textStyle: {
              color: '#fff',                  //文字的颜色
              backgroundColor: '#999',     //文字块背景色
              borderRadius: 3,         //文字块的圆角
              padding: [3, 5]         //文字块的内边距，与css写法一样
         }
      },
      nameGap:20,   //指示器名称与指示器的距离   默认为15，   number
      shape:'circle',   //雷达图绘制类型
      axisLine:{           //坐标轴轴线相关设置
           symbol:'arrow' ,    //轴线两边的箭头。可以是字符串，表示两端使用同样的箭头；或者长度为 2 的字符串数组，分别表示两端的箭头。默认不显示箭头，两端都显示箭头可以设置为 'arrow'，只在末端显示箭头可以设置为 ['none', 'arrow']。
           symbolSize:[10,15],  //轴线两边的箭头的大小，第一个数字表示宽度，第二个数字表示高度
           symbolOffset:[0,0],  //轴线两边的箭头的偏移  可以是number
           lineStyle:{},      //轴线的样式    颜色，宽度、透明度、阴影
      },
      splitLine:{        //坐标轴在 grid 区域中的分隔线
            show:true,
            lineStyle:{},    //分隔线的样式    颜色，宽度、透明度、阴影
      },
      splitArea:{        //坐标轴在 grid 区域中的分隔区域默认不显示
            show:true,
            areaStyle:{  //分隔区域的样式
                color:['rgba(50,50,50,0.5)','rgba(200,200,200,0.3)'],
                //还可以设置阴影和透明度
            }
      },
      indicator: [                  //用来指定雷达图中的多个变量（维度）
         { name: '销售（sales）', max: 6500},
         { name: '管理（Administration）', max: 16000,color: 'red'},   //color设置文字颜色
         { name: '信息技术（Information Techology）', max: 30000},
         { name: '客服（Customer Support）', max: 38000},
         { name: '研发（Development）', max: 52000},
         { name: '市场（Marketing）', max: 25000}
      ]
  },
  series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',            //雷达图
      symbol:'rect',     //标记
      symbolSize:6,    //标记的大小，用数组分开表示宽和高，也可以用函数
      symbolRotate:80,  //标记的旋转角度
      label:{},    //图形上的文本标签
      itemStyle:{},    //拐点的样式
      lineStyle:{},   //线条的样式
      areaStyle:{},   //填充区域的样式
      emphasis:{       //高亮样式
            label:{show:true},    //高亮图形上的文本标签
            itemStyle:{},    //高亮拐点的样式
            lineStyle:{},   //高亮线条的样式
            areaStyle:{},   //高亮填充区域的样式
      },
      data : [
          {
              value : [4300, 10000, 28000, 35000, 50000, 19000],
              name : '预算分配',
              symbol:'circle',   //同上面的symbol
              symbolSize:8,
              symbolRotate:80,
              label:{},    //单个图形上的文本标签
              itemStyle:{},    //单个拐点的样式
              lineStyle:{},   //单个线条的样式
              areaStyle:{},   //单个填充区域的样式
              emphasis:{       //单个高亮样式
                    label:{show:true},    //单个高亮图形上的文本标签
                    itemStyle:{},    //单个高亮拐点的样式
                    lineStyle:{},   //单个高亮线条的样式
                    areaStyle:{},   //单个高亮填充区域的样式
              },
          },
           {
              value : [5000, 14000, 28000, 31000, 42000, 21000],
              name : '实际开销'
          }
      ]
  }]
}
```
![雷达图](amWiki/images/雷达图.jpg)

#### geo 地理坐标系组件
| 属性 | 描述 | 值|
|---- | ---- | ---- |
|id| 组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件 | string|
| show | 是否显示该组件 | 布尔值 默认为true |
| map | 地图类型 | string 下面有详细介绍如何使用该属性 |
| roam | 是否开启鼠标缩放和平移漫游 | 默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启|
| center | 当前视角的中心点，用经纬度表示 | array [115.97, 29.71] |
| aspectScale | 用于 scale 地图的长宽比 | number 默认值为0.75|
| boundingCoords |定义定位的左上角以及右下角分别所对应的经纬度 | 二维数组 [// 定位左上角经纬度[-180, 90],// 定位右下角经纬度[180, -90]]|
| zoom | 当前视角的缩放比例 | number 默认值为1 |
| scaleLimit | 滚轮缩放的极限控制 | object 两个属性，min表示最小的缩放值，max表示最大的缩放值 |
| nameMap| 自定义地区的名称映射 |object {'China' : '中国'}|
| selectedMode | 选中模式，表示是否支持多个选中 | 默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。 |
| label | 图形上的文本标签，可用于说明图形的一些数据信息 | object 具体设置查看上面的代码 |
| itemStyle | 地图区域的多边形 图形样式 | object 主要就是设置颜色、区域颜色、边框、阴影、透明度具体查看下面的地图案例 |
| emphasis | 高亮状态下的多边形和标签样式 | object 包含两个对象 label和itemStyle |
| zlevel、z | 设置组件的层级 | number |
| top、bottom、left、right | 设置组件距离容器的位置 | 值得设置同上面组件的解释 |
| regions| 在地图中对特定的区域配置样式| array 结合下面的地图案例去学习 |
|silent | 图形是否不响应和触发鼠标事件 | 布尔值 默认为false即响应和触发鼠标事件 |
| layoutSize |地图的大小|number, string 支持相对于屏幕宽高的百分比或者绝对的像素大小 |
| layoutCenter | 设置地图的位置，使用后left、top等四个值和宽高无效 | array ['30%', '30%'] |


ECharts 3不再内置地图数据增大代码体积，可以下载需要的地图文件引入并注册到 ECharts 中。ECharts 中提供了两种格式的地图数据，一种是可以直接 script 标签引入的 js 文件，引入后会自动注册地图名字和数据。还有一种是 JSON 文件，需要通过 AJAX 异步加载后手动注册。
* JavaScript 引入示例
```html
<div id="chinaMap" style="width:500px;height:500px;"></div>
<script src="echarts.js"></script>
<script src="china.js"></script>
<script>
var chart = echarts.init(document.getElementById('chinaMap'));
chart.setOption({
    series: [{
        type: 'map',
        map: 'china'
    }]
});
</script>
```
* JSON 引入示例
```js
$.get('map/json/china.json', function (chinaJson) {
    echarts.registerMap('china', chinaJson);
    var chart = echarts.init(document.getElementById('main'));
    chart.setOption({
        series: [{
            type: 'map',
            map: 'china'
        }]
    });
});
```
geo组件中国地图案例
```js
var options={
    title:{
        text:'地图测试'
    },
    geo:{
        map:'china',    //地图类型
        roam:true,      //是否开启鼠标缩放和平移漫游,也可以单独开启
        center:[] ,      //当前视角的中心点，用经纬度表示
        aspectScale:0.75,   //地图的长宽比、
        // boundingCoords:[
        //     // [-180, 90],     定位左上角经纬度
        //     // [180, -90]    定位右下角经纬度
        // ],
        zoom:1,       //当前视角的缩放比例
        nameMap:{
            'China' : '中国'
        },
        selectedMode:true,   //选中模式，表示是否支持多个选中，默认关闭
        label:{
            show:true,   //是否显示标签。默认为false
            //还可以设置标签的颜色、文字样式、位置、边框、阴影、描边、背景颜色、宽高
        },
        itemStyle:{   // 图形样式
            areaColor:'red',  //地图区域的颜色。
            color:'blue',
            //还可以设置边框、阴影、和透明度
        },      
        emphasis:{        //高亮状态下的多边形和标签样式。
            label:{},
            itemStyle:{
                areaColor:'blue',  //地图区域的颜色。
                color:'blue',
            }
        },
        top:0,         //组件离容器上侧的距离     能设置上下左右，值可以是字符串'20%'
        regions:[{
            name:'新疆',
            selected:true,
            label:{},
            itemStyle:{           //该区域的多边形样式设置
                areaColor:'black'       //设置该区域的颜色
            },   
            emphasis:{         //高亮的样式
                itemStyle:{areaColor:'pink'},
                lable:{}
            }
        },
        {
            name:'西藏',
            selected:true,
            label:{},
            itemStyle:{           //该区域的多边形样式设置
                areaColor:'black'       //设置该区域的颜色
            },   
            emphasis:{
                itemStyle:{areaColor:'pink'},
                lable:{}
            }
        }],
        layoutSize:'20%',   //设置地图的大小
        silent:false    //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
    },
}
```

踩过的坑：     
在使用中国地图时，移入显示省份名称，显示的位置不在省份的中间，这是因为省份名称是显示在省会的坐标那里，而有的省会在省份的边缘，解决这种问题需要在你的china.js文件中找到省份，然后改掉对应的坐标，比如：`{"cp":[113.665412,34.757975],"name":"河南","childNum":1}`   [113.665412,34.757975]是河南省会郑州的地理坐标，改变这个坐标就改变了省份名称显示的地方

![地图](amWiki/images/地图.jpg)


#### 富文本标签
在许多地方（如图、轴的标签等）都可以使用富文本标签                  
功能：             
* 能够定制文本块整体的样式（如背景、边框、阴影等）、位置、旋转等。
* 能够对文本块中个别片段定义样式（如颜色、字体、高宽、背景、阴影等）、对齐方式等。
* 能够在文本中使用图片做小图标或者背景。
* 特定组合以上的规则，可以做出简单表格、分割线等效果。

```js
var options = {
    title: {text: '天气情况统计', left: 'center'},
    series:[{
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[{
                    value:1548,
                    name: '幽州',
                    label: {
                        normal: {
                            formatter: [
                                '{title|{b}}{abg|}',
                                '{valueHead|天数}{rateHead|占比}',
                                '{hr|}',
                                '{value|202}{rate|55.3%}',
                                '{value|142}{rate|38.9%}',
                                '{value|21}{rate|5.8%}'
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderColor: '#777',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                title: {
                                    color: '#eee',
                                    align: 'center'
                                },
                                abg: {
                                    backgroundColor: '#333',
                                    width: '100%',
                                    align: 'right',
                                    height: 30,
                                    borderRadius: [4, 4, 0, 0]
                                },
                                hr: {
                                    borderColor: '#777',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                value: {
                                    width: 30,
                                    height:30,
                                    padding: [0, 20, 0, 30],
                                    align: 'left'
                                },
                                valueHead: {
                                    color: '#333',
                                    width: 40,
                                    height:30,
                                    padding: [0, 20, 0, 20],
                                    align: 'center'
                                },
                                rate: {
                                    width: 40,
                                    height:30,
                                    align: 'right',
                                    padding: [0, 10, 0, 0]
                                },
                                rateHead: {
                                    color: '#333',
                                    width: 40,
                                    height:30,
                                    align: 'center',
                                    padding: [0, 10, 0, 0]
                                }
                            }
                        }
                    }
                },
                {value:535, name: '荆州'},
                {value:510, name: '兖州'},
            ],

        }
    ]
};
```
![富文本应用](amWiki/images/富文本.jpg)
