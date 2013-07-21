(function(window, Em, App, undefined){

  App.Announcement = DS.Model.extend({
    body:   DS.attr('string'),
    title:  DS.attr('string'),
    date:   DS.attr('date'),

    course:  DS.belongsTo('App.Curse'),
    owner:  DS.belongsTo('App.User'),

    viewed: DS.attr('boolean')
  });

  App.Announcement.FIXTURES = [
    {
      id: 1,
      title: 'Dear students, all my courses are off 50% for next 2 days.',
      body:'1Congratulations! All my courses are off 50% for next 2 days.',
      date: new Date(),
      course: [1]
    },
    {
      id: 2,
      title: 'Dear students, all my courses are off 50% for next 2 days.',
      body:'2Congratulations! All my courses are off 50% for next 2 days.',
      date: new Date(),
      course: [1]
    },
    {
      id: 3,
      title: 'Dear students, all my courses are off 50% for next 2 days.',
      body:'3Congratulations! All my courses are off 50% for next 2 days.',
      date: new Date(),
      course: [1]
    },
    {
      id: 4,
      title: 'Dear students, all my courses are off 50% for next 2 days.',
      body:'4Congratulations! All my courses are off 50% for next 2 days.',
      date: new Date(),
      course: [1]
    }
  ];

})(window, window.Ember, window.App);

