/**
* Lecture resource
*/
var mongoose = require('mongoose')
  , passport = require('passport')
  , userRole = require('connect-roles');

module.exports = {
  index: function(req, res) {
    console.log('Lecture params: ', req.params);
    console.log('Lecture query: ', req.query);

    var user = req.user || null;
    console.log('Lecture user: ', user);
    if (user && user.email) {
      //var Course = mongoose.model('Course');
      //Course.find
      var ids = req.query.ids;
      if(ids.length == 0) {
        res.json(400, {result:'error'});
        return;
      }

      var Lecture = mongoose.model('Lecture');
      Lecture
        .find()
        .where('_id').in(ids)
        .exec(function(err, lectures) {
          if (err) {
            console.log('lectures not found: ', err);
            res.json(400, {
              result: 'error'
            });
          } else {
            console.log('lectures: ', lectures);
            res.json(200, { 'lectures': lectures});
          }
        })

    } else {
      res.json(400, {
        result: 'error'
      });
    }
  }
};