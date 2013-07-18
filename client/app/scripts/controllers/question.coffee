App.QuestionController = Ember.ObjectController.extend
  answersLength: ( ->
    answers = @get 'answers'
    console.log 'Ans: ', answers, ', tag: ', @get 'body'
    if answers
      answers.toArray().length
    else
      0
  ).property('answers')