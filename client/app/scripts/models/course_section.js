(function(window, Em, App, DS, undefined){
  App.CourseSection = DS.Model.extend({
    title:    DS.attr('string'),
    number:   DS.attr('number'),

    course:   DS.belongsTo('App.Course'),
    lectures: DS.hasMany('App.Lecture'),

    /*
    * It returns count of the finished lectures
    */
    finished: function() {

      var lectures = this.get('lectures').toArray(), lecture, finished = 0;

      for (var i = 0, llen = lectures.length; i < llen; i += 1) {
        lecture = lectures[i];
        console.log('Lecture title DS: ', lecture.get('title'));
        if (lecture.get('progress') == 100) {
          finished += 1;
        }
      }

      return finished;
    }.property('lectures.@each.progress'),

    /*
    * It returns first unfinished lecture title in section
    */
    nextLecture: function() {

      var lectures = this.get('lectures').toArray(), lecture, next = null;

      for (var i = 0, llen = lectures.length; i < llen; i += 1) {
        lecture = lectures[i];
        var title = lecture.get('title'),
            progress = lecture.get('progress');
        console.log('Title: ', title, ', progress: ', progress);
        if (progress < 100) {
          next = title;
          break;
        }
      }
      console.log('Try to return next lecture: ', next);

      return next;
    }.property('lectures.@each.progress'),

    /*
    * It returns first unfinished lecture obj in section
    */
    nextLectureObj: function() {

      var lectures = this.get('lectures').toArray(), lecture, next = null;

      for (var i = 0, llen = lectures.length; i < llen; i += 1) {
        lecture = lectures[i];
        var progress = lecture.get('progress');
        if (progress < 100) {
          next = lecture;
          break;
        }
      }
      console.log('Return next lecture obj: ', next);
      return next;
    }.property('lectures.@each.progress')

  });


  App.CourseSection.FIXTURES = [
    {
      id: 1,
      title: 'JS first steps',
      number: 1,
      course: 1,
      lectures: [1, 2]
    },
    {
      id: 2,
      title: 'JavaScript in browsers',
      number: 2,
      course: 1,
      lectures: [3, 4]
    }
  ]

})(window, window.Ember, window.App, window.DS);
