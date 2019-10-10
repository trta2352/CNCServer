const express = require('express')
const bodyParser = require('body-parser');
const app = express();
let jwt = require('jsonwebtoken');
//const config = require('./config/config');
app.use(require("cors")());
app.use(bodyParser.json());

app.use(function (req, res, next) {
  let token = req.headers['x-access-token'] 
  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.status(401).json('Unauthorized request.')
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    if(req.header('Authorization') === 'apjKjF8QG43MI8xPr66YVeBmLyKLmN'){
        next();
    }
    else{
      res.status(401).json('Unauthorized request.')
    }
  }

})

app.use('/api/jokes', require('./controllers/jokesController.js'));

var port = process.env.PORT || 3000;
app.listen(port); 
   
