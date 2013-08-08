/**
* Course model
*/

var mongoose  = require('mongoose')
  , Schema    = mongoose.Schema
  , _         = require('lodash');

var CourseSectionSchema = new Schema({
  _id: Number,
  title: { type: String, "default": '' },
  number: { type: Number, "default": 0 },

  course_id: { type: Number, ref: 'Course' },
  lecture_ids: [ { type: Number, ref: 'Lecture' } ]
});

mongoose.model('Section', CourseSectionSchema);