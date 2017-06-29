/*
* 1.创建一个后台服务器
 要求：1.请求一个页面
 2.页面上有一个图片
*
*
* */

/*
* http ==>创建服务器
* fs===>读取文件  （img.html  图片）
* */
var http=require("http");
var fs=require("fs");
// 创建服务器
http.createServer(function (req, res) {
    var url=req.url;
    switch (url){
        case "/":// 处理 / 请求
            fs.readFile("work/img.html","utf-8",function (err, data) {
                //   判断一下 是否失败
                if(err){
                    console.log("读取是失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"contetn-type":"text/html;charset=utf8"});
                    res.end(data)
                }
            })
            break;
        case "/a.jpg":// 处理图片请求
            //   处理 图片的请求
            fs.readFile("work/a.jpg",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    //    设置响应头
                    res.writeHead(200,{"content-type":"image/jpeg"})
                    res.end(data)
                }
            })

            break;

        case "/log.html":// 处理 /log.html 的请求
            fs.readFile("work/log.html","utf-8",function (err, data) {
                //   判断一下 是否失败
                if(err){
                    console.log("读取是失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"contetn-type":"text/html;charset=utf8"});
                    res.end(data)
                }
            })

            break;

    }




}).listen(8080);
console.log("localhost:8080")








