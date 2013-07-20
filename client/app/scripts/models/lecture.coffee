App.Lecture = DS.Model.extend
  title:  DS.attr 'string'
  number: DS.attr 'number'

  content:  DS.attr 'string'
  contentType:  DS.attr 'string'

  progress: DS.attr 'number'

  section: DS.belongsTo 'App.CourseSection'
  questions: DS.hasMany 'App.Question'

App.Lecture.FIXTURES = [
  {
    id: 1
    title: 'JavaScript introduction'
    number: 1
    contentType: 'video'
    content: 'http://www.youtube.com/videofile1.wma'
    section: 1
    questions: []
    progress: 100
  }
  {
    id: 2
    title: 'JavaScript syntax'
    number: 2
    contentType: 'video'
    content: 'http://www.youtube.com/videofile2.wma'
    section: 1
    questions: [2]
    progress: 50
  }
  {
    id: 3
    title: 'A main javascript objects in a browser'
    number: 3
    contentType: 'video'
    content: 'http://www.youtube.com/videofile3.wma'
    section: 2
    questions: [3]
    progress: 0
  }
  {
    id: 4
    title: 'Javascript DOM manipulation'
    number: 4
    contentType: 'video'
    content: 'http://www.youtube.com/videofile4.wma'
    section: 2
    questions: []
    progress: 0
  }
]