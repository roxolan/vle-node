
App.CourseShowController = Ember.ObjectController.extend
  setRate: (rate) ->
    console.log 'Seted rating: ', rate
    @set 'myRating', rate