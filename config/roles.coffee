#connect-roles rules
#for users
#for students
#for professors
#for managers
#for guests
#for admin

module.exports = (app, user) ->
  app.use user

  user.use (req, action) ->
    if req.user.isAuthenticated
      return action == 'user has access to home page'

  user.use 'edit own profile', (req) ->
    userId = if req.user then req.user._id else null
    if userId
      console.log userId, userId.toString(), userId.toString() == req.params.user
    if req.user and userId and userId.toString() == req.params.user
      console.log 'access granted'
      return true
    else
      console.log 'access denied'

  user.use 'admin', (req) ->
    user = req.user
    if user and user.role is 'admin'
      return true


  user.setFailureHandler (req, res, action) ->
    accept = req.headers.accept or ''
    res.status 403

    if ~accept.indexOf 'html'
      res.json
        result: 'error'
        description: 'access denied'
        action: action
    else
      res.send 'Access denied (action: ', action, ')'
