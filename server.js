pry = require('pryjs')

'use strict'
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var pg = require('pg');
var session = require('express-session');
var pgSession = require('connect-pg-simple')(session);
var path = require('path');
var methodOverride = require('method-override');
var db = require('./db/pg');
var userRoutes = require( path.join(__dirname, '/routes/users'));
var workRoutes = require( path.join(__dirname, '/routes/work'));
var groupRoutes = require( path.join(__dirname, '/routes/group'));
var imageRoutes = require( path.join(__dirname, '/routes/images'));
var commentRoutes = require( path.join(__dirname, '/routes/comment'));
require('dotenv').config();

var app = express();

if(process.NODE_ENV === 'production') {
  var config = process.env.DATABASE_URL;
} else {
  var config = process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  };
}

app.use(session({
  store: new pgSession({
    pg : pg,
    conString : config,
    tableName : 'session'
  }),
  secret : 'soooosecreetttt',
  resave : false,
  cookie : { maxAge : 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(morgan('short'));

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, './public')));
app.set('views', './views')
app.set('view engine', 'ejs')

//db.getGroupMembers goes after,
app.get('/', function(req, res) {
  res.render('home.ejs', { user : req.session.user});
})

app.use('/users', userRoutes)
app.use('/work', workRoutes)
app.use('/group', groupRoutes)
app.use('/comment', commentRoutes)



var port = process.env.PORT || 3000;
var server = app.listen(port)
