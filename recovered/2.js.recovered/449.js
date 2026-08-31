var n = require("./450.js");
var o = require("./451.js");
var c = require("./413.js");
var i = require("./448.js");
var a = Object.getOwnPropertySymbols ? function (t) {
  var e = [];
  for (; t;) {
    n(e, c(t));
    t = o(t);
  }
  return e;
} : i;
module.exports = a;