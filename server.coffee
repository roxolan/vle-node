express = require 'express'
fs = require 'fs'
http = require 'http'
mongoose = require 'mongoose'

configure = require './config/config'
expresser = require './config/express'

config = configure process.env.NODE_ENV

mongoose.connect config.db

app = express()
expresser app, config

http.createServer(app).listen app.get('port'), ->
  console.log "Express listening on port #{app.get('port')}"

