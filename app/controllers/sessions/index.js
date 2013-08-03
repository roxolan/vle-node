var passport = require('passport');

module.exports = {
  /*
  index: (req, res) ->
    console.log 'Params: ', req.params
    res.send 'Users index:' + req.params.format
  
  show: (req, res) ->
    res.send 'Show user: ' + req.params.user
  */

  "new": function(req, res, next) {
    res.json(200, {
      result: 'ok',
      description: 'request username(email) and password from user',
      info: {
        api: {
          version: req.params.api
        }
      }
    });
  },
  create: function(req, res, next) {
    var authenticate;
    authenticate = passport.authenticate('local', function(err, user, info) {
      console.log('Err: ', err);
      console.log('User: ', user);
      console.log('Info: ', info);
      if (err) {
        next(err);
      }
      if (!user) {
        console.log('Not user!');
        res.json(400, {
          result: 'error',
          error: {
            nr: 1,
            description: 'authentication failure'
          }
        });
      }
      req.logIn(user, function(err) {
        if (err) {
          next(err);
        }
        res.json({
          result: 'ok',
          user_id: user._id
        });
      });
    });
    authenticate(req, res, next);
  },
  /*
  edit: (req, res) ->
    res.send 'Edit user: ' + req.params.user
  
  update: (req, res) ->
    res.send 'Update user: ' + req.params.user
  */

  destroy: function(req, res) {
    req.logout();
    res.json(200, {
      result: 'ok'
    });
  }
};
