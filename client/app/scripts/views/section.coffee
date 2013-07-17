App.SectionAnonsView = Ember.View.extend
  sectionIndex: ( ->
    @get('_parentView.contentIndex') + 1
  ).property()

  templateName: 'sectionAnons'
