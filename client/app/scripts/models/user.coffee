App.User = DS.Model.extend
  name:     DS.attr 'string'
  email:    DS.attr 'string'
  username: DS.attr 'string'

  courses:  DS.hasMany 'App.Course'
  progresses: DS.hasMany 'App.LearnProgress'

App.User.FIXTURES = [
  {id: 1, name: 'user1', email: 'user1@gmail.com', username: 'User1', courses: [1, 2]},
  {id: 2, name: 'user2', email: 'user2@gmail.com', username: 'User2', courses: [1]}
]
