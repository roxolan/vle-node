(function(window, Em, App, DS, undefined){

  App.Lecture = DS.Model.extend({

    title: DS.attr('string'),
    number: DS.attr('number'),
    description: DS.attr('string'),
    lectureContent: DS.attr('string'),
    contentType: DS.attr('string'),
    progress: DS.attr('number'),  //0 - 100 %

    section: DS.belongsTo('App.CourseSection'),
    questions: DS.hasMany('App.Question'),
    notes: DS.hasMany('App.Note')

  });

  App.Lecture.FIXTURES = [
    {
      id: 1,
      title: 'JavaScript introduction',
      number: 1,
      description: 'This lecture introuduce you with most interesting and highly developing programming language - javascript.',
      contentType: 'video',
      lectureContent: '<iframe src="http://www.youtube.com/embed/ya4UHuXNygM" frameborder="0" allowfullscreen></iframe>',
      section: 1,
      questions: [4],
      notes: [1, 2, 3],
      progress: 100
    }, {
      id: 2,
      title: 'JavaScript syntax',
      number: 2,
      description: 'This lecture is an introduction to javascript\'s syntax',
      contentType: 'video',
      lectureContent: 'http://www.youtube.com/videofile2.wma',
      section: 1,
      questions: [2],
      notes: [4],
      progress: 50
    }, {
      id: 3,
      title: 'A main javascript objects in a browser',
      number: 3,
      description: 'If you want to develop reach internet applications, you mast to learn browser\'s objects of javascript.',
      contentType: 'video',
      lectureContent: 'http://www.youtube.com/videofile3.wma',
      section: 2,
      questions: [3],
      progress: 0
    }, {
      id: 4,
      title: 'Javascript DOM manipulation',
      number: 4,
      contentType: 'video',
      lectureContent: 'http://www.youtube.com/videofile4.wma',
      section: 2,
      questions: [],
      progress: 0
    }
  ];

})(window, window.Ember, window.App, window.DS);
