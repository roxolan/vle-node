mongoose = require 'mongoose'
LocalStrategy = require('passport-local').Strategy

module.exports = (passport, config) ->

  User = mongoose.model 'User'

  passport.serializeUser (user, done) ->
    console.log "Passport user: ", user
    console.log "Passport done: ", done
    done null, user.id
  
  passport.deserializeUser (id, done) ->

    User.findOne {_id: id}, (err, user) ->
      done err, user

  passport.use new LocalStrategy
    usernameField: 'email',
    passwordField: 'password'
  , (email, password, done) ->
    console.log 'Try Local strategy'
    User.findOne {email: email}, (err, user) ->
      if err
        return done err

      if not user
        return done null, false, {message: 'Unknown user'}

      if not user.authenticate(password)
        return done null, false, {message: 'Invalid password'}

      done null, user

  undefined
