pry = require('pryjs')

'use strict'
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var pg = require('pg');
var connectionString = "postgres://ariingber:Freedom77!@localhost/group_crit";
var session = require('express-session');
var pgSession = require('connect-pg-simple')(session);
var path = require('path');
var methodOverride = require('method-override');


var db = require('./db/pg');
var app = express();

var userRoutes = require( path.join(__dirname, '/routes/users'));
var workRoutes = require( path.join(__dirname, '/routes/work'));
var imageRoutes = require( path.join(__dirname, '/routes/images'));

app.use(session({
  store: new pgSession({
    pg : pg,
    conString : connectionString,
    tableName : 'session'
  }),
  secret : 'soooosecreetttt',
  resave : false,
  cookie : { maxAge : 30 * 24 * 60 * 60 * 1000 } // 30 days
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(morgan('short'));

app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, './public')));
app.set('views', './views')
app.set('view engine', 'ejs')

//db.getGroupMembers goes after,
app.get('/', db.getGroupMembers, function(req, res) {
  // console.log(req.session.user);
  res.render('home.ejs', { user : req.session.user, groupMembers: res.groupMembers});
  // console.log(res.groupMembers)
})

app.use('/users', userRoutes)
app.use('/images', imageRoutes)
app.use('/work', workRoutes)



var port = process.env.PORT || 3000;
var server = app.listen(port)
