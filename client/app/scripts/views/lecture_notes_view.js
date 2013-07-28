/**
 * Author: Denis Zatsepin
 * Email: denis@zatsepin.spb.ru
 * Date: 27.07.13
 * Time: 17:45
 */

(function(window, Em, App, undefined){

  App.LectureNotesView = Em.View.extend({
    templateName: 'lectureNotes'
  });

  App.SingleNoteView = Em.View.extend({
    tagName: 'li',
    templateName: 'singleNote',

    click: function (e) {
      var controller = this.get('controller');
      var target = e.target, body;
      if($(target).attr('data-action') === 'show-edit-block') {
        controller.set('edit', true);
        body = controller.get('body');
        var ta = this.$('textarea')[0];
        ta.value = body;
        console.log("focus: ", $(ta));
        setTimeout(function(){
          ta.focus();
        }, 0);
      }

    }
  });

  App.NoteEdit = Em.View.extend({
    tagName: 'textarea',

    focusOut: function (e) {
      var controller = this.get('controller');
      var newBody = e.target.value;
      controller.set('body', newBody);
      controller.set('edit', false);
    },

    focusIn: function (e) {
      var controller = this.get('controller');
      var body = controller.get('body');
      e.target.value = body;
    }

  });

})(window, window.Ember, window.App);
