var _     = require('lodash')
  , path  = require('path');

var rootPath = path.normalize(__dirname + "/../");

var main = {
  name:     "LMS research",
  version:  "0.0.1",
  path: {
    root:         rootPath,
    controllers:  path.join(rootPath, "app/controllers"),
    models:       path.join(rootPath, "app/models"),
    views:        path.join(rootPath, "app/views"),
    helpers:      path.join(rootPath, "app/views/helpers")
  }
};

var config = {
  development: {
    db:       "mongodb://localhost/lmsresearch",
    fixtures: path.join(rootPath, "db/fixtures")
  },
  test: {},
  production: {}
};

module.exports = function(mode) {
  return _.assign(main, config[mode || "development"]);
};
