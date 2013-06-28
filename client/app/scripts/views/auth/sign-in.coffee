App.AuthSignInView = Ember.View.extend
  templateName: 'auth/sign-in'

  email:    'my_email'
  password: null
  remember: false

  click: (event, view) ->
    event.preventDefault()
    event.stopPropagation()
    
    action = event.target?.getAttribute 'data-action'

    console.log 'Email: ', @get('email')
    console.log 'Password: ', @get('password')
    console.log 'Action: ', action
    if action == 'login'
      console.log 'LOGIN: ', App.Auth.signIn
        data:
          email: @get 'email'
          password: @get 'password'

