## Promise
### 兼容
<iframe style="width:100%; min-height: 300px;" src="caniuse/1.html?style=promises" frameborder="0"></iframe>

### 使用场景
执行代码的时候，下次执行的代码需要依赖上次代码执行的结果，只能将第二次的代码放到第一次代码执行成功之后的回调函数中，导致回调函数的多次嵌套

例如当进行ajax请求时，下次ajax请求需要依赖上次请求的结果，只能将第二次的ajax请求放在第一次的success函数中，容器嵌套过多

```js
ajax({
	url:"1.txt",
	success(res){
		// 第一个ajax结束
		var str1 = res
		ajax({
			url:"2.txt",
			success(res){
				// 第二个ajax结束
				var str2 = res
				ajax({
					url:"3.txt",
					success(res){
						// 第三个ajax结束
						var str3 = res

						console.log(str1+str2+str3)
					}
				})
			}
		})
	}
})
```

Promise 是 ES6 原生支持的，他把原来嵌套的回调改为了级联的方式。

Promise 主要就是为了解决异步回调的问题。用 Promise 来处理异步回调使得代码层次清晰，便于理解，且更加容易维护。

### 兼容性
Promise 是 ES6 原生支持的, Promise是新特性，在IE9-11中不支持
```html
通过 CDN 引入es6-promise.auto.js即可在ie中使用Promise：
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>

NPM
如果使用 npm 包管理器，可以按照下列方式执行安装：

npm install es6-promise --save # npm
或者更进一步，将下列代码添加到你使用 Vuex 之前的一个地方：

import 'es6-promise/auto'
```
### 使用

执行代码后的结果存入Promise实例化出的对象中，调用 该对象的 `than` 函数

```js
new Promise(function(resolve,reject){

    // resolve :函数执行成功调用，  调用之后会执行 then 方法
    // reject ：当函数出现错误，  调用之后会执行 catch 方法

    resolve(data)

})
.then(function(data){
    // data 可接收上次resolve发送的数据
    return new Promise(function(resolve,reject){
      resolve(data2)
  })
})
.then(function(data2){
    //data2 接收上次return的数据
})
.catch(function(){
    // 当请求出错时，会触发catch方法
})
.finally(function(){
    // 无论函数执行结果如何都会执行 finally函数
})

```

#### Promise 函数内部状态
1. pending   进行中
2. resolved  已完成   ( fulfilled )
3. rejected   失败

> Promise 对象，如果该对象状态变为resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获

## 注意事项
1. reject方法的作用，等同于抛出错误。
2. 如果 Promise 状态已经变成resolved，再抛出错误是无效的。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。
3. Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
4. then可以接收两个参数，成功和失败。  但是失败只能捕获本次的错误
5. Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误，Promise可以“吃掉”错误
6. catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。代码运行完catch方法指定的回调函数，会接着运行后面那个then方法指定的回调函数。如果没有报错，则会跳过catch方法

### Promise 对象方法
#### then 方法：
Promise异步函数结束之后，调用then方法
#### catch 方法：
当Promise 异步函数 出现错误，会调用catch方法
#### finally 方法：
无论成功 失败都会执行 finally 方法

#### Promise.all 方法
可以将多个Promise对象包装成一个新的 Promise 实例。 (并行)

* Promise.all方法接受一个数组作为参数，参数必须都是 Promise 对象
* 只有 参数 的状态都变成fulfilled，Promise.all 对象的结果才为fulfilled
* Promise.all 对象可以接收每个 参数的返回值

```js
Promise.all([p1,p2]).then(([end1,end2])=>{
    console.log("全部已完成")
}).catch(()=>{
});
```
#### Promise.race 方法
可以将多个Promise对象包装成一个新的 Promise 实例。

* Promise.race方法接受一个数组作为参数，参数必须都是 Promise 对象
* 只要参数之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数

#### Promise.resolve 方法
将任意数据变为变为 Promise 对象，如果其已经时Promise对象，则无任何操作。
