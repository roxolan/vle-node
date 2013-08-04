/**
 * Author: Denis Zatsepin
 * Email: denis@zatsepin.spb.ru
 * Date: 04.08.13
 * Time: 3:49
 */

/**
* Lecture model
*/
var mongoose  = require('mongoose')
  , Schema    = mongoose.Schema
  , _         = require('lodash');

var LectureSchema = new Schema({
  _id: Number,
  title: { type: String, "default": '' },
  number: { type: Number, "default": 0 },
  description: { type: String, "default": '' },
  lecture_content: { type: String, "default": '' },
  content_type: { type: String, "default": '' },
  progress: { type: Number, "default": 0 },

  author: { type: Number },
  section_id: { type: Number },
  question_ids: [Number],
  note_ids: [Number]
});

mongoose.model('Lecture', LectureSchema);