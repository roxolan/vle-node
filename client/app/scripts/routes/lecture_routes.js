(function(window, Em, App, undefined){

  App.LectureIndexRoute = Em.Route.extend({
    model: function(params) {
      return this.modelFor('lecture');
    }
  });

})(window, window.Ember, window.App);
