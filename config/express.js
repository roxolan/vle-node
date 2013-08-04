var express     = require('express')
  , Resource    = require('express-resource-new')
  , handlebars  = require('express3-handlebars')
  , path        = require('path');

module.exports = function(app, config, passport) {
  var hbs, helpers;
  helpers = require('./hbs_helpers')(config);
  hbs = handlebars.create({
    defaultLayout: 'main',
    layoutsDir: config.path.views + "/layouts",
    helpers: helpers
  });
  app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');
    app.set('views', config.path.views);
    app.set('config', config);
    app.set('controllers', config.path.controllers);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({
      secret: 'sekret key'
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express["static"](path.join(config.path.root, 'public')));
    app.use(app.router);
    app.use(function(req, res, next) {
      res.send("Sorry, but page with url " + req.url + " does't exists.");
    });
  });
  app.configure('development', function() {
    app.use(express.errorHandler({
      showStack: true,
      dumpExceptions: true
    }));
  });
  app.resource('api', function() {
    app.resource('users');
    app.resource('sessions');
    app.resource('courses');
    app.resource('course_sections');
    app.resource('lectures');
  });
  app.all('*', require(config.path.controllers + '/main'));
};
