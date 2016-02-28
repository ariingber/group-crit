var pg = require('pg');
var connectionString = "postgres://ariingber:Freedom77!@localhost/group_crit";
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var session = require('express-session');


function loginUser(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    pg.connect(connectionString, function(err, client, done) {
      if (err) {
        done()
        console.log(err)
        return res.status(500).json({success: false, data: err})
      }

      var query = client.query("SELECT * FROM users WHERE email LIKE ($1);", [email], function(err, results) {
        done()
        if (err) {
          return console.error('error running query', err)
        }

        if (results.rows.length === 0) {
          res.status(204).json({success: true, data: 'no content'})
        } else if (bcrypt.compareSync(password, results.rows[0].password_digest)) {
          res.rows = results.rows[0]
          next()
        }
      })
    })
}

function createSecure(email, password, callback) {
  // hashing the password given by the user at signup
  bcrypt.genSalt(function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      // this callback saves the user to our databased
      // with the hashed password

      // saveUser(email, hashed)
      callback(email, hash)
    })
  })
}


function createUser(req, res, next) {
  createSecure(req.body.email, req.body.password, saveUser);

  function saveUser(email, hash) {
    pg.connect(connectionString, function(err, client, done) {
      if (err) {
        done()
        console.log(err)
        return res.status(500).json({success: false, data: err})
      }

      var query = client.query("INSERT INTO users (email, password_digest, name, groupName) VALUES ($1, $2, $3, $4);", [email, hash, req.body.name, req.body.groupName], function(err, result) {
        done()
        if (err) {
          return console.error('error running query', err)
        }
        next()
      })
    })
  }
}


function getGroupMembers(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }
    var query = client.query("SELECT users.name, users.groupname, works.id as worksid, works.name as worksname, works.imgurl FROM works left join users ON works.userid = users.id WHERE users.groupname = '"+req.session.user.groupname+"';", function(err, results) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      res.groupMembers = results.rows
      next()
    });
  });
}

function getWorks(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    var query = client.query("SELECT * FROM works where userId = "+ req.session.user.id + ";", function(err, results) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      res.artistsWorks = results.rows
      next()
    });
  });
}

function renderWork(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }
    var query = client.query("SELECT imgurl FROM works where id = "+ req.params.workID + ";", function(err, results) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      res.workToRender = results.rows
      next()
    });
  });
}

function addComment(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }
    var query = client.query("INSERT INTO comments (workId, userId, commentContent) VALUES ($1, $2, $3);", [ req.params.workID, req.session.user.id, req.body.comment], function(err, results) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      res.addComment = results.rows
      next()
    });
  });
}

function renderComment(req, res, next) {
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }
    
    var query = client.query("SELECT * FROM comments where workId = "+ req.params.workID + ";", function(err, results) {
      done()
      if(err) {
        return console.error('error, running query', err);
      }
      res.renderComment = results.rows
      next()
    });
  });
}

module.exports.renderComment = renderComment;
module.exports.addComment = addComment;
module.exports.renderWork = renderWork;
module.exports.getWorks = getWorks;
module.exports.getGroupMembers = getGroupMembers;
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
