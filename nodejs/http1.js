/*
* 查看 index.html
* 有几个请求
* */
/*
* http模块  fs模块
*
*
* */
var http=require("http");
var  fs=require('fs');
http.createServer(function (req, res) {
    console.log(req.url)
//     处理 / 的请求
    if (req.url=="/"){
    //    发送index.html页面
        fs.readFile("public/img.html","utf-8",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                //设置响应头
                res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                // 发送数据
                res.end(data)
            }



        })






    }else if (req.url=="/index.css"){ // 处理 /index.css
        //    发送index.html页面
        fs.readFile("public/index.css","utf-8",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                //设置响应头
                res.writeHead(200,{"content-type":"text/css;charset=utf8"})
                // 发送数据
                res.end(data)
            }



        })
    }else if (req.url=="/index.js"){ //处理的 /index.js
        //    发送index.html页面
        fs.readFile("public/index.js","utf-8",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                //设置响应头
                res.writeHead(200,{"content-type":"text/javascript;charset=utf8"})
                // 发送数据
                res.end(data)
            }



        })

    }else if (req.url=="/a.jpg"){ //处理的 /index.js
        //    发送index.html页面
        fs.readFile("public/a.jpg",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                //设置响应头
                res.writeHead(200,{"content-type":"image/jpeg;charset=utf8"})
                // 发送数据
                res.end(data)
            }



        })
    }
}).listen(3000);