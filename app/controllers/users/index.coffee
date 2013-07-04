#Users controller
mongoose = require 'mongoose'
passport = require 'passport'

module.exports =
  
  index: (req, res) ->
    console.log 'Params: ', req.params
    #res.send 'Users index:' + req.params.format
    user = req.user or null
    if user
      res.json
        user:
          id: user._id
          name: user.name
          email: user.email
          username: user.username
    else
      res.json 400,
        result: 'error'

  show: (req, res) ->
    console.log 'Show user: ', req.params.user
    user = req.user or null
    if user
      res.json
        user:
          id: user._id
          name: user.name
          email: user.email
          username: user.username
    else
      res.json 400,
        result: 'error'


  new: (req, res) ->
    res.json 200,
      result: 'ok',
      info: 'show user create form'

  create: (req, res) ->
    User = mongoose.model 'User'
    user = new User req.body
    user.provider = 'local'
    user.save (err) ->
      if err
        return res.json 500,
          result: 'error'
          errors: err.errors,
          user: user
      req.logIn user, (err) ->
        if err
          return res.json 500,
            result: 'error'
            errors: err.errors
        return res.json 200,
          result: 'ok'

  edit: (req, res) ->
    res.send 'Edit user: ' + req.params.user

  update: (req, res) ->
    res.send 'Update user: ' + req.params.user

  destroy: (req, res) ->
    res.send 'Destroy user: ' + req.params.user
