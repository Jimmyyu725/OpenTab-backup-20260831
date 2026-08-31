var r = require("./4.js");
var i = require("./12.js");
var o = r.document;
var s = i(o) && i(o.createElement);
module.exports = function (t) {
  if (s) {
    return o.createElement(t);
  } else {
    return {};
  }
};