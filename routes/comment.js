var express = require('express');
var comment = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');


comment.route('/:commentID/edit/')
  .get( db.getComment, (req,res) => {
    res.render('edit_comment.ejs', { commentID: req.params.commentID, getComment: res.getComment })
})

comment.route('/:commentID/delete/')
  .get( db.getComment, (req,res) => {
    res.render('delete_comment.ejs', { commentID: req.params.commentID, getComment: res.getComment })
})

comment.route('/:commentID')
  .put( db.updateComment, (req,res) => {
    res.redirect('/group/')
})
  .delete( db.deleteComment, (req,res) => {
    console.log('hello delete')
    console.log(req.body)
    res.redirect('/group/')
  })




module.exports = comment;
