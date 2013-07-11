

App.LearnProgress = DS.Model.extend
  lecture: DS.belongsTo 'App.Lecture'
  user: DS.belongsTo 'App.User'
  completion: DS.attr 'number'