var express = require('express');
var app = express();
var fs = require('fs');

const cors = require('cors')
app.use(cors())

app.get('/clients', function(req, res) {
  fs.readFile(__dirname + "/" + "clients.json", 'utf8',
    function(err, data) {
	console.log(data);
	res.end(data);
    });
})

var server = app.listen(5708, function() {
    var host = server.address().addres
    var port = server.address().port
    console.log("Server listening at http://%s:%s", host, port)
})
