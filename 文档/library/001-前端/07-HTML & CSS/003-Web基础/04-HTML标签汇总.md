# HTML标签汇总

## 网页主体标签
| 标签 | 功能 |
| ---- | ---- |
| `<html></html>` | 网页的最大标签，用来包裹所有的内容 |
| `<head></head>` | 用于定义文档的头部 |
| `<body></body>` | 页面所有的内容都在这里 |
| `<title></title>` | 网页的标题 |
| `<meta></meta>` | 提供有关页面的元信息 |
| `<link></link>` | 定义文档与外部资源的关系，最常见的用途是链接样式表 |
| `<script></script>` | 标签用于定义客户端脚本,元素既可以包含脚本语句，也可以通过 src 属性指向外部脚本文件 |
| `<style></style>` | 用于为 HTML 文档定义样式信息。 |

## 文本文字标签
| 标签 | 功能 | 效果 |
| ---- | ---- | ---- |
| `<p></p>` | 段落标签 | <p>第一段</p><p>第二段</p> |
| `<pre></pre>` | 定义预格式化的文本 | <pre>空格     空格</pre>|
| `<b></b>` | 文本加粗 | <b>b标签</b> |
| `<i></i>` | 文本倾斜| <i>文本倾斜了</i> |
| `<h1></h1>` | 一级标题标签 | <h1>一级标题标签</h1> |
| h2-h6 | 二级到6级标题标签 | <h2>二级标题</h2><h6>六级标题</h6> |
| `<span></span>` | 普通文本，用来选中文字 | <span>span标签</span> |
| `<a href=""></a>` | 超链接标签 | <a href="https://www.baidu.com/">点击跳转到百度</a> |
| `<br/>` | 让文本强制换行 | 阿斯顿<br/>asd |
| `<hr/>` | 设置一条水平线分割线 | <hr/> |
| `<time></time>` | 标签定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的 | 我在 <time datetime="2008-02-14">情人节</time> 有个约会。</p> |

## 图片、音频、视频、画布、iframe
| 标签 | 功能 |
| ---- | ---- |
| `<img/>` | 用于引入图片 |
| `<video></video>` | 定义视频 |
| `<audio></audio>` | 标签定义声音 |
| `<canvas></canvas>` | 定义图形，必须使用脚本来绘制图形 |
| `<iframe></iframe>` | iframe 元素会创建包含另外一个文档的区域 |

## 区域标签
| 标签 | 功能 |
| ---- | ---- |
| `<div></div>` | 划分一个区域 |
| `<ul></ul>` | 定义无序列表 |
| `<ol></ol>` | 定义有序列表 |
| `<li></li>` | 定义列表项目 |
| `<header></header>` | 页面主体上的头部 |
| `<nav></nav>` | 页面的导航部分 |
| `<main></main>` | 网页的主体内容 |
| `<article></article>` | 表示一篇文章的主体内容 |
| `<footer ></footer >` | 页面的底部（页脚）标出网站的一些相关信息 |
| `<aside></aside>` | 用以表达注记、贴士、侧栏、摘要、插入的引 用等作为补充主体的内容 |
| `<code></code>` | 表示一段代码块。 |
| `<figure></figure>` | 标签规定独立的流内容 |
| `<section></section>` |  用于区域的章节表述 |


## 表单标签
| 标签 | 功能 | 效果 |
| ---- | ---- | ---- |
| `<form></form>` | 包含表单元素的区域 |  |
| `<input type="text">` | 文本输入框 | <input type="text"> |
| `<input type="password">` | 密码输入框 | <input type="password"> |
| `<input type="radio"> ` | 单选框选项| <input type="radio" name="sex" value="women">女<input type="radio" name="sex" value="man">男 |
| `<input type="checkbox">` | 复选框 | <input type="checkbox" name="vehicle" value="Bike">I have a bike <input type="checkbox" name="vehicle" value="Car">I have a car |
| `<input type="submit">` | 提交按钮 | <input type="submit" value="Submit"> |
| `<input type="email"/>` | 输入email | <input type="email" name="email" autocomplete="off"/> |
| `<input type="hidden"/>` | 隐藏文本框 | <input type="hidden" name="hidden_data" value="page1"/> |
| `<input type="file"/>` | 文件域 | <input type="file" name="picture"/> |
| `<input type="button"/>` | 普通按钮 | <input type="button" value="按钮"/> |
| `<input type="reset"/>` | 重置按钮 | <input type="reset" value="重置"/> |
| `select` `option` | 下拉列表 | <select  name="dd"  ><option  value="值1" selected>文字1<option><option  value="值2">文字2<option></select>|
| `<textarea name=""></textarea>` | 多行文本输入框 | <textarea name="">多行文本输入框</textarea> |
| `<button></button>` | 按钮标签 | <button>这是一个按钮</button> |


## 表格标签
| 标签 | 功能 |
| ---- | ---- |
| `<tabel></tabel>` | 定义表格 |
| `<tr></tr>` | 定义表格的行 |
| `<td></td>` | 定义表格的列 |
| `<th></th>` | 表格中的表头内容 |
| `<caption></caption>` | 表格的标题 |
| `<thead></thead>` | 表格的表头 |
| `<tbody></tbody>` | 定义表格主体 |
| `<tfoot></tfoot>` | 定义表格页脚 |
>不管thead、tbody、tfoot的代码先后顺序如何，html显示时，始终是先显示thead，再显示tbody，最后显示tfoot。
