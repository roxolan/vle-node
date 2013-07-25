(function(window, Em, App, undefined){

  App.CoursesRoute = Em.Route.extend({
    model: function() {
      console.log('Courses route');
      // We should insert a logic that will find courses depend on user preferences, if a user has been authorized.
      var model = App.Course.find();
      console.log('Courses route model: ', model.toArray().length);
      return model;
    }
  });

  App.CourseIndexRoute = Em.Route.extend({
    model: function(params) {
      //console.log('Course index route: ', params, params.course_id);
      //var model = App.Course.find(params.course);
      //console.log('Course index route model: ', model);
      //return model;
      return this.modelFor('course');
    }
  });

})(window, window.Ember, window.App);

