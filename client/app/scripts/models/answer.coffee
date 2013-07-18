
App.Answer = DS.Model.extend
  body: DS.attr 'string'
  authorName: DS.attr 'string'

  question: DS.belongsTo 'App.Question'
  comments: DS.hasMany 'App.Comment'


App.Answer.FIXTURES = [
  {
    id: 1
    body: 'answer 1'
    authorName: 'Bob'
    question: 1
  }
  {
    id: 2
    body: 'answer 2'
    authorName: 'Mary'
    question: 3
  }
  {
    id: 3
    body: 'answer 3'
    authorName: 'Bob'
    question: 3
  }
]