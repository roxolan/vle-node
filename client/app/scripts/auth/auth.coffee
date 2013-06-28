App.Auth = Ember.Auth.create
  signInEndPoint: '/api/0.1/sessions'
  signOutEndPoint: '/api/0.1/sessions'

  token_key: 'auth_token'
  tokenIdKey: 'user_id'

  modules: ['emberData', 'rememberable']

  rememberable:
    tokenKey: 'remember_token'
    period: 7
    autoRecall: true
