 (function(window, Em, App, undefined){
   App.CoursesShowController = Em.ObjectController.extend({
      setRate: function(rate) {
        this.set('myRating', rate);
      },
      mainTumb: function() {
        var thumb = this.get('thumbnail');
        console.log('Thumb', thumb);
        return 'background-image: url(/images/' + thumb + ');';
      }.property()
   });

 })(window, window.Ember, window.App);

