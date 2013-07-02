App.UserController = Ember.ObjectController.extend
  username: 'a'
  userId: ->
    uid = App.Auth.get 'userId'
    console.log "UserId: ", uid
    return uid