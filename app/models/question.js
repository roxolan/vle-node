/**
* Question model
*/
var mongoose  = require('mongoose')
  , Schema    = mongoose.Schema
  , _         = require('lodash');

var QuestionSchema = new Schema({
  body: { type: String, "default": '' },
  authorName: { type: Number, "default": 0 },
  date: { type: Date, "default": '' },
  type: { type: String, "default": '' },

  answers: [Schema.Types.ObjectId],
  course: { type: Schema.Types.ObjectId},
  lecture: { type: Schema.Types.ObjectId}
});

mongoose.model('Question', QuestionSchema);