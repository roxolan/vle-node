/**
* User resource
*/
var mongoose = require('mongoose')
  , passport = require('passport')
  , userRole = require('connect-roles');

module.exports = {
  index: function(req, res) {
    console.log('Params: ', req.params);
    var user = req.user || null;
    if (user) {
      res.json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          username: user.username
        }
      });
    } else {
      res.json(400, {
        result: 'error'
      });
    }
  },
  show: function(req, res) {
    console.log('Show user: ', req.params.user);
    var user = req.user || null;
    if (user) {
      res.json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          username: user.username
        }
      });
    } else {
      res.json(400, {
        result: 'error'
      });
    }
  },
  "new": [
    userRole.is('admin'),
    function(req, res) {
      res.json(200, {
        result: 'ok',
        info: 'show user create form'
      });
    }
  ],
  create: [
    userRole.is('admin'),
    function(req, res) {
      var User = mongoose.model('User');
      var user = new User(req.body);
      user.provider = 'local';
      user.save(function(err) {
        if (err) {
          res.json(500, {
            result: 'error',
            errors: err.errors,
            user: user
          });
        }
        req.logIn(user, function(err) {
          if (err) {
            return res.json(500, {
              result: 'error',
              errors: err.errors
            });
          }
          return res.json(200, {
            result: 'ok'
          });
        });
      });
    }
  ],
  edit: [
    userRole.can('edit own profile'),
    function(req, res) {
      console.log('req.role: ', req.role);
      res.json(200, {
        result: 'ok',
        user: req.user._id
      });
    }
  ],
  update: [
    userRole.can('edit own profile'),
    function(req, res) {
      res.send('Update user: ' + req.params.user);
    }
  ],
  destroy: [
    userRole.is('admin'),
    function(req, res) {
      res.send('Destroy user: ' + req.params.user);
    }
  ]
};
