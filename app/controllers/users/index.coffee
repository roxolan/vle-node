#Users controller
mongoose  = require 'mongoose'
passport  = require 'passport'
user      = require 'connect-roles'

module.exports =
  
  index: (req, res) ->
    #user = req.user

    #if user.is 'admin'
    # admin can see all user's information
    #else
    # other users can see only part of user's info

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


  new: [
    user.is 'admin'

    (req, res) ->
      res.json 200,
        result: 'ok',
        info: 'show user create form'
  ]

  create: [
    user.is 'admin'

    (req, res) ->
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
  ]

  edit: [
    user.can 'edit own profile'

    (req, res) ->
      console.log 'req.role: ', req.role

      res.json 200,
        result: 'ok'
        user: req.user._id

  ]


  update: [
    user.can 'edit own profile'

    (req, res) ->
      res.send 'Update user: ' + req.params.user
  ]

  destroy: [
    user.is 'admin' #not implemented yet

    (req, res) ->
      res.send 'Destroy user: ' + req.params.user
  ]
