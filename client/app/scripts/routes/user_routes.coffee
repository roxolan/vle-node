App.UserRoute = Ember.Route.extend
  setupController: (controller, user) ->
      console.log 'setup Controller: ', controller, ', user: ', user

      controller.set 'username', 'testuser'
      controller.set 'model', App.User.find(App.Auth.get('userId'))

