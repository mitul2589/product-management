var http = require('http');
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var url = 'mongodb://localhost/local';
var db = mongoose.connect(url);

var compression = require('compression');
//var morgan = require('morgan');
app.use(compression());
//app.use(morgan('tiny'));

var flash = require('connect-flash');
app.use(flash());

// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');

app.use(expressSession({ 
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/dist'));

// define the view engine and set the path for views files

app.engine('html', require('ejs').renderFile);
//Register given template engine callbac function as extension

var Product = require(path.join(__dirname + '/server/models/products'));
var Counter = require(path.join(__dirname + '/server/models/counters'));
var User = require(path.join(__dirname + '/server/models/users'));

var passportRouter = require('./server/routers/passportRouter')(passport);
app.use('/', passportRouter);

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

app.use(express.static(__dirname), isAuthenticated);
app.use(express.static(__dirname + '/dist')); // To access static files under public folder


app.get('/', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/products', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/welcome', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/parent', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var productRouter = require('./server/routers/productRouter')(Product);
app.use('/api/products/', productRouter);

app.listen(3000);