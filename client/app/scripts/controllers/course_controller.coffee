

App.CourseController = Ember.ObjectController.extend
  complete: () ->
    lectures_set = @get 'lectures'
    lectures = lectures_set.toArray()

    lectures.forEach (lecture) ->
      completeon = lecture.get 'progress'
      persents = completeon.get 'completeon'
      console.log 'lecture completeon: ', persents
