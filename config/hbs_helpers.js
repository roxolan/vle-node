var fs = require('fs');

module.exports = function(config) {
  var helpers;
  helpers = {};
  fs.readdirSync(config.path.helpers).forEach(function(hfile) {
    var helper, hs, name;
    console.log("HFile: ", hfile);
    hs = require(config.path.helpers + "/" + hfile);
    for (name in hs) {
      helper = hs[name];
      if (typeof helpers[name] === 'undefined') {
        helpers[name] = helper;
      } else {
        console.log("Helpers conflict: file=" + hfile + ", helper=" + helper);
      }
    }
    return void 0;
  });
  return helpers;
};
