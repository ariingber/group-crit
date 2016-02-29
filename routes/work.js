var express = require('express');
var work = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');

work.route('/:workID')
  .get( db.renderWork, db.renderComment, (req, res)=> {
  res.render('works/work_profile.ejs', { user : req.session.user, workId: req.params.workID, workToRender: res.workToRender, renderComment: res.renderComment })
})
  .post( db.addComment, (req,res) => {
    res.redirect('/work/' + req.params.workID)
  })
  .put( (req,res) => {
    console.log(req.body)
    res.redirect('/work/' + req.params.workID)
})

work.route('/:workID/edit')
  .get( db.editComment, (req,res) => {
    res.render('edit_comment.ejs', { workID: req.params.workID })
})





module.exports = work;
