App.AuthView = Ember.View.extend
  templateName: 'auth'


  click: (event, view) ->
    action = event.target?.getAttribute 'data-action'
    console.log "singout"
    
    if action == 'signout'
      App.Auth.signOut()
    
    if action == 'login'
      console.log "App.Auth: ", @, view
      signInView = @get('loginModal')

      signInView.set('hidden', false)

              
