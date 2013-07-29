(function(window, Em, App){

  App.QuestionController = Em.ObjectController.extend({
     answersLength: function() {
        var answers = this.get('answers');
        if(answers) {
          return answers.toArray().length;
        } else {
          return 0;
        }
     }.property('answers.length')
  });

})(window, window.Ember, window.App);
