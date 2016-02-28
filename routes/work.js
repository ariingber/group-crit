var express = require('express');
var work = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');

// bodyData = [];

work.route('/:workID')
  .get( db.renderWork, db.renderComment, (req, res)=> {
  res.render('works/work_profile.ejs', { workToRender: res.workToRender, renderComment: res.renderComment })
})
  .post( db.addComment, (req,res) => {
    console.log(req.body)
    // bodyData.push(req.body)
    res.redirect('/work/' + req.params.workID)
  })



module.exports = work;
