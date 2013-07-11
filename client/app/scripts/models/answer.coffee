
App.Answer = DS.Model.extend
  body: DS.attr 'string'

  question: DS.belongsTo 'App.Question'
  comments: DS.hasMany 'App.Comment'