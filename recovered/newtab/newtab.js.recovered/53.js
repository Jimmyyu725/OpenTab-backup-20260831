var r = require("./4.js");
var i = require("./12.js");
var o = r.document;
var a = i(o) && i(o.createElement);
module.exports = function (t) {
  if (a) {
    return o.createElement(t);
  } else {
    return {};
  }
};