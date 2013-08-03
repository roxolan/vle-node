/**
* User resource
*/
var mongoose = require('mongoose')
  , passport = require('passport')
  , user = require('connect-roles');

module.exports = {
  index: function(req, res) {
    console.log('Params: ', req.params);
    user = req.user || null;
    if (user) {
      res.json({
        user: {
          id: user._id,
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
    user = req.user || null;
    if (user) {
      res.json({
        user: {
          id: user._id,
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
    user.is('admin'), function(req, res) {
      return res.json(200, {
        result: 'ok',
        info: 'show user create form'
      });
    }
  ],
  create: [
    user.is('admin'), function(req, res) {
      var User;
      User = mongoose.model('User');
      user = new User(req.body);
      user.provider = 'local';
      return user.save(function(err) {
        if (err) {
          return res.json(500, {
            result: 'error',
            errors: err.errors,
            user: user
          });
        }
        return req.logIn(user, function(err) {
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
    user.can('edit own profile'), function(req, res) {
      console.log('req.role: ', req.role);
      return res.json(200, {
        result: 'ok',
        user: req.user._id
      });
    }
  ],
  update: [
    user.can('edit own profile'), function(req, res) {
      return res.send('Update user: ' + req.params.user);
    }
  ],
  destroy: [
    user.is('admin'), function(req, res) {
      return res.send('Destroy user: ' + req.params.user);
    }
  ]
};
