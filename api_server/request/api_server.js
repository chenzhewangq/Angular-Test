var express = require('express');
// var path = require('path');
/*var logger = require('morgan');*/
var bodyParser = require('body-parser');
var app = express();
var http = require('http').createServer(app);
app.set('port', process.env.PORT || 19001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// var queryResponse = require('../response/res_comm');
http.listen(app.get('port'), function() {
	console.log('API服务器已启动，开始监听端口' + app.get('port'));
});

// app.post('/om/resource/show/basisShowQuery',function(req,res){
// 	console.log('...');
// 	// var perData = devidePage(req.body,queryResponse.BasisShowData);
// 	setTimeout(function() {
// 		var resData  = {
// 			success:true,
// 			data: {
// 				page:{totalCount:11},
// 			}
// 		};
// 		res.send(resData);
// 	},1000);
// });

var res_cz = require('../response/res_cz');
var api_cz = require('./api_cz');
api_cz.request(app, res_cz);