
App.LectureAnonsView = Ember.View.extend
  lectureIndex: ( ->
    @get('_parentView.contentIndex') + 1
  ).property()

  buttonView: Ember.View.extend
    classNames: ['btn', 'btn-small', 'pull-right', 'lecture-action']
    tagName: 'buttton'

    templateName: 'lectureAnonsButton'

    classNameBindings: ['btnClass']
    btnClass:  ( ->
      progress = @get('controller').get('progress')
      console.log 'progress: ', progress
      switch progress
        when 0 then 'btn-success'
        when 100 then 'btn-info'
        else 'btn-warning'

    ).property('controller.progress')

  bi: "bibibi"

  templateName: 'lectureAnons'

