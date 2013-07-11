

App.Lecture = DS.Model.extend
  title:  DS.attr 'string'

  content:  DS.attr 'string'
  contentType:  DS.attr 'string'

  section: DS.belongsTo 'App.CourseSection'
  questions: DS.hasMany 'App.Question'
  progress: DS.belongsTo 'App.LearnProgress'


App.Lecture.FIXTURES = [
  {
    id: 1
    title: 'JavaScript introduction'
    contentType: 'video'
    content: 'http://www.youtube.com/videofile1.wma'
    section: 1
    questions: []
  }
  {
    id: 2
    title: 'JavaScript syntax'
    contentType: 'video'
    content: 'http://www.youtube.com/videofile2.wma'
    section: 1
    questions: []
  }
  {
    id: 3
    title: 'A main javascript objects in a browser'
    contentType: 'video'
    content: 'http://www.youtube.com/videofile3.wma'
    section: 2
    questions: []
  }
  {
    id: 4
    title: 'Javascript DOM manipulation'
    contentType: 'video'
    content: 'http://www.youtube.com/videofile4.wma'
    section: 2
    questions: []
  }
]