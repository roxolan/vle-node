App.AuthSignInView = Ember.View.extend
  templateName: 'auth/sign-in'

  hidden: true
  email:    null
  password: null
  remember: false

  click: (event, view) ->
    event.preventDefault()
    event.stopPropagation()
    
    action = event.target?.getAttribute 'data-action'

    console.log 'Email: ', @get('email')
    console.log 'Password: ', @get('password')
    console.log 'Action: ', action, @

    modalId = "##{@.elementId} .modal"
    $modal = $(modalId)
    $dmodal = $modal.data('modal')
    
    if action == 'login'
      email = @get 'email'
      password = @get 'password'
      console.log "email: ", email, ", password: ", password
      if email and email.length and password and password.length
        @set 'hidden', true
        App.Auth.signIn
          data:
            email: @get 'email'
            password: @get 'password'
      else
        @$('.modal-alerts').empty()
        $alert = @$('> .alert')
        console.log 'Alert: ', $alert.clone(), @$('.modal-alerts')
        $alert.clone().appendTo(@$('.modal-alerts'))

        @$('.modal-alerts .alert').alert().removeClass('hide')

    if action == 'close'
      console.log 'close', @hidden
      @set('hidden', true)

