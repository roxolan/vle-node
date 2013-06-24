fs = require 'fs'

module.exports = (config) ->
  helpers = {}
  fs.readdirSync(config.path.helpers).forEach (hfile) ->
    console.log "HFile: ", hfile

    hs = require(config.path.helpers + "/" + hfile)
    for name, helper of hs
      if typeof helpers[name] == 'undefined'
        helpers[name] = helper
      else
        console.log "Helpers conflict: file=#{hfile}, helper=#{helper}"

    undefined
  console.log 'Helpers: ', helpers
  helpers