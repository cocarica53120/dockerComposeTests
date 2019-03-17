var express = require('express');
var app = express();

// Constants
const PORT = process.env.PORT || 8081;
const HOST = '0.0.0.0';


app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(PORT, function () {
   var host = HOST;//server.address().address
   var port = PORT;//server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
