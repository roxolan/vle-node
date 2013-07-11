
App.CourseSection = DS.Model.extend
  title:    DS.attr 'string'


  course: DS.belongsTo 'App.Course'
  lectures:  DS.hasMany 'App.Lecture'

App.CourseSection.FIXTURES = [
  {
    id: 1
    title: 'JS first steps'
    course: 1
    lectures: [1, 2]
  }
  {
    id: 2
    title: 'JavaScript in browsers'
    course: 1
    lectures: [3, 4]
  }
]