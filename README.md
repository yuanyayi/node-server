# Learning Note for node-server

## step0:
  一个最简单的Http服务器雏形，表现了最基本的请求和响应。
1. 只使用了一个模块：http；
1. 返回一个静态页面。


## step1
  一个能够正常输出网页的服务器，可以通过路径返回图片、css等外部资源。服务器里面的功能都是需要你自己去实现的，不是打开就有的～
1. 模块path：处理文件路径（例：Windows和Linux文件路径不同，以此获取根路径）
1. 模块fs：读写文件相关模块
1. 模块url：req.url通过url模块的解析才能生成合理的文件路径和参数。pathObj = url.parse(req.url, true)
1. 为什么不指定res.setHeader('Content-Type', 'text/html; charset=utf-8')？
  浏览器读取到一些特定的后缀名（比如html、css、png）时，虽然没有指定Content-Type，还是可以正常解析。