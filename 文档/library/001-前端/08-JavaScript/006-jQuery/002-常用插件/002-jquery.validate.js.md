# jquery.validate.js
> jQuery Validate 插件为表单提供了强大的验证功能，让客户端表单验证变得更简单，同时提供了大量的定制选项，满足应用程序各种需求。该插件捆绑了一套有用的验证方法，包括 URL 和电子邮件验证，同时提供了一个用来编写用户自定义方法的 API。所有的捆绑方法默认使用英语作为错误信息，且已翻译成其他 37 种语言。

* [下载地址](https://jqueryvalidation.org/)

## 使用方法
### 1. 引入所需要的文件
1. jquery.js
2. jquery.validate.js
3. messages_zh.js   (默认中文提示)
```html
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/jquery-validate/1.19.0/jquery.validate.min.js"></script>
<script src="https://cdn.bootcss.com/jquery-validate/1.19.0/localization/messages_zh.min.js"></script>
```
### 2. 定义校验规则
* **在标签中定义校验规则**，此时会采用默认的提示文字，提示文字内容可到`messages_zh.js`文件中修改
```html
<form id="form1">
    <input type="text" name="user"/>
    <input type="password" name="pwd" />
    <textarea name="text" required ></textarea>
</form>
<script>
    $("#form").validate()
</script>
```    
* **在js中定义校验规则**
    * 在validate方法中传入一个json对象，其中规定`rules`和`messages`
    * `rules`字段: 对应表单元素需要验证的规则列表，其属性名为表单元素中的`name`属性。验证规则详见下方表格。
    * `messages`字段:  对应`name`的表单元素验证规则失败的提示文字，每条验证规则都可对应一条提示文字。
```javascript
$("#form").validate({
    // rules字段： 需要验证的表单元素的规则，属性名为input的name值
    rules:{
        user:{
            required:true,
        },
        pwd:{
            minlength: 20
            required:"#one:checked"
        }
    },
    // messages字段：对应表单元素验证失败时的提示文字，
    messages:{
        user:{
            required:"请输入用户名",
        },
        pwd:{
            minlength:"请输入不少于20字的内容"
        }
    }
})
```

> 当然，不管是在标签中定义还是在js中定义校验规则，都需要在js中执行初始化操作。$("myform").validate()

## 校验规则

|规则|含义|
|:----:|:----:|
|required:true |必须输入的字段|
|remote:"check.php" |使用 ajax 方法调用 check.php 验证输入值。|
|email:true|必须输入正确格式的电子邮件。|
|url:true |必须输入正确格式的网址。|
|dateISO:true |必须输入正确格式的日期（ISO）|
|number:true |必须输入合法的数字|
|digits:true |必须输入整数|
|equalTo:"#field"|输入值必须和 #field 相同。|
|accept: |输入拥有合法后缀名的字符串（上传文件的后缀）。|
|maxlength:5 |输入长度最多是 5 的字符串（汉字算一个字符）。|
|minlength:10|输入长度最小是 10 的字符串（汉字算一个字符）|
|rangelength:[5,10]| 输入长度必须介于 5 和 10 之间的字符串（汉字算一个字符）|
|range:[5,10] |输入值必须介于 5 和 10 之间|
|max:5 |输入值不能大于 5|
|min:10 |输入值不能小于 10|

* 自定义提示文字可以修改 `messages_zh.js` 中的内容
* 自定义校验规则  
```javascript
  $.validator.addMethod(name,function(ele,val,attr){},"message")
```  
### 其他功能
* `debug:true` 定义表单只验证不提交,可以方便调试 
```js
$("form").validate({
    debug:true
})
```

* **更改错误信息显示的样式。** 通过插件内部生成的类名(`.error`)可以直接修改错误信息的样式
```css
/* 例：为错误信息添加图标  */
label.error {
  background:url("../images/icon.jpg") no-repeat 0px 0px;
  padding-left: 16px;
}
```

* **异步验证。** 使用 ajax 方式进行验证，默认会提交当前验证的值到远程地址
    ```js
    // 案例： post方式异步验证用户名是否已经存在
    $("#form").validate({
        rules:{
            user:{
                required: true,
                remote: {
                    url: "../user/validateUserName",
                    type: "post",
                    data: {
                        user: function() {
                            return $("#form input[name='user']").val();
                        }
                    }
                }
            },
            messages:{
                required: "请填写用户名"，
                remote: "用户名已存在"
            }
        }
    })
    ```
    > **注意： 远程地址只能返回 `true` 或 `false`，不能有其他返回。**