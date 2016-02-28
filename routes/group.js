var express = require('express');
var group = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');

// group.get('/', db.renderWork, function(req, res) {
//   res.render('works/work_profile.ejs', { workToRender: res.workToRender
//   });
// })

group.get('/', db.getGroupMembers, function(req, res) {
  res.render('./group_profile.ejs', { groupMembers: res.groupMembers
  });
})


module.exports = group;
