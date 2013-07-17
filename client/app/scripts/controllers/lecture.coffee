App.LectureController = Ember.ObjectController.extend
  button: ( ->
    progress = @get 'progress'
    buttonName = ''
    switch progress
      when 0 then buttonName = 'Start lecture'
      when 100 then buttonName = 'Revisit lecture'
      else buttonName = 'Resume lecture'
    buttonName
  ).property('progress')
