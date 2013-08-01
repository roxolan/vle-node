(function(window, Em, App, DS, undefined){

  App.User = DS.Model.extend({
    name: DS.attr('string'),
    email: DS.attr('string'),
    username: DS.attr('string'),

    designation: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    headline: DS.attr('string'),
    biography: DS.attr('string'),

    website: DS.attr('string'),
    twitter: DS.attr('string'),
    facebook: DS.attr('string'),

    photo: DS.attr('string'),

    notifAnnouncements: DS.attr('boolean'),
    notifRecomendations: DS.attr('boolean'),

    courses: DS.hasMany('App.Course'),
    progresses: DS.hasMany('App.LearnProgress')
  });

  App.User.FIXTURES = [
    {
      id: 1,
      name: 'user1',
      email: 'user1@gmail.com',
      username: 'User1',
      courses: [1, 2]
    }, {
      id: 2,
      name: 'user2',
      email: 'user2@gmail.com',
      username: 'User2',
      courses: [1]
    }
  ];

})(window, window.Ember, window.App, window.DS);
