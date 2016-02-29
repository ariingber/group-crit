var express = require('express');
var comment = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');


comment.route('/:commentID/edit/')
  .get( db.getComment, (req,res) => {
    console.log(req.params)
    res.render('edit_comment.ejs', { commentID: req.params.commentID, getComment: res.getComment })
})

comment.route('/:commentID/')
  .put( db.updateComment, (req,res) => {
    res.redirect('/group/')
})




module.exports = comment;
