# Navigator 对象
Navigator 对象包含有关浏览器的信息,是window对象的属性，中文是"导航器"的意思

## Navigator的属性
| 属性 | 描述 | 值 |
| ---- | ---- | ---- |
|language |	返回当前浏览器的语言| "zh-CN"、"en"等 |
|cookieEnabled | 返回指明浏览器中是否启用 cookie 的布尔值 |
|onLine	| 返回指明系统是否处于联网状态的布尔值 |
|platform	| 返回运行浏览器的操作系统平台。|  "Win32", "Linux i686", "MacPPC", "MacIntel", 等 |
|userAgent |	返回由客户机发送服务器的 user-agent 头部的值 |
|mediaDevices	| 返回一个 MediaDevices 对象。|


### MediaDevices
mediaDevices 是 Navigator 只读属性，返回一个 MediaDevices 对象，通常，只需直接使用此对象的成员`navigator.mediaDevices.getUserMedia()`

#### MediaDevices.getUserMedia()
该对象可提供对相机和麦克风等媒体输入设备的连接访问，也包括屏幕共享。

该方法提醒用户需要使用音频（0或者1）和（0或者1）视频输入设备，比如相机，屏幕共享，或者麦克风。     

此方法传入三个参数(配置对象，成功处理函数，失败处理函数)                            

它返回一个 Promise 对象，成功后会resolve回调一个 MediaStream 对象。若用户拒绝了使用权限，或者需要的媒体源不可用，promise会reject回调一个  PermissionDeniedError 或者 NotFoundError 。

>返回的promise对象可能既不会resolve也不会reject，因为用户不是必须选择允许或拒绝。    

```js
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  /* 使用这个stream stream */
})
.catch(function(err) {
  /* 处理error */
});
```

##### 参数-配置对象
包含了video 和 audio两个成员的MediaStreamConstraints 对象，用于说明请求的媒体类型。必须至少一个类型或者两个同时可以被指定。           

```js
{
  audio: true,
  video: { width: 1280, height: 720 }     //想要使用1280x720的摄像头分辨率
}
// 如果无法准确满足此请求中参数要求，有可能返回其它的分辨率。强制使用关键字min, max, 或者 exact(就是 min == max)
```
```js
{
  audio: true,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 776, ideal: 720, max: 1080 }
  }
}
//当请求包含一个ideal（应用最理想的）值时，这个值有着更高的权重，意味着浏览器会先尝试找到最接近指定的理想值的设定或者摄像头（如果设备拥有不止一个摄像头）。
```
```js
//移动设备
{ audio: true, video: { facingMode: "user" } }     //优先使用前置摄像头
{ audio: true, video: { facingMode: { exact: "environment" } } }  //强制使用后置摄像头
```

##### 返回值
返回一个 Promise ， 这个Promise成功后的回调函数带一个 MediaStream 对象作为其参数。  


##### 在旧的浏览器中使用新的API
```js
// 老的浏览器可能根本没有实现 mediaDevices，所以我们可以先设置一个空的对象
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia
// 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function(constraints) {

    // 首先，如果有getUserMedia的话，就获得它
    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }

    // 否则，为老的navigator.getUserMedia方法包裹一个Promise
    return new Promise(function(resolve, reject) {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  }
}

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
.then(function(stream) {
  var video = document.querySelector('video');
  // 旧的浏览器可能没有srcObject
  if ("srcObject" in video) {
    video.srcObject = stream;
  } else {
    // 防止再新的浏览器里使用它，应为它已经不再支持了
    video.src = window.URL.createObjectURL(stream);
  }
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) {
  console.log(err.name + ": " + err.message);
});
```

##### 权限
在一个可安装的app（如Firefox OS app）中使用 getUserMedia() ，你需要在声明文件中指定以下的权限：
```js
"permissions": {
  "audio-capture": {
    "description": "Required to capture audio using getUserMedia()"
  },
  "video-capture": {
    "description": "Required to capture video using getUserMedia()"
  }
}
```       



## 案例
检测浏览器版本：
```js
 function getExplorerInfo() {
    var explorer = window.navigator.userAgent.toLowerCase();
    //ie
    if (explorer.indexOf("msie") >= 0) {
        var ver = explorer.match(/msie ([\d.]+)/)[1];
        return { type: "IE", version: ver };
    }
    else if (explorer.indexOf("edge") >= 0) {
        var ver = explorer.match(/edge\/([\d.]+)/)[1];
        return { type: "Edge", version: ver };
    }
    //firefox
    else if (explorer.indexOf("firefox") >= 0) {
        var ver = explorer.match(/firefox\/([\d.]+)/)[1];
        return { type: "Firefox", version: ver };
    }
    //Chrome
    else if (explorer.indexOf("chrome") >= 0) {
        var ver = explorer.match(/chrome\/([\d.]+)/)[1];
        return { type: "Chrome", version: ver };
    }
    //Opera
    else if (explorer.indexOf("opera") >= 0) {
        var ver = explorer.match(/opera.([\d.]+)/)[1];
        return { type: "Opera", version: ver };
    }
    //Safari
    else if (explorer.indexOf("Safari") >= 0) {
        var ver = explorer.match(/safari\/([\d.]+)/)[1];
        return { type: "Safari", version: ver };
    }
}
```

h5相机拍照
```html
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title></title>
        <script type="text/javascript" src="jquery.min.js"></script>
        <script>
            window.addEventListener("DOMContentLoaded", function () {
                var canvas = document.getElementById("canvas"),
                    context = canvas.getContext("2d"),
                    video = document.getElementById("video"),
                    videoObj = {
                        "video": true
                    },
                    errBack = function (error) {
                        console.log("Video capture error: ", error.code);
                    };
                $("#snap").click(function () {
                    context.drawImage(video, 0, 0, 330, 250);
                })
                if (navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia(videoObj)
                    .then(function (stream) {
                        video.srcObject = stream;
                        video.play();
                    })
                    .catch(errBack)
                } else if (navigator.webkitGetUserMedia) {
                    navigator.webkitGetUserMedia(videoObj, function (stream) {
                        video.src = window.webkitURL.createObjectURL(stream);
                        video.play();
                    }, errBack);
                }
            }, false);
        </script>
    </head>    
    <body>
        <div id="contentHolder">
            <video id="video" width="320" height="320" autoplay></video>
            <input type="button" id="snap" style="width:100px;height:35px;" value="拍 照" />
            <canvas style="" id="canvas" width="320" height="320"></canvas>
        </div>
    </body>
</html>
```



## Vibration（震动）
```js
// 可以传入一个大于0的数字，表示让手机震动相应的时间长度，单位为ms
navigator.vibrate(100)

// 也可以传入一个包含数字的数组，比如下面这样就是代表震动300ms，暂停200ms，震动100ms，暂停400ms，震动100ms
navigator.vibrate([300,200,100,400,100])

// 也可以传入0或者一个全是0的数组，表示暂停震动
navigator.vibrate(0)
```

### 用途
使手机震动，用来给用户一个提示，例如说数据校验失败。
![震动兼容性](assets/002/05-1545359841000.png)