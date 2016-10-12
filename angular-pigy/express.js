var express = require('express');
var app = express();

app.use(express.static('app'));

app.get("/", function(req, res){
	
})

app.get('/test', function (req, res) {
   res.send('test');
})

var server = app.listen(8088, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})