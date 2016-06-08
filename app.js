'use strict';
var http = require('http');
var fs = require('fs');
var PORT = 9999;
var server = http.createServer( (req, res) => {
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.end(fs.readFileSync('data.json', 'utf8'));
});

server.listen(PORT);
console.log("Server is now running on " + PORT);
console.log("Update data.json with valid JSON to get proper response.")
console.log("http://localhost:9999")
