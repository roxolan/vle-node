fs = require 'fs'

module.exports = (config) ->
  helpers = {}
  console.log "Helpers path: ", config.path.helpers
  fs.readSync(config.path.helpers)?.forEach (hfile) ->
    utils.log "HFile: ", hfile
    hs = require config.path.helpers + "/" + hfile
    for name, helper of hs
      if typeof helpers[name] == 'undefined'
        helpers[name] = helper
      else
        console.log "Helpers conflict: file=#{hfile}, helper=#{helper}"
    undefined
  console.log 'Helpers: ', helpers
  helpers