const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/tp-front'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/tp-front/index.html'));});
app.listen(process.env.PORT || 8080);
