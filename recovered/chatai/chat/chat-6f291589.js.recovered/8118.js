var i = require("./2334.js");
var s = require("./4351.js");
var r = i.String;
var a = i.TypeError;
module.exports = function (e) {
  if (typeof e == "object" || s(e)) {
    return e;
  }
  throw a("Can't set " + r(e) + " as a prototype");
};