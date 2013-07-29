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

  var subviews = ['description', 'questions', 'notes'];

  App.LectureIndexController = Em.ObjectController.extend({
    needs: 'course',

    internal_state: 0,

    toView: function() {
      return subviews[this.get('internal_state')];
    }.property('internal_state'),

    showQuestions: function() {
      console.log('show questions');
      this.set('internal_state', 1);
    },

    showNotes: function() {
      console.log('show notes');
      this.set('internal_state', 2);
    },

    showDescription: function() {
      console.log('show description');
      this.set('internal_state', 0);
    },

    isDescription: function() {
      return this.get('internal_state') === 0;
    }.property('internal_state'),

    isQuestions: function() {
      return this.get('internal_state') === 1;
    }.property('internal_state'),

    isNotes: function() {
      return this.get('internal_state') === 2;
    }.property('internal_state'),

    nextLecture: function() {
      var lNumber = this.get('number');
      var nNumber = lNumber + 1;
      //TODO: convert it to query when we gone from FIXTURES to requests to the server.
      var lecs = App.Lecture.find();
      console.log('lecs: ', lecs, ', lArray: ', lecs.toArray());
      var nLecture = lecs.findProperty('number', nNumber);
      console.log('Number: ', nNumber, ', lecture: ', nLecture);
      this.transitionToRoute('lecture.index', nLecture);
    },

    createNote: function () {
      var noteBody = this.get('newNote');
      console.log('createNote: ', noteBody);
      var note = App.Note.createRecord({
        body: noteBody,
        lecture: this.get('model')
      });
      this.set('newNote', '');
      note.save();
    },

    createQuestion: function () {
      var questionBody = this.get('newQuestion');
      console.log('createQuestion: ', questionBody);
      var question = App.Question.createRecord({
        body: questionBody,
        lecture: this.get('model')
      });
      this.set('newQuestion', '');
      question.save();
    }

  });


})(window, window.Ember, window.App);
