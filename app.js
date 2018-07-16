//引入express
let express = require("express");
//引入图片验证码外部库
let svgCaptcha = require('svg-captcha');
//引入文件模块
let path = require("path");

//开启服务
let app = express();

//设置托管静态资源(没有这个无法加载css与js等静态资源样式)
app.use(express.static("static"));

//路由1 使用get 方法,访问登录页面时,直接读取登录页面并返回
app.get('/login',(req,res)=>{
    //直接读取文件
    res.sendFile(path.join(__dirname,"static/views/login.html"));
})

//路由2
//生成图片功能  ,把这个地址设置给登录页面的图片src属性
// app.get('/login/captchaImg',(req,res)=>{
app.get('/login/captchaImg.png',(req,res)=>{
    var captcha = svgCaptcha.create();
    //打印验证码
    console.log(captcha.text);
    res.type('svg');
    res.status(200).send(captcha.data);
})

//开启监听
app.listen(8848,'127.0.0.1',()=>{
    console.log("开启监听");
})


