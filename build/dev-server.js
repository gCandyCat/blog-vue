var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var bodyparser = require("body-parser");
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing' ? require('./webpack.prod.conf') : require('./webpack.dev.conf')


var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'data/data.db',
        autoload: true
    });



// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json())
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options
        }
    }
    app.use(proxyMiddleware(context, options))
})

app.get('/getData', function(req, res) {
    db.find({
        type:"userblog"
    }, function(err, docs) {
        res.send(docs);
    });
})
app.post('/save', function(req, res) {
    db.find({
        id: '1'
    }, function(err, docs) {
        if (docs.length > 0) {
            db.update({
                id: req.body.id
            }, req.body, {}, function(err, numReplaced) {

            });
        } else {
            db.insert(req.body, function(err, newDoc) { // Callback is optional
                // newDoc is the newly inserted document, including its _id
                // newDoc has no key called notToBeSaved since its value was undefined
            });
        }
    });

})

// app.post('/save', function(req, res) {
//     db.find({
//         id: '1'
//     }, function(err, docs) {
//         db.update(req.body); {

//         }
//     });

// })


//用户注册
app.post('/regiest', function(req, res) {
    var savedata = {
        type: "user",
        data: req.body
    }
     db.insert(savedata, function(err, newDoc) { // Callback is optional
        if (err) {
            res.send("error");
        } else {
            res.send("success")
        }
    });
})
app.post('/findUser', function(req, res) {   //判断用户是否存在
    var finddata = {
        type: "user",
        "data.email": req.body.email
    }

     db.find(finddata, function(err, docs) {
                console.log("req.body.email:", req.body.email,docs.length)
            if (docs.length > 0 ) {
                res.send("fail");
            } else {
                res.send("nobody");
            }
        });

})


//用户登录
app.post('/dologin', function(req, res) {
        console.log("req.body.email:", req.body.email);

        db.find({
            type: 'user',
            "data.email": req.body.email
        }, function(err, docs) {
            if (docs.length > 0) {
                console.log("dologin docs11111:", docs[0].password , req.body.password);
                if (docs[0].data.password === req.body.password) {

                    res.send({res:'success',user:docs[0].data});
                } else {
                    res.send({res:'password_error'});
                }

            } else {
                res.send({res:"user_not_find"});
            }
        });
    })

//更改用户信息
app.post('/upuserinfo', function(req, res) {

        db.update({
         type: 'user',
            "data.email": req.body.data.email
        }, { $set: req.body  },{ upsert: true},function(err, numReplaced){
                if(err){
                    res.send("error");
                }else{
                    res.send("success");
                }

        }) ;


})
//获取用户默认头像
app.get('/getuserImg', function(req, res) {
    db.find({
        type: 'userPic',
        id: 'img'
    }, function(err, docs) {
        res.send(docs);
    });
})
//保存用户头像
app.post('/savaUserpic', function(req, res) {

    db.update({
     type: 'user',
        "data.email": req.body.data.email
    }, { $set:  req.body   },{ upsert: true},function(err, numReplaced){
            if(err){
                res.send("error");
            }else{
                res.send("success");
            }
    }) ;


})
// 保存用户个人博客
app.post('/saveuserblog', function(req, res) {
    var savedata = {
        type: "userblog",
        data: req.body,
    }

        db.insert(savedata, function(err, newDoc) { // Callback is optional
            // newDoc is the newly inserted document, including its _id
            // newDoc has no key called notToBeSaved since its value was undefined
            if(err){
                res.send("error");
            }else{
                res.send("success");
            }
        });

})


// 获取个人博客页博客列表
app.post('/getBlog', function(req, res) {
    db.find({
        type: 'userblog',
        "data.useremail": req.body.useremail
    }, function(err, docs) {
        res.send(docs);
    });

})


// 获取首页博客列表
/*app.get('/bloglist', function(req, res) {
    db.find({
        type: 'userblog'
    }, function(err, docs) {
        res.send(docs);

    });

})*/


app.post('/bloglistPage', function(req, res1) {
  var sk=parseInt((req.body.cur-1)*req.body.pageLen);
  /*var lt=req.body.pageLen*/
   /* var query=db.find({type:"news"});
    query.sort({"data.date":-1});
    query.skip(sk);
    query.limit(parseInt(req.body.pageLen));
    query.exec(function(err,rs){
      if(err){
        res.send(err);
      }else{
        res1.send(rs);
      }
})*/
   db.find({type:"userblog"}).skip(sk).limit(5).exec(function(err, docs) {
        res1.send(docs);
    });
})







//匹配博客用户
app.post('/matchUser', function(req, res) {
    db.find({
        type: "user",
        "data.email": req.body.email
    }, function(err, docs) {
        res.send(docs);
         console.log('docs:',docs);
         console.log('req.body:',req.body);
    });

})

    // handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})
