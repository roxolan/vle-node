/**
 * Author: Denis Zatsepin
 * Email: denis@zatsepin.spb.ru
 * Date: 04.08.13
 * Time: 22:50
 */

exports.Lecture = [
  {
    _id: 1,
    title: 'JavaScript introduction',
    number: 1,
    description: 'This lecture introuduce you with most interesting and highly developing programming language - javascript.',
    contentType: 'video',
    lectureContent: '<iframe src="http://www.youtube.com/embed/ya4UHuXNygM" frameborder="0" allowfullscreen></iframe>',
    section_id: 1,
    question_ids: [4],
    note_ids: [1, 2, 3],
    progress: 100
  }, {
    _id: 2,
    title: 'JavaScript syntax',
    number: 2,
    description: 'This lecture is an introduction to javascript\'s syntax',
    contentType: 'video',
    lectureContent: 'http://www.youtube.com/videofile2.wma',
    section_id: 1,
    question_ids: [2],
    note_ids: [4],
    progress: 50
  }, {
    _id: 3,
    title: 'A main javascript objects in a browser',
    number: 3,
    description: 'If you want to develop reach internet applications, you mast to learn browser\'s objects of javascript.',
    contentType: 'video',
    lectureContent: 'http://www.youtube.com/videofile3.wma',
    section_id: 2,
    question_ids: [3],
    progress: 0
  }, {
    _id: 4,
    title: 'Javascript DOM manipulation',
    number: 4,
    contentType: 'video',
    lectureContent: 'http://www.youtube.com/videofile4.wma',
    section_id: 2,
    question_ids: [],
    progress: 0
  }
]
