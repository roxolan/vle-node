module.exports = function(app, user) {
  app.use(user);
  user.use(function(req, action) {
    if (req.user.isAuthenticated) {
      return action === 'user has access to home page';
    }
  });
  user.use('edit own profile', function(req) {
    var userId = req.user ? req.user._id : null;
    if (userId) {
      console.log(userId, userId.toString(), userId.toString() === req.params.user);
    }
    if (req.user && userId && userId.toString() === req.params.user) {
      console.log('access granted');
      return true;
    } else {
      console.log('access denied');
    }
  });
  user.use('admin', function(req) {
    user = req.user;
    if (user && user.role === 'admin') {
      return true;
    }
  });

  user.setFailureHandler(function(req, res, action) {
    var accept;
    accept = req.headers.accept || '';
    res.status(403);
    if (~accept.indexOf('html')) {
      res.json({
        result: 'error',
        description: 'access denied',
        action: action
      });
    } else {
      res.send('Access denied (action: ', action, ')');
    }
  });
};
