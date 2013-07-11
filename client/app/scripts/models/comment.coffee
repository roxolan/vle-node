

App.Comment = DS.Model.extend
  body: DS.attr 'string'

  answer: DS.belongsTo 'App.Answer'