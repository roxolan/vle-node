/**
* Course model
*/
var mongoose  = require('mongoose')
  , Schema    = mongoose.Schema
  , _         = require('lodash');

var CourseSchema = new Schema({
  _id: Number,
  title: { type: String, "default": '' },
  description: { type: String, "default": '' },
  thumbnail: { type: String, "default": '' },
  rating: { type: Number, "default": 0 },
  my_rating: { type: Number, "default": 0 },
  students: { type: Number, "default": 0 },

  owner:      { type: Number },
  section_ids:   [{ type: Number, ref: 'Section'} ],
  question_ids:  [Number],
  announcement_ids: [Number]
});

mongoose.model('Course', CourseSchema);
