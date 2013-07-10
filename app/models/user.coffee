

mongoose = require 'mongoose'
Schema = mongoose.Schema
crypto = require 'crypto'
_ = require 'lodash'


UserSchema = new Schema
  name:
    type: String
    default: ''
  email:
    type: String
    default: ''
  username:
    type: String
    default: ''
  hashed_password:
    type: String
    default: ''
  salt:
    type: String
    default: ''
  role:
    type: String
    default: ''


UserSchema
.virtual('password')
.set (password) ->
  @_password = password
  @salt = @makeSalt()
  @hashed_password = @encryptPassword password
.get ->
  @_password

UserSchema.path('name').validate (name) ->
  return name.length
, 'Name cannot be blank'

UserSchema.path('email').validate (email, fn) ->
  User = mongoose.model 'User'
  if @isNew or @isModified('email')
    User.find({email: email}).exec (err, users) ->
      fn err or users.length == 0
  else
    fn true
, 'Email already exists'

UserSchema.path('username').validate (username) ->
  return username.length
, 'Username cannot be blank'

UserSchema.path('hashed_password').validate (hashed_password) ->
  return hashed_password.length
, 'Password cannot be blank'



UserSchema.methods =
  authenticate: (plainText) ->
    @encryptPassword(plainText) == @hashed_password

  makeSalt: ->
    Math.round(new Date().valueOf() * Math.random()) + ''

  encryptPassword: (password) ->
    return '' if not password

    try
      crypto.createHmac('sha1', @salt).update(password).digest('hex')
    catch err
      return ''

mongoose.model 'User', UserSchema