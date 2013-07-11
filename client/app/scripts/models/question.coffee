
App.Question = DS.Model.extend
  title:    DS.attr 'string'

  section:  DS.belongsTo 'App.Lecture'
  answer: DS.hasMany 'App.Answer'