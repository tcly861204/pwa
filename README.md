## PWA（Progressive Web APP)渐进式网页应用分享

+ PWA是Google推出的技术, 渐进式接近原生app的web app.

> PWA（Progressive Web App）是一种理念，使用多种技术来增强web app的功能，可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验。


#### ● Progressive Web App 是什么？
> Progressive Web App (下文以“PWA”代指) 是一个令人兴奋的前端技术的革新。PWA综合了一系列技术使你的 web app表现得就像是 native mobile app。相比于纯 web 解决方案和纯 native 解决方案，PWA对于开发者和用户有以下优点：

+ 你只需要基于开放的 W3C 标准的 web 开发技术来开发一个app。不需要多客户端开发。
+ 用户可以在安装前就体验你的 app。
+ 不需要通过 AppStore 下载 app。app 会自动升级不需要用户升级。
+ 用户会受到‘安装’的提示，点击安装会增加一个图标到用户首屏。
+ 被打开时，PWA 会展示一个有吸引力的闪屏。
+ chrome 提供了可选选项，可以使 PWA 得到全屏体验。
+ 必要的文件会被本地缓存，因此会比标准的web app 响应更快（也许也会比native app响应快）
+ 安装及其轻量 -- 或许会有几百 kb 的缓存数据。
+ 网站的数据传输必须是 https 连接。
+ PWA 可以离线工作，并且在网络恢复时可以同步最新数据。

#### ● PWA技术具备知识
> PWA是全新的内容，它不仅仅是全新的API那么简单，更为重要的是，它引入了一系列全新的标准和语法作为基础。在学习PWA之前，你需要保证你已经熟练使用以下的内容：

+ ES6标准语法
+ Promise标准，这是最为重要的知识点，如果你还不熟或者没听说过，那么你得好好思考一下了
+ fetch，全新的获取资源的API，它包括Request、Response、Header和Stream
+ WebWorker，JavaScript解决单线程的方案<入门可以不需要>
+ Cache API（缓存API）

#### ● PWA的坑
+  PWA在线上部署的时候，请确保是在HTTPS下面，而非HTTP。当然，为了便于开发，浏览器支持localhost上面部署。
+  PWA完成缓存后，很多时候你会发现代码无法变动，或者没有按照预期的那样自动更新worker，这时候不妨在清除缓存试试。
+  PWA并非支持所有浏览器，事实上，很少浏览器默认支持PWA。这方面Chrome和FireFox做得比较好，因此本文采用Chrome作为开发工具。
+ SW. js文件必须在当前路径

#### ● PWA准备工作
```
# 本地必须有一个服务器（node>6+, npm>3）
npm init -y
mkdir js css img json
touch index.html json/manifast.json sw.js css/main.css js/main.js app.js
```

#### ● 现场实战
> 源码地址  https://github.com/tcly861204/pwa.git


#### ● 阅读文献
+ https://blog.csdn.net/u013488847/article/details/79776622
+ https://blog.csdn.net/lecepin/article/details/78911091
+ https://www.oschina.net/news/93871/pwa-expected-major-explosion-2018