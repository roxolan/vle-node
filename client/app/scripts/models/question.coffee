
App.Question = DS.Model.extend
  body:       DS.attr 'string'
  authorName: DS.attr 'string'
  date:       DS.attr 'date'

  type:       DS.attr 'string'

  answers:    DS.hasMany 'App.Answer'
  course:     DS.belongsTo 'App.Course'
  lecture:    DS.belongsTo 'App.Lecture'

App.Question.FIXTURES = [
  {
    id: 1
    body: 'question 1'
    authorName: 'Bob'
    type: 'SECTION'
    answers: [1]
    course: 1
  }
  {
    id: 2
    body: 'question 2'
    authorName: 'Mary'
    type: 'LECTION'
    course: 1
    lecture: 2
  }
  {
    id: 3
    body: 'question 3'
    authorName: 'Lary'
    type: 'LECTION'
    course: 1
    lecture: 3
    answers: [2, 3]
  }
]