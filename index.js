var http = require('http')

var server = http.createServer((req,res)=>{
  setTimeout(()=>{
    console.log(req)
    console.log(res)
    
    res.setHeader('Content-Type', 'text/html; charset = utf-8')
    res.writeHead(200, 'haha')
    res.write('<html><head><meta charset="utf-8"><title>node-server</title></head><body>')
    res.write('<h1>Hello World！</h1>')
    res.write('</body></html>')

    res.end()
  },2000)
})

var port = 8080
console.log('open http://localhost:'+port)
server.listen(8080)