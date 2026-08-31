var r = require("./14.js");
var i = require("./45.js");
var o = r.document;
var a = i(o) && i(o.createElement);
module.exports = function (t) {
  if (a) {
    return o.createElement(t);
  } else {
    return {};
  }
};