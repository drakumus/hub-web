//--------imported packages--------
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt         = require('jsonwebtoken');
//var config = require('./config');
//var User        = require('./app/model/user'); //mongoose model
//--------------------------------

//--------config--------
var port = process.env.PORT || 3000;
mongoose.connect(config.database);

var userSchema = new Schema({
    name: String,
    password: String,
    isAdmin: Boolean,
});
var userModel = mongoose.model('users', userSchema);

mongoose.connect('mongodb://localhost:4000', {config: {autoIndex: false}});

//------------------------

app.set('superSecret'. config.secret);

app.use(bodyParser.urlecnoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));


app.get('/', function(req, res)
{
   res.send("Welcome!");
});

app.get('/testUser', function(req, res)
{

});

app.POST('/login', function(req,res)
{

});

app.listen(port);
console.log('Using Port: ' + port);