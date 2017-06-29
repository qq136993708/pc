/*
 * 这些页面 有几个请求
 * 3个页面请求
 * 1个图片请求
 * 共4个请求
 *
 * */
var http = require('http');
var fs = require('fs');
// 创建服务

http.createServer(function (req, res) {
    var url = req.url;
    switch (url) {
        case "/index.html": // 处理 index.html的请求
         fs.readFile("work/index.html","utf-8",function (err, data) {
             if (err){
                 console.log("读取失败");
                 console.log(err)
             }else {
                 res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                 res.end(data)
             }
         })
            break;
        case "/log.html": // 处理 log.html的请求

            fs.readFile("work/log.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })


            break;
            
             case "/index.css": // 处理 log.html的请求

            fs.readFile("work/index.css","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/css;charset=utf8"})
                    res.end(data)
                }
            })


            break;
            
            
             case "/index.js": // 处理 log.html的请求

            fs.readFile("work/index.js","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/javascript;charset=utf8"})
                    res.end(data)
                }
            })


            break;
        case "/img.html": // 处理 img.html的请求
            fs.readFile("work/img.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case "/a.jpg":// 处理图片的请求

            fs.readFile("work/a.jpg",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    console.log(data)

                    res.writeHead(200,{"content-type": "image/jpeg;charset=utf8"})
                    res.end(data)
                }
            })
            break
        default: //其他请求
            res.end("404 没有找到此内容")
    }
}).listen(8080);
console.log("localhost:8080")





