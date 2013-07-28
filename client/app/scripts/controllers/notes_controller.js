/**
 * Author: Denis Zatsepin
 * Email: denis@zatsepin.spb.ru
 * Date: 27.07.13
 * Time: 18:03
 */

(function(window, Em, App, undefined){

  App.LectureNoteController = Em.ObjectController.extend({
    edit: false,
    showEdit: function() {
      this.set('edit', true);
      console.log("Show edit: ", this, this.get('view'));
    },
    saveNote: function(e) {
      this.set('edit', false);
      var body = this.get('body');
      console.log("E: ", e, body, e.get('body'));
    },
    cancelSave: function() {
      this.set('edit', false);
    },


  });

})(window, window.Ember, window.App);