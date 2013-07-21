(function(window, Em, App, undefined){

  App.CourseProgress = Em.View.extend({
    templateName: 'courseProgress',
    complited: function() {
      var controller = this.get('controller');
      var commonProgress = controller.get('commonProgress');
      return commonProgress[1];
    }.property('controller.commonProgress'),

    lecturesCount: function() {
      var controller = this.get('controller');
      var commonProgress = controller.get('commonProgress');
      return commonProgress[0];
    }.property('controller.commonProgress'),

    hasNextLecture: function() {
      if(this.get('lecturesCount') > this.get('complited')) {
        return true;
      } else {
        return false;
      }
    }.property('complited', 'lecturesCount'),

    progress: function() {
      var controller = this.get('controller');
      var commonProgress = controller.get('commonProgress');
      var lecturesCount = commonProgress[0], finished = commonProgress[1];
      var progress = lecturesCount > 0 ? finished * 100 / lecturesCount : 0;
      return "width: " + progress + "%;"
    }.property('controller.commonProgress')
  });

})(window, window.Ember, window.App);