"use strict";

const express = require('express');
const packageInfo = require('./package.json');

const app = express();

app.get('/', function (req, res) {
  res.send("wtfstockphotos");
});

var server = app.listen(3000, '127.0.0.1', function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Web server started at http://%s:%s\n', host, port);
});
