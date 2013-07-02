App.UserRoute = Ember.Route.extend
  setupController: (controller, user) ->
      console.log 'setuController: ', controller, ', user: ', user

      controller.set 'username', 'testuser'

