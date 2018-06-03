var http = require('http')
var path = require('path') // 处理文件路径
var fs = require('fs') // 读写文件
var url = require('url')

// 支持静态目录
function staticRoot(staticPath, req, res) {
  // console.log(staticPath)
  // ==>/Users/***/Documents/GitHub/node-server/step1/static
  // console.log(req.url)
  // 将req.url解析成能够识别的url对象
  var pathObj = url.parse(req.url, true)
  // console.log('pathObj')
  // console.log(pathObj)

  // 设定首页地址
  if(pathObj.pathname === '/') {
    pathObj.pathname += 'index.html'
  }
  // 生成合法的文件地址
  var filePath = path.join(staticPath, pathObj.pathname)
  console.log(filePath)

  /* 同步读取文件？
   * var fileContent = fs.readFileSync(filePath, 'binary')
   * res.write(fileContetn, 'binary')
   * res.end()
  */

  // 读取文件并输出
  // 如果有图片和文件，需要转化为二进制格式去读取
  fs.readFile(filePath, 'binary', function(err, fileContent){
    if(err){
      console.error('404: not found')
      res.writeHead(404, 'not found')
      res.end('<h1>404 not found</h1>')
    }else{
      console.log('200: ok')
      res.writeHead(200, 'ok')
      res.write(fileContent, 'binary')
      res.end()
    }
  })
}

// console.log(path.join(__dirname, 'static'))

var server = http.createServer(function(req, res){
  staticRoot(path.join(__dirname, 'static'), req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080')
