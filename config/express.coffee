express = require 'express'
handlebars = require 'express3-handlebars'


module.exports = (app, config) ->

  hbs = handlebars.create
    defaultLayout: 'main'
    layoutsDir: config.path.views + "/layouts"
    helpers: require('./hbs_helpers')(config)

  app.configure ->
    app.set 'port', process.env.PORT or 3000
    app.engine 'handlebars', hbs.engine
    app.set 'view engine', 'handlebars'
    app.set 'views', config.path.views
    app.set 'config', config

    app.use express.favicon()
    app.use express.logger('dev')
    app.use express.bodyParser()
    app.use express.methodOverride()
    app.use express.cookieParser('sekret key')
    app.use express.session()

    app.use express.static(path.join config.path.root, 'public')

    app.use (req, res, next) ->
      res.send "Sorry, but page with url #{req.url} does't exists."

  app.configure 'development', ->
    app.use express.errorHandler
      showStack: true
      dumpExceptions: true