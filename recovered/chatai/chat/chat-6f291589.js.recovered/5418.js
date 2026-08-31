var i = require("./2334.js");
var s = require("./4351.js");
var r = require("./9705.js");
var a = i.TypeError;
module.exports = function (e) {
  if (s(e)) {
    return e;
  }
  throw a(r(e) + " is not a function");
};