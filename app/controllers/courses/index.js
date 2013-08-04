/**
 * Author: Denis Zatsepin
 * Email: denis@zatsepin.spb.ru
 * Date: 04.08.13
 * Time: 4:01
 */


/**
* Courses resource
*/
var mongoose = require('mongoose')
  , passport = require('passport')
  , userRole = require('connect-roles');

module.exports = {
  index: function(req, res) {
    console.log('Params: ', req.params);
    var user = req.user || null;
    console.log('User: ', user);
    if (user && user.email) {
      //var Course = mongoose.model('Course');
      //Course.find
      user.populate('courses_learning_ids', function(err, usr) {
        if (err) {
          console.log('user courses populate error: ', err);
          res.json(400, {
            result: 'error'
          });
        } else {
          var courses = usr.courses_learning_ids;
          console.log('Usr courses: ', courses, usr);
          /*
          for(var i = 0, len = courses.length; i < len; i += 1) {
            console.log('Course _id: ', courses[i]._id);
            courses[i].id = courses[i]._id;
            console.log('Course id: ', courses[i].id);
          }
          */
          res.json(200, { courses: courses });
        }

      });
    } else {
      res.json(400, {
        result: 'error'
      });
    }
  }
};