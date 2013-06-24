_ = require 'lodash'
path = require 'path'

rootPath = path.normalize __dirname + "/../"

main =
  name: "Node research"
  version: "0.0.1"

  path:
    root: rootPath
    controllers: path.join rootPath, "app/controllers"
    models: path.join rootPath, "app/models"
    views: path.join rootPath, "app/views"
    helpers: path.join rootPath, "app/views/helpers"

config =
  development:
    db: "mongodb://localhost/testproject"
  test: {}
  production: {}

module.exports = (mode) ->
  _.assign main, config[mode or "development"]
