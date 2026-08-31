var i = require("./2334.js");
var s = require("./8064.js");
var r = i.document;
var a = s(r) && s(r.createElement);
module.exports = function (e) {
  if (a) {
    return r.createElement(e);
  } else {
    return {};
  }
};