(function(window, Em, App, undefined){
  App.AnnouncementController = Em.ObjectController.extend({
    hidden: true,

    openAnnouncement: function() {
      console.log('open announcement');
      this.set('hidden', false);
    },

    closeAnnouncement: function() {
      console.log('close announcement');
      this.set('hidden', true);
    }
  });

})(window, window.Ember, window.App);
