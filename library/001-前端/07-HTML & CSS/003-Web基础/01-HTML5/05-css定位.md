# 定位 position
> 定位确定元素的位置，用定位属性能够方便我们将元素固定在任意的位置。设置定位之后的元素依靠`top,right,bottom,left`修改位置

| 属性值 | 描述     |
| :------------- | :------------- |
| static    | 静态定位，默认定位方式      |
| relative  |相对定位     |
| absolute  |绝对定位     |
| fixed     |固定定位     |
| initial     |初始值    |
| inherit     |继承   |

## 固定定位  position: fixed
> 将元素固定在窗口中的某个位置，绝对定位是相对于元素的，固定定位是相对于窗口的，会随着窗口的移动而移动。在 `ie6` 不支持此属性。`固定定位在IE浏览器里面是有问题的，这个问题我们在兼容性章节里会详细介绍。`

#### 写法
添加 `position: fixed;`, 使用`top` `bottom` `left` `right` 四个属性来表示定位元素的位置信息,表示定位元素到浏览器上下左右的间距(四选二使用)

```css
.toTop{
  position: fixed;
  right: 30px; bottom: 50px;
}
```
> 注: 固定定位必须固定位置信息,否则其位置会被其他元素影响


## 相对定位  position: relative
>  相对定位是参照元素原来的位置进行移动，元素原有的空间位不变，元素在移动时会盖住其他元素。在页面中我们很少使用相对定位来改变元素的位置。相对定位一般要和绝对定位搭配使用的。

利用相对定位根据自身位置移动并且移动时不影响其他元素的特性,可以制作鼠标移入元素移动的动效:
```css
/* 鼠标移入元素上移5px */
.box{
  position: relative;
  bottom: 0;
}
.box:hover{
  bottom: 5px;
}
```


## 绝对定位  position: absolute
> 绝对定位是元素完全脱离文档流，页面中的其他元素视他不存在，也就是说绝对定位元素不会影响到其他元素，在移动的过程中同样会盖住其他的元素。绝对定位的元素是相对于具有定位属性的父辈元素进行定位的，如果父辈元素没有定位属性，则相对于文档进行定位。因此在使用绝对定位时，还需要找一个合适的父辈元素设置为相对定位。<br/>
> 绝对定位在进行定位是相对于具有定位属性父辈元素进行定位。原点是父辈元素padding开始的位置。   

+ 特殊布局水平垂直居中

```css
   div{
     width:200px;
     height:200px;
     position:absolute;
     top:0;
     right:0;
     bottom:0;
     left:0;
     margin:auto;
   }

   div{
     width:200px;
     height:200px;
     position:absolute;
     top: 50%;
     left:50%;
     margin-top:-100px;
     /* 元素高度一半 */
     margin-left:-100px;
     /* 元素宽度一半 */
   }

```



## 层级 z-index
> 定位属性是脱离文档流的，也就是说他有可能盖住其他元素,如果有多个定义属性存在，那么相互间就会存在遮挡的情况，可以通过修改元素的z-index属性来设置元素叠放的层次，z-index值越高就会越在最上面

* 层级 z-index 的值为 `-1 到 正无穷` 的整数
* 定位元素默认的层级为0
* 如果定位元素挡住普通元素，可给普通元素添加`position: relative;` 并提高层级
* 定位元素层级为-1意味着该元素会在背景下方

