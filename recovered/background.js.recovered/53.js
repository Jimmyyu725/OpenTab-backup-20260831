var r = require("./4.js");
var o = require("./12.js");
var i = r.document;
var s = o(i) && o(i.createElement);
module.exports = function (t) {
  if (s) {
    return i.createElement(t);
  } else {
    return {};
  }
};