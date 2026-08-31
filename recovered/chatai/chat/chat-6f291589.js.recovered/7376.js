var i = require("./6716.js");
var s = require("./2995.js");
var r = i("keys");
module.exports = function (e) {
  return r[e] ||= s(e);
};