(function(window, Em, App, undefined){

  App.Announcement = DS.Model.extend({
    name:   DS.attr('string'),
    body:   DS.attr('string'),
    title:  DS.attr('string'),

    curse:  DS.belongsTo('App.Curse'),
    owner:  DS.belongsTo('App.User'),

    viewed: DS.attr('boolean')
  });

})(window, window.Ember, window.App);

