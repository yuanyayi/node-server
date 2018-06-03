var http = require('http')
var path = require('path') // 处理文件路径
var fs = require('fs') // 读写文件
var url = require('url')

// 支持静态目录
function staticRoot(staticPath, req, res) {
  console.log(req.url)
  var pathObj = url.parse(req.url, true)
  console.log(pathOBj)
}
