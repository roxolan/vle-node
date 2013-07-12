
App.CoursesIndexRoute = Ember.Route.extend
  model: () ->
    console.log 'courses index route'
    ###
    # We should insert a logic that will find courses depend on user preferences, if a user has been authorized.
    ###
    model = App.Course.find()
    console.log 'courses index route model: ', model
    model

App.CourseRoute = Ember.Route.extend
  model: () ->
    console.log 'course index route'
    App.course.find(params.course_id)