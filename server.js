var express   = require('express')
  , passport  = require('passport')
  , user      = require('connect-roles')
  , fs        = require('fs')
  , http      = require('http')
  , mongoose  = require('mongoose')
  , fixtures  = require('pow-mongoose-fixtures');

var configure   = require('./config/config')
  , expresser   = require('./config/express')
  , passporter  = require('./config/passport')
  , rolesmaster = require('./config/roles');


var config = configure(process.env.NODE_ENV);

mongoose.connect(config.db);

var modelsDir = fs.readdirSync(config.path.models);

modelsDir.forEach(function(file) {
  var url = "" + config.path.models + "/" + file;
  console.log('URL: ', url);
  require(url);
});

console.log('Fixtures: ', config.fixtures);

passporter(passport, config);

var app = express();

rolesmaster(app, user);

expresser(app, config, passport);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express listening on port " + (app.get('port')));
});
