const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(require("cors")());
app.use(bodyParser.json());


var port = process.env.PORT || 3000;
app.listen(port); 
   
