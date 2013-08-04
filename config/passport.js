var mongoose      = require('mongoose')
  , LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, config) {
  var User;
  User = mongoose.model('User');
  passport.serializeUser(function(user, done) {
    console.log("Passport user: ", user);
    console.log("Passport done: ", done);
    if(user) {
      done(null, user.id);
    } else {
      done(null, null);
    }
  });
  passport.deserializeUser(function(id, done) {
    User.findOne({
      _id: id
    }, function(err, user) {
      done(err, user);
    });
  });
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      function(email, password, done) {
        console.log('Try Local strategy');
        console.log('Email: ', email);
        User.findOne({
          email: email
          }, function(err, user) {
            console.log('FindOne: ', err, user);
            if (err) {
              done(err);
              return null;
            }
            if (!user) {
              done(null, false, {
                message: 'Unknown user'
              });
              return null;
            }
            if (!user.authenticate(password)) {
              done(null, false, {
                message: 'Invalid password'
              });
              return null;
            }
            done(null, user);
          });
      }
    )
  );
};
