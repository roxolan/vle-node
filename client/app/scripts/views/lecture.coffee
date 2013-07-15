
App.LectureView = Ember.View.extend
  ai: ( ->
    console.log 'Lecture index: ', @get('parentView')
    views = @get 'parentView._childViews'
    console.log 'Lecture index: ', views.indexOf(@)
    @get('parentView.contentIndex') + 1
  ).property()

  bi: "bibibi"

  templateName: 'lecture'

