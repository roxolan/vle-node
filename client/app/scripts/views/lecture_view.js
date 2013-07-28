(function(window, Em, App, undefined){

  App.LectureAnonsView = Em.View.extend({

    lectureIndex: (function() {
      return this.get('_parentView.contentIndex') + 1;
    }).property(),

    buttonView: Ember.View.extend({
      classNames: ['btn', 'btn-small', 'pull-right', 'lecture-action'],
      tagName: 'buttton',
      templateName: 'lectureAnonsButton',
      classNameBindings: ['btnClass'],
      btnClass: (function() {
        var progress;
        progress = this.get('controller').get('progress');
        console.log('progress: ', progress);
        switch (progress) {
          case 0:
            return 'btn-success';
          case 100:
            return 'btn-info';
          default:
            return 'btn-warning';
        }
      }).property('controller.progress')
    }),

    templateName: 'lectureAnons'

  });

  App.LectureView = Em.View.extend({
    templateName: 'lecture'
  });

})(window, window.Ember, window.App);
