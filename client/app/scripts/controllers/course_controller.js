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

    nextLecture: function() {
      var sections = this.get('sections').toArray(), lectures;
      var lecture = null, section, progress;
      for (var i = 0, len = sections.length; i < len; i += 1) {
        section = sections[i];
        lectures = section.get('lectures');
        console.log('Section title: ', section.get('title'));
        console.log('Lectures: ', lectures)
        lectures = lectures ? lectures.toArray() : null;
        console.log('Section: ', section, ', lectures: ', lectures, ', length: ', lectures.length);
        if (lectures) {
          for (var j = 0, jlen = lectures.length; j < jlen; j += 1) {
            lecture = lectures[j];
            progress = lecture.get('progress');
            console.log('Lecture: ', lecture, ', progress: ', progress);
            if (progress < 100) {
              return lecture.get('title');
            }
          }

        }

      }
    }.property('sections.length', 'sections.lectures.length')
  });

})(window, window.Ember, window.App);

