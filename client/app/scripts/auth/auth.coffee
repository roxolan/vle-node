App.Auth = Ember.Auth.create
  signInEndPoint: '/api/0.1/sessions'
  signOutEndPoint: '/api/0.1/sessions/1'

  token_key: 'auth_token'
  tokenIdKey: 'user_id'

  modules: ['emberData', 'rememberable']

  rememberable:
    tokenKey: 'remember_token'
    period: 7
    autoRecall: true

App.Auth.on 'signInSuccess', ->
  console.log 'Sign in Successful: ', arguments
  App.Router.router.transitionTo('user')

App.Auth.on 'signInError', ->
  console.log 'Sign in Error: ', arguments
  #App.Router.router.transitionTo('index')
  error = App.AuthSignInErrorView.create({})
  console.log 'Err: ', error
  #console.log 'AUTHERR: ', authSignInErrorView.appendTo('#errors-block')
  #console.log 'AAA: ', authSignInErrorView.$('.alert')

App.Auth.on 'signOutSuccess', ->
  console.log 'Sign out Success: ', arguments
  App.Router.router.transitionTo('index')

