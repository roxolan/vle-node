express = require 'express'
Resource = require 'express-resource-new'
handlebars = require 'express3-handlebars'
path = require 'path'

module.exports = (app, config, passport) ->

  helpers = require('./hbs_helpers')(config)
  console.log 'Helpers: ', helpers

  hbs = handlebars.create
    defaultLayout: 'main'
    layoutsDir: config.path.views + "/layouts"
    helpers: helpers

  app.configure ->
    app.set 'port', process.env.PORT or 3000
    app.engine 'handlebars', hbs.engine
    app.set 'view engine', 'handlebars'
    app.set 'views', config.path.views
    app.set 'config', config

    app.set 'controllers', config.path.controllers

    app.use express.favicon()
    app.use express.logger('dev')
    app.use express.bodyParser()
    app.use express.methodOverride()
    app.use express.cookieParser()
    app.use express.session({secret: 'sekret key'})

    app.use passport.initialize()
    app.use passport.session()

    app.use express.static(path.join(config.path.root, 'public'))

    app.use app.router
    app.use (req, res, next) ->
      res.send "Sorry, but page with url #{req.url} does't exists."


  app.configure 'development', ->
    app.use express.errorHandler
      showStack: true
      dumpExceptions: true

  #main route
  #resources
  app.resource 'api', ->
    app.resource 'users'
    app.resource 'sessions'

  app.all '*', require(config.path.controllers + '/main')

  console.log 'Route: ', app.routes
