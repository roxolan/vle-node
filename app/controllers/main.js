module.exports = function(req, res, next) {
  console.log('index page');
  res.render('index');
};
