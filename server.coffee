express     = require 'express'
passport    = require 'passport'
user        = require 'connect-roles'
fs          = require 'fs'
http        = require 'http'
mongoose    = require 'mongoose'
fixtures    = require 'pow-mongoose-fixtures'

configure   = require './config/config'
expresser   = require './config/express'
passporter  = require './config/passport'
rolesmaster = require './config/roles'

config = configure process.env.NODE_ENV

mongoose.connect config.db

modelsDir = fs.readdirSync config.path.models
modelsDir.forEach (file) ->
  url = "#{config.path.models}/#{file}"
  console.log 'URL: ', url
  require url

console.log 'Fixtures: ', config.fixtures
console.log 'connection: ', mongoose.connection
#fixtures.load config.fixtures, mongoose.connection

passporter passport, config


app = express()

rolesmaster app, user
expresser app, config, passport

http.createServer(app).listen app.get('port'), ->
  console.log "Express listening on port #{app.get('port')}"

