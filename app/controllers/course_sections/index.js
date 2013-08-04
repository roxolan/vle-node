/**
 * Author: Denis Zatsepin
 * Email: denis@zatsepin.spb.ru
 * Date: 04.08.13
 * Time: 4:01
 */


/**
* Course Sections resource
*/
var mongoose = require('mongoose')
  , passport = require('passport')
  , userRole = require('connect-roles');

module.exports = {
  index: function(req, res) {
    console.log('Params: ', req.params);
    console.log('Query: ', req.query);

    var user = req.user || null;
    console.log('User: ', user);
    if (user && user.email) {
      //var Course = mongoose.model('Course');
      //Course.find
      var ids = req.query.ids;
      if(ids.length == 0) {
        res.json(400, {result:'error'});
        return;
      }

      var Section = mongoose.model('Section');
      Section
        .find()
        .where('_id').in(ids)
        .exec(function(err, sections) {
          if (err) {
            console.log('sections not found: ', err);
            res.json(400, {
              result: 'error'
            });
          } else {
            console.log('sections: ', sections);
            res.json(200, { 'course_sections': sections});
          }
        })
      /*
      user.populate('courses_learning_ids', function(err, usr) {
        if (err) {
          console.log('user courses populate error: ', err);
          res.json(400, {
            result: 'error'
          });
        } else {
          var courses = usr.courses_learning_ids;
          console.log('Usr courses: ', courses, usr);

          for(var i = 0, len = courses.length; i < len; i += 1) {
            console.log('Course _id: ', courses[i]._id);
            var course = courses[i];
            course.populate('section_ids', function(err, usr) {
              res.json(200, { courses: courses });
            });
          }
        }
      });
      */
    } else {
      res.json(400, {
        result: 'error'
      });
    }
  }
};