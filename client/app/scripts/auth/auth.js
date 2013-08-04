(function(window, Em, App, undefined){

  App.Auth = Ember.Auth.create({
    signInEndPoint: '/api/0.1/sessions',
    signOutEndPoint: '/api/0.1/sessions/1',
    token_key: 'auth_token',
    tokenIdKey: 'user_id',
    modules: ['emberData', 'rememberable'],
    rememberable: {
      tokenKey: 'remember_token',
      period: 7,
      autoRecall: true
    }
  });

  App.Auth.on('signInSuccess', function() {
    console.log('Sign in Successful: ', arguments);
    App.Router.router.transitionTo('user');
  });

  App.Auth.on('signInError', function() {
    var error;
    console.log('Sign in Error: ', arguments);
    error = App.AuthSignInErrorView.create({});
    console.log('Err: ', error);
    App.Router.router.transitionTo('index');
  });

  App.Auth.on('signOutSuccess', function() {
    console.log('Sign out Success: ', arguments);
    App.Router.router.transitionTo('index');
  });

})(window, window.Ember, window.App);
