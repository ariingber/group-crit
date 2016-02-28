var express = require('express');
var users = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');


users.post('/', db.createUser, function(req, res){
  res.redirect('/');
})

// users.route('/')
users.get('/new', function(req, res) {
  res.render('users/new.ejs')
})

users.get('/login', function(req, res) {
  res.render('users/login.ejs');
})

users.post('/login', db.loginUser, function(req, res) {
  req.session.user = res.rows

  // when you redirect you must force a save due to asynchronisity
  // https://github.com/expressjs/session/issues/167 **
  // "modern web browsers ignore the body of the response and so start loading
  // the destination page well before we finished sending the response to the client."

  req.session.save(function() {
    res.redirect('/users/' + req.session.user.id)
  });
})

users.get('/login', function(req, res) {
  res.render('users/login.ejs');
})

// users.get('/:usersID', db.getGroupMembers, function(req, res)

users.get('/:usersID', db.getWorks, function(req, res) {
console.log(res.artistsWorks)
  var userID = req.session.user.id;
  res.render('users/user_profile.ejs', { user : req.session.user, artistsWorks: res.artistsWorks,
    userID:userID,
    userURL:'/users/'+userID,
    userData: req.session.user
  });
  // res.redirect('/users'+userID)
})


users.delete('/logout', function(req, res) {
  req.session.destroy(function(err){
    res.redirect('/');
  })
})

module.exports = users;
