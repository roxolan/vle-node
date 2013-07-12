
App.CourseRoute = Ember.Route.extend
  model: () ->
    #We should insert there the logic that will find courses depend on user preferences, if user has been authorized.
    App.Course.find()