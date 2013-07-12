App.CoursesIndexRoute = Ember.Route.extend
 model: () ->
    console.log 'courses index route'
    ###
    # We should insert a logic that will find courses depend on user preferences, if a user has been authorized.
    ###
    model = App.Course.find()
    console.log 'courses index route model: ', model.toArray().length
    model



App.CoursesShowRoute = Ember.Route.extend
  model: (params) ->
    console.log 'course show route: ', params
    model = App.Course.find(params.courses_id)
    console.log 'course show route model: ', model
    model

