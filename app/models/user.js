/**
* User model
*/
var mongoose  = require('mongoose')
  , Schema    = mongoose.Schema
  , crypto    = require('crypto')
  , _         = require('lodash');

var UserSchema = new Schema({
  _id: Number,
  name: {
    type: String,
    "default": ''
  },
  email: {
    type: String,
    "default": ''
  },
  username: {
    type: String,
    "default": ''
  },
  hashed_password: {
    type: String,
    "default": ''
  },
  salt: {
    type: String,
    "default": ''
  },
  role: {
    type: String,
    "default": ''
  },
  courses_learning_ids: [ { type: Number, ref: 'Course' } ],
  courses_author_ids: [ {type: Number, ref: 'Course'} ]
});

UserSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
     return this._password;
  });

UserSchema.path('name').validate(function(name) {
  return name.length;
}, 'Name cannot be blank');

UserSchema.path('email').validate(function(email, fn) {
  var User;
  User = mongoose.model('User');
  if (this.isNew || this.isModified('email')) {
    return User.find({
      email: email
    }).exec(function(err, users) {
      fn(err || users.length === 0);
    });
  } else {
    fn(true);
  }
}, 'Email already exists');

UserSchema.path('username').validate(function(username) {
  return username.length;
}, 'Username cannot be blank');

UserSchema.path('hashed_password').validate(function(hashed_password) {
  return hashed_password.length;
}, 'Password cannot be blank');

UserSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  },
  encryptPassword: function(password) {
    var err;
    if (!password) {
      return '';
    }
    try {
      return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    } catch (_error) {
      err = _error;
      return '';
    }
  }
};

mongoose.model('User', UserSchema);
