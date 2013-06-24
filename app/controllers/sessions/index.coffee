#Sessions controller
passport = require 'passport'

module.exports =
  ###
  index: (req, res) ->
    console.log 'Params: ', req.params
    res.send 'Users index:' + req.params.format

  show: (req, res) ->
    res.send 'Show user: ' + req.params.user
  ###

  #get login form
  new: (req, res, next) ->

    console.log 'Authenticate: ', passport.authenticate('local')
    authenticate = passport.authenticate 'local', (err, user, info) ->
      console.log 'Err: ', err
      console.log 'User: ', user
      console.log 'Info: ', info
      if err
        return next(err)
      if not user
        console.log 'Not user!'
        return res.send 'no user'
        ###
          result: 'error'
          error:
            nr: 1
            description: 'authentication failure'
        .JSONstryngify
        ###
      req.logIn user, (err) ->
        if err
          return next(err)
        res.send
          result: 'ok'
          user: user

    console.log 'Next: ', next
    authenticate req, res, next

  #post login form
  create: (req, res, next) ->

    authenticate = passport.authenticate 'local', (err, user, info) ->
      console.log 'Err: ', err
      console.log 'User: ', user
      console.log 'Info: ', info
      if err
        return next(err)
      if not user
        console.log 'Not user!'
        return res.json 500,
          result: 'error'
          error:
            nr: 1
            description: 'authentication failure'
        
      req.logIn user, (err) ->
        if err
          return next(err)
        res.json
          result: 'ok'
          user: user

    authenticate req, res, next


  ###
  edit: (req, res) ->
    res.send 'Edit user: ' + req.params.user

  update: (req, res) ->
    res.send 'Update user: ' + req.params.user
  ###
  destroy: (req, res) ->
    req.logout()
    res.json 200,
      result: 'ok'
