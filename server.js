var express = require('express');
var app = express();
var port = 8080;
app.use('/',express.static('./public'));
// app.get('/' , function(req,res){
//     res.send("OK");
// });
app.listen(port);
console.log('listening..... on port ' + port);