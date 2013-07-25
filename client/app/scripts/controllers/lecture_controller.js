(function(window, Em, App, undefined){

  App.LectureController = Em.ObjectController.extend({
    button: function() {
      var progress = this.get('progress')
        , buttonName = '';
      switch(progress) {
        case 0:
          buttonName = 'Start lecture';
          break;
        case 100:
          buttonName = 'Revisit lecture';
          break;
        default:
          buttonName = 'Resume lecture'
      }
      return buttonName;
     }.property('progress')
  });

  App.LectureIndexController = Em.ObjectController.extend({
     needs: 'course'
  });


})(window, window.Ember, window.App);
