#Announcment model

App.Announcment = DS.Model.extend
  name:   DS.attr 'string'
  body:   DS.attr 'string'
  title:  DS.attr 'string'

  curse:  DS.belongsTo 'App.Curse'
  owner:  DS.belongsTo 'App.User'

  viewed: DS.attr 'number'