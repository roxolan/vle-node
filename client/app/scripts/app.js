/*global Ember, DS */

var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/* Order and include as you please. */
require('scripts/auth/*');
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/views/{*,*/*}');


App.Router.map(function () {
  // put your routes here
  //this.route("user", { path: "/profile" });
  this.resource('courses');
  this.resource('course', { path: '/courses/:course_id'}, function(){

    this.resource('lecture', { path: 'lecture/:lecture_id' },  function () {
      this.route('show');
    });
  });
  /*
  this.resource('course', { path: ':course_id' }, function () {
    this.resource('sections');
    this.resource('section', { path: '/section/:section_id' }, function () {
      this.resource('lectures');
      this.resource('lecture', { path: '/lecture/:lecture_id' },  function () {
        this.route('show');
      });
    });
  });
  */
});

App.Router.reopen({
  location: 'history'
});

/*
App.Store = DS.Store.extend({
  revision: 11,

  adapter: DS.RESTAdapter.create({
    url: '/api/0.1'
  })
});
*/
App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.FixtureAdapter.create()
});
App.IndexRoute = Ember.Route.extend({
  model: function () {
    return ['one', 'two', 'three'];
  }
});
