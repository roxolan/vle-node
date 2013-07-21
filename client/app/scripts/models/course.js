(function(window, Em, App, DS, undefined){

  App.Course = DS.Model.extend({
    title:          DS.attr('string'),
    description:    DS.attr('string'),
    thumbnail:      DS.attr('string'),
    rating:         DS.attr('number'),
    myRating:       DS.attr('number'),
    students:       DS.attr('number'),

    owner:          DS.belongsTo('App.User'),
    sections:       DS.hasMany('App.CourseSection'),
    questions:      DS.hasMany('App.Question'),
    announcements:  DS.hasMany('App.Announcement')
  });


  App.Course.FIXTURES = [
    {
      id: 1,
      title: 'JavaScript for all',
      description: 'The best course about javascript and it`s frameworks of all',
      thumbnail: 'course_1.jpg',
      rating: 2.45,
      myRating: 3,
      students: 434,
      owner: 2,
      sections: [1, 2],
      questions: [1, 2, 3],
      announcements: [1, 2, 3, 4]
    },
    {
      id: 2,
      title: 'HTML5 and CSS3',
      description: 'You mast know it',
      rating: 4.95,
      students: 1921,
      owner: 2,
      sections: [3, 4]
    },
    {
      id: 3,
      title: 'Hello',
      description: '',
      rating: 1.57,
      students: 12,
      qustions: []
    }
  ]

})(window, window.Ember, window.App, window.DS);
