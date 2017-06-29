/*
 * 要求：
 * html页面
 * css  js img
 * 在css面设置  字体颜色  红
 * 在js面设置   alert("我js文件中的代码")
 * 页面面上有张图片
 * 思路：
 * 访问一个 html页面 在这个页面上有 css js img
 * 处理这些请求
 * 请求路径   读取的文件  发送数据的格式（响应头）
 *
 * */
/*
 * 用到的模块 fs http
 * */
var fs = require('fs');
var http = require('http');
//  创建服务
http.createServer(function (req, res) {
    var url = req.url;// 用url 保存 请求地址
   console.log(url)
    switch (url) {
        case "/log.html":

            //处理  / 请求
            // 发送 index.html页面

            fs.readFile("public/img.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break
        case "/index.css"://处理  /index.css 的请求
            fs.readFile("public/index.css", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    //     设置响应头
                    res.writeHead(200, {"content-type": "text/css"})
                    res.end(data)
                }
            });
            break;
        case "/index.js"://处理  /index.css 的请求
            fs.readFile("public/index.js", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    //     设置响应头
                    res.writeHead(200, {"content-type": "text/javascript"})
                    res.end(data)
                }
            });
            break;
        case "/a.jpg":
            fs.readFile("public/a.jpg", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    //设置响应头
                    res.writeHead(200, {"content-type": "image/jpeg;charset=utf8"})
                    // 发送数据
                    res.end(data)
                }
            });
            break;
        case "/img.html":
            // 处理 /demo.html的请求
            fs.readFile("public/log.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;

    }


}).listen(3000)



