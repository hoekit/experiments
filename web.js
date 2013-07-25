var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var html = process.argv[2] || './index.html';
app.get('/', function(request, response) {
  var data = fs.readFileSync(html);
  var buf = new Buffer(data);
  response.send(buf.toString());
});

var port = process.argv[3]|| 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
