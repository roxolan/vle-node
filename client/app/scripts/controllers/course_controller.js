(function(window, Em, App, undefined){
  App.CoursesShowController = Em.ObjectController.extend({
    setRate: function(rate) {
      this.set('myRating', rate);
    },
    mainTumb: function() {
      var thumb = this.get('thumbnail');
      console.log('Thumb', thumb);
      return 'background-image: url(/images/' + thumb + ');';
    }.property(),

    /*
    * It returns first unfinished lecture in a course
    * */
    nextLecture: function() {
      var sections = this.get('sections').toArray();
      var lectureTitle = null, section, nextLecture;

      for (var i = 0, slen = sections.length; i < slen; i += 1) {
        section = sections[i];
        nextLecture = section.get('nextLecture');

        console.log('Next lecture title: ', nextLecture);

        if (nextLecture) {
          lectureTitle = nextLecture;
          break;
        }

      }

      return lectureTitle;
    }.property('sections.@each.nextLecture'),

    /*
    * It calculates a percent of finished lectures in a course
    * */
    commonProgress: function() {
      var sections = this.get('sections').toArray(), section;
      var lecturesCount = 0, finishedLectures = 0;

      for (var i = 0, slen = sections.length; i < slen; i += 1) {
        section = sections[i];
        finishedLectures += section.get('finished');
        lecturesCount += section.get('lectures').toArray().length;
        console.log('Section progress: ', finishedLectures, ', lectures: ', lecturesCount);
      }

      //return lecturesCount > 0 ? finishedLectures * 100 / lecturesCount : 0;
      return [lecturesCount, finishedLectures];
    }.property('sections.@each.finished'),

    askQuestion: function(event) {
      console.log('Event: ', event);
      var $form = $('.ask-question-form');
      var $question = $('textarea', $form);
      console.log('Question: ', $question.val());
      var course = this.model;

      if ($question.val().length) {
        console.log('new question: ', $question.val());

        var question = App.Question.createRecord({
          body: $question.val(),
          course: course
        });
        var questions = this.get('questions');
        //question.pushObject(question);
      }
    }
  });

})(window, window.Ember, window.App);

