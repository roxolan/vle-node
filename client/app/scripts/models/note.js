/*
* Author: Denis Zatsepin
* Email:  denis@zatsepin.spb.ru
* */

(function(window, Em, App, DS, undefined){

  App.Note = DS.Model.extend({
    body: DS.attr('string'),
    lecture: DS.belongsTo('App.Lecture')
  });

  App.Note.FIXTURES = [
    {
      id: 1,
      body: 'note1',
      lecture: 1
    }, {
      id: 2,
      body: 'note2',
      lecture: 1
    }, {
      id: 3,
      body: 'note3',
      lecture: 1
    }, {
      id: 4,
      body: 'note4',
      lecture: 2
    }
  ];

})(window, window.Ember, window.App, window.DS);
