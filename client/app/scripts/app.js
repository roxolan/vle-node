/*global Ember, DS */

var App = window.App = Ember.Application.create();

/* Order and include as you please. */
require('scripts/auth/*');
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/views/{*,*/*}');


App.Router.map(function () {
  // put your routes here
});

App.Router.reopen({
  location: 'history'
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create({
    url: '/api'
  })
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return ['one', 'two', 'three'];
  }
});
