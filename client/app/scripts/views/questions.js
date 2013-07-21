(function(window, Em, App, undefined){

  App.QuestionsCourseView = Ember.View.extend({
    templateName: 'questionsCourseView',
    tagName: 'section',
    classNames: ['panel questions'],
    showAskForm: false,

    click: function(event) {
      var action = event.target ? event.target.getAttribute('data-action') : null;
      if (action) {
        event.stopPropagation();
        switch (action) {
          case 'show-ask-form':
            this.set('showAskForm', true);
            break;
          case 'hide-ask-form':
            this.set('showAskForm', false);
            break;
        }
      }
    }
  });

})(window, window.Ember, window.App);

