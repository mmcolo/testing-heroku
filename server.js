const express = require('express'); 
const app = express();
var path = require('path');
const PORT = process.env.PORT || 5000;

var app_path = '/dist/clamer'

app.use('/', express.static(path.join(__dirname, app_path)))
 .listen(PORT,()=>console.log(`Listen on ${PORT}`));
