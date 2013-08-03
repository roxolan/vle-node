var mongoose      = require('mongoose')
  , LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, config) {
  var User;
  User = mongoose.model('User');
  passport.serializeUser(function(user, done) {
    console.log("Passport user: ", user);
    console.log("Passport done: ", done);
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findOne({
      _id: id
    }, function(err, user) {
      done(err, user);
    });
  });
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(email, password, done) {
    console.log('Try Local strategy');
    User.findOne({
      email: email
    }, function(err, user) {
      if (err) {
        done(err);
      }
      if (!user) {
        done(null, false, {
          message: 'Unknown user'
        });
      }
      if (!user.authenticate(password)) {
        done(null, false, {
          message: 'Invalid password'
        });
      }
      done(null, user);
    });
  }));
};
