# jquery.transit.js
> `jquery.transit.js`使用 CSS3 的新特性来实现过渡效果，比jQuery默认的`.animate`方法要顺畅得多。但因为使用 CSS3 进行过渡效果，所以对不支持 CSS3 的浏览器效果有所下降。语法和`.animate`方法相同，因此很好上手。

* [下载地址](https://github.com/rstacruz/jquery.transit)

## 使用方法
### 1. 引入所需文件
```html
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/jquery.transit/0.9.12/jquery.transit.min.js"></script>
```  
### 2. 可在jquery的css方法中快速操作css3 transform属性
```javascript
$("#box").css({ x: '30px' });       // 向右移动30px
$("#box").css({ y: '60px' });       // 向下移动60px
$("#box").css({ translate: [60,30] });    // 向右移动60px, 向下移动30px
$("#box").css({ rotate: '30deg' });     // 顺时针旋转30度
$("#box").css({ scale: 2 });          // 放大2倍
$("#box").css({ scale: [2, 1.5] });     // 宽放大2倍，高放大1.5倍
$("#box").css({ skewX: '30deg' });      // 水平斜切
$("#box").css({ skewY: '30deg' });      // 垂直斜切
$("#box").css({ perspective: 100, rotateX: 30 });     // 3d旋转
$("#box").css({ rotate3d: [1, 1, 0, 45] });
```    
* 支持相对值的写法
```javascript
$("#box").css({ rotate: '+=30' });      // 旋转增加30度
$("#box").css({ rotate: '-=30' });      // 旋转减少30度
```
* 单位都是可缺省的
```javascript
$("#box").css({ x: '30px' });
$("#box").css({ x: 30 });
```
* 多个参数的传递方式
  多个参数可以写为数组或字符串用逗号隔开
```javascript
$("#box").css({ translate: [60,30] });
$("#box").css({ translate: ['60px','30px'] });
$("#box").css({ translate: '60px,30px' });
```
* 可以用于获取属性（若属性有多个值，则返回数组）
```javascript
$("#box").css('rotate');       // '30px'
$("#box").css('translate');   // ['60px', '30px']
```

### 3. 用`transition()`实现动画    
你可以使用`$.fn.transition()`来进行 css3 动画效果。和`$.fn.animate()`的效果一样，只是他使用了 css3 过渡。

```javascript
$("#box").transition({ opacity: 0.1, scale: 0.3 });
$("#box").transition({ opacity: 0.1, scale: 0.3 }, 500);    
$("#box").transition({ opacity: 0.1, scale: 0.3 }, 'fast');                    
$("#box").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in');              
$("#box").transition({ opacity: 0.1, scale: 0.3 }, function() {..});         
$("#box").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in', function() {..});

$("#box").transition({
  opacity: 0.1, scale: 0.3,
  duration: 500,
  easing: 'in',
  complete: function() { /* ... */ }
});
```
