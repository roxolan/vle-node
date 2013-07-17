
App.RaterView = Ember.View.extend
  templateName: 'star_rater'
  tagName: 'span'

  stars: 5
  rating: 0
  attributeBindings: ['stars', 'rating']

  startRate: false

  showStars: ( ->
    allStars = []
    times = [0..@stars - 1]
    rating = @rating or 0
    console.log 'showStars Rating: ', rating
    for i in times
      if rating > i
        allStars[i] = true
      else
        allStars[i] = false
    return allStars
  ).property('rating')

  mouseEnter: (event) ->
    console.log 'Event: ', event
    @startRate = true

  mouseLeave: (event) ->
    console.log 'Event: ', event
    @startRate = false
    rating = @get('rating')
    console.log 'Rating: ', rating
    @rerender()

  mouseMove: (event) ->
    elements = $('.star', event.currentTarget)
    target = event.target
    rating = @rating
    active = true
    for star in elements
      if active
        $(star).addClass 'active'
      else
        $(star).removeClass 'active'
      if star == target
        active = false
    #console.log "start rate: ", @startRate, target, elements

  click: (event) ->
    elements = $('.star', event.currentTarget)
    target = event.target
    count = 0

    for star in elements
      count += 1
      if star == target
        break

    @get('controller').send('setRate', count)