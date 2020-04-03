# Set && WeakSet


## set兼容性
<iframe style="width:100%; min-height: 300px;" src="caniuse/1.html?style=es5" frameborder="0"></iframe>

## set 基本用法
* 该数据结构，类似于数组，但是，它的成员都是唯一的。
  ```javascript
  var s = new Set();
  [2, 3, 3, 5, 4, 5].map(x => {
    s.add(x);
    console.log(s);
  });
  // Set {2}
  // Set {2, 3}
  // Set {2, 3}
  // Set {2, 3, 5}
  // Set {2, 3, 5, 4}
  // Set {2, 3, 5, 4}
  ```

* 在Set()函数中可以传入一个数组类型的参数。
  ```javascript
  var set = new Set([3,5,1,1,4]);
  console.log([...set]);    // [3,5,1,4]
  console.log(set.size);    // 4
  ```

* 在set中，判断是否重复，使用的是"Same-value equality",类似于"===",但是有例外，其中NaN不等于NaN。
  ```javascript
  var set = new Set();
  set.add(NaN);
  set.add(NaN);
  set.add("1");
  set.add(1);
  console.log(set) // Set {NaN, "1", 1}
  ```

## Set 实例的属性和方法

### 属性
* Set.prototype.constructor：构造函数，默认是 Set 函数。
* Set.prototype.size：返回 Set 实例的成员总数。

### 方法
* 操作方法
  * add(value)：添加某个值，返回Set结构本身。
  * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
  * has(value)：返回一个布尔值，表示该值是否为Set的成员。
  * clear()：清除所有成员，没有返回值。

  ```javascript
  var set = new Set();
  set.add(1).add(2).add(2);

  console.log(set.size) // 2

  console.log(set.has(1)) // true
  console.log(set.has(2)) // true
  console.log(set.has(3)) // false
  console.log(set.delete(2)); // true
  console.log(set.delete(3)); // false
  console.log(set) // set {1}
  set.clear()
  console.log(set) // set {}
  ```

* 遍历方法 (Set 的遍历顺序就是插入顺序)
  * keys()：返回键名的遍历器
  * values()：返回键值的遍历器
    >由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法完全一致。

  * entries()：返回键值对的遍历器
  * forEach()：使用回调函数遍历每个成员

  ```javascript
  var set = new Set([1, 2, 3]);

  console.log(set.keys());   // SetIterator {1, 2, 3}
  console.log(set.values());   // SetIterator {1, 2, 3}
  console.log(set.entries());   // SetIterator {[1,1],[2,2],[3,3]}
  set.forEach((value, key) => console.log(value) )   // 1 2 3
  ```

## WeakSet
* WeakSet的成员只能是对象，而不能是其他类型的值。
* WeakSet中的对象都是弱引用，垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。这意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。
