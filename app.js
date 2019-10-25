/**
 * * Module dependencies.
 * */

var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');

// Adding dotenv to Env Variable
const dotenv = require('dotenv');
dotenv.config();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); 

var routes = require('./routes/routes.js');

app.set('port', process.env.PORT || 8000);

switch (process.env.ENV){
   case 'DEV': 
	msg = 'Unleash the power of our people :) )'
	break;
   case 'TEST':
	msg = 'Show respect, humility and integrity'
	break;
   case 'DR':
	msg = 'Learn from challenge and change'
        break;
   case 'PROD':
	msg = 'Have fun while being the best'
	break;
    default:
	msg = 'Environment not defined'
}
// Testing Env Variable
console.log(`Your port is ${process.env.ENV}`); 
console.log(`Your port is ${process.env.PORT}`);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  	
	  res.render(__dirname + '/views/index.html', {msg: msg});

}).listen(app.get('port'));

