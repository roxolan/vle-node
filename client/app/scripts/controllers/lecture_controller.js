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

    nextLoaded: 0,
    nextLecture: function() {
      var nNumber = this.get('number') + 1;
      var section = this.get('section');

      var sectionLoaded = function(section) {
        var lectures = section.get('lectures');
        console.log('Did lecture load: ', lectures.isLoaded);
        if (lectures.isLoaded) {
          return lectures.findProperty('number', nNumber) || null;
        } else {
          console.log("LEC.ARR: ", lectures.toArray(), lectures.toArray().length);
          if (lectures.toArray().length > 0) {
            var nlec = lectures.findProperty('number', nNumber);
            console.log('nextLecture: ', nlec);
            return nlec || null;
          } else {
            lectures.on('didLoad', $.proxy(function(next){
              console.log('Next: ', next);
              this.set('nextLoaded', next);
            }, this, this.get('nextLoaded') + 1));
          }

        }
      };
      console.log('NextLecture: ', nNumber);
      if (section.isLoaded) {
        console.log('section loaded');
        return sectionLoaded.call(this, section);
      } else {
        console.log('section not loaded: ', section);
        var lecs = section.get('lectures');
        console.log('lecs: ', lecs, lecs.toArray().length);
        if ( lecs && lecs.toArray().length > 0) {
          return sectionLoaded.call(this, section);
        } else {
          console.log('set handler');
          section.on('didLoad', $.proxy(function(next) {
            console.log("LOAD SECTION: ", next);
            this.set('nextLoaded', next);
          }, this, this.get('nextLoaded') + 1));
        }
      }

    }.property('number', 'nextLoaded'),
    prevLecture: null,

    init: function() {
      this._super();
      //setTimeout($.proxy(this.getPrevNextLectures, this), 1000);
    },

    resetPrevNext: function() {
      console.log('RESET!');
      //this.getPrevNextLectures();
    }.property('id', 'number'),

    getPrevNextLectures: function() {
      var lNumber = this.get('number')
        , nNumber = lNumber + 1
        , pNumber = lNumber - 1
        , section;

      var setLecture = function(lecs, nNumber, pNumber) {
        console.log('Set lecture: ', nNumber, pNumber, lecs);
        var nlec = lecs.findProperty('number', nNumber)
          , plec = lecs.findProperty('number', pNumber);

        this.set('nextLecture', nlec || null);
        this.set('prevLecture', plec || null);
      };

      var sectionLoaded = function (section) {
        console.log("SECTION LOADED");
        var lectures = section.get('lectures');
        console.log('lectures: ', lectures, lectures.isLoaded, lectures.toArray().length);
        if (lectures.isLoaded) {
          setLecture.call(this, lectures, nNumber, pNumber);
        } else {
          console.log('Set didLoad handler.');
          lectures.on('didLoad', $.proxy(setLecture, this, lectures, nNumber, pNumber));
          lectures.on('didCreate', function() {
            console.log('Create!')
          });
        }
      };

      console.log('Did this load?: ', this.isLoaded, this, this.get('model'), this.get('model').isLoaded);
      section = this.get('section');
      console.log('section: ', section, section.isLoaded);
      if (section.isLoaded) {
        sectionLoaded.call(this, section);
      } else {
        section.on('didLoad', $.proxy(sectionLoaded, this, section));
      }
    },

    toView: function() {
      return subviews[this.get('internal_state')];
    }.property('internal_state'),

    isCompleted: function() {
      return this.get('progress') === 100;
    }.property('progress'),

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

    nextLectureTransition: function() {
      var lNumber = this.get('number');
      var nNumber = lNumber + 1;
      var section = this.get('section');
      var lectures = section.get('lectures');
      console.log('Section state: ', section.stateManager.get('currentState.name'));
      console.log('Controllers: ', this.get('controllers.course'));
      var controller = this;
      var nextLecture = function() {
        console.log('lectures loaded');
        var nLecture = lectures.findProperty('number', nNumber);
        //TODO: convert it to query when we gone from FIXTURES to requests to the server.
        console.log('lecs: ', lectures, ', lArray: ', lectures.toArray());
        //var nLecture = lecs.findProperty('number', nNumber);
        console.log('Number: ', nNumber, ', lecture: ', nLecture);
        controller.transitionToRoute('lecture.index', nLecture);
      };

      if (lectures.isLoaded) {
        nextLecture();
      } else {
        lectures.on('didLoad', $.proxy(nextLecture, this));
      }

      //if(!nLecture) {
      //  console.log('Course', this.get('course'), this.course);
      //}

    },

    completeLecture: function() {
      var progress = this.get('progress');
      if(progress < 100) {
        this.set('progress', 100)
      } else {
        this.set('progress', 0)
      }
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
