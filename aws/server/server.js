const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname));
});

const server = http.createServer(app);
server.listen(port, function () {
  console.log('Running...');
});
