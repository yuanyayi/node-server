var http = require('http')

var server = http.createServer((req,res)=>{
  setTimeout(()=>{
    // Response Headers
    // 响应头告知浏览器将要接收到何种信息。
    // [Content-Type有哪些类型？](http://www.cnblogs.com/annabook/p/5043846.html)
    // 这里的charset优先级最高，浏览器级别。
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // General: Status Code
    // 状态码如果随便写，浏览器会按状态码作出相应的提示，但是数据还是接收成功的。
    res.writeHead(200, 'crystal')
    // Response
    // 这里的charset是管页面里的。
    res.write('<html><head><meta charset="utf-8"><title>node-server</title></head><body>')
    res.write('<h1>Hello World！</h1>')
    res.write('</body></html>')

    res.end()
  },2000)
})

var port = 8080
console.log('open http://localhost:'+port)
server.listen(8080)