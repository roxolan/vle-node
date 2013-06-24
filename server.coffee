express     = require 'express'
passport    = require 'passport'
fs          = require 'fs'
http        = require 'http'
mongoose    = require 'mongoose'

configure   = require './config/config'
expresser   = require './config/express'
passporter  = require './config/passport'

config = configure process.env.NODE_ENV

mongoose.connect config.db

modelsDir = fs.readdirSync config.path.models
modelsDir.forEach (file) ->
  url = "#{config.path.models}/#{file}"
  console.log 'URL: ', url
  require url

passporter passport, config

app = express()
expresser app, config, passport

http.createServer(app).listen app.get('port'), ->
  console.log "Express listening on port #{app.get('port')}"

