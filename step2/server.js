var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

http.createServer((req, res) => {

  var pathObj = url.parse(req.url, true)
  console.log(pathObj)
  /*
  Url {
    protocol: null,
    slashes: null,
    auth: null,
    host: null,
    port: null,
    hostname: null,
    hash: null,
    search: '?city=beijing',
    query: { city: 'beijing' },
    pathname: '/getWeather',
    path: '/getWeather?city=beijing',
    href: '/getWeather?city=beijing' }
  */

  switch (pathObj.pathname) {
    case '/getWeather':
      let ret;
      if (pathObj.query.city) {
        ret = { city: pathObj.query.city, weather: '晴天' }
      } else {
        ret = { city: 'none', weather: 'don\'t know' }
      }
      res.end(JSON.stringify(ret);
      break;
    case '/user/123':
      res.end(fs.readFileSync(__dirname + '/static/index.html'))
      break;
    default:
      res.end(fs.readFileSync(__dirname + '/static' + req.url))
  }
}).listen(8080)