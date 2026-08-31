var r = require("./220.js");
var i = Object.prototype;
var o = i.hasOwnProperty;
var a = i.toString;
var s = r ? r.toStringTag : undefined;
module.exports = function (t) {
  var e = o.call(t, s);
  var n = t[s];
  try {
    t[s] = undefined;
    var r = true;
  } catch (t) {}
  var i = a.call(t);
  if (r) {
    if (e) {
      t[s] = n;
    } else {
      delete t[s];
    }
  }
  return i;
};