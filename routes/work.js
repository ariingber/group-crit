var express = require('express');
var work = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');


work.get('/:workID', db.renderWork, function(req, res) {
  res.render('works/work_profile.ejs', { workToRender: res.workToRender
  });
})



module.exports = work;
