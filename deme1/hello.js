var express = require('express');
var app = express();

//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})
 
 
//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})
 

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})

//  /del_user 页面响应
app.post('/del_user',function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面'+req.url);
 })


 
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
 

app.listen(9099); //4

// var server = app.listen(9099, 'localhost',function () {

 
//   var host = server.address().address
//   var port = server.address().port
//   console.log(host)
//   console.log('应用实例，访问地址为 http://'+host+':'+port)

 
// })
// var http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

