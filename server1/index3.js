/**
 * Created by 小灰 on 2018/4/1.
 */
var http = require('http');
var fs =require('fs');
var url =require('url');

http.createServer(function (req,res) {
    var pathObj = url.parse(req.url,true);
    console.log(pathObj);
    switch(pathObj.pathname){
        case'/getMusic':
            var ret;
            if(pathObj.query.age=="18"){
                ret = {
                    age:'18',
                    music:'hello world'
                }
            }else{
                ret={
                    age:pathObj.query.age,
                    music:'不知道'
                }
            }
            res.end(JSON.stringify(ret));
            break;
        case'/user/123':
            res.end(fs.readFileSync(__dirname+'/static/user.text'));
            break;
        default :
            res.end(fs.readFileSync(__dirname+'/static'+pathObj.pathname))
    }
}).listen(3649);
console.log("visit http://localhost:3649");