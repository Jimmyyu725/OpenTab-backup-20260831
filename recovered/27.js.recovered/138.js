var e = require("./14.js");
var o = require("./45.js");
var i = e.document;
var c = o(i) && o(i.createElement);
module.exports = function (t) {
  if (c) {
    return i.createElement(t);
  } else {
    return {};
  }
};