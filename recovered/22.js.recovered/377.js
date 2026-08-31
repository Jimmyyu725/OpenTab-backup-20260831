var r = require("./220.js");
var i = Object.prototype;
var o = i.hasOwnProperty;
var s = i.toString;
var a = r ? r.toStringTag : undefined;
module.exports = function (t) {
  var e = o.call(t, a);
  var n = t[a];
  try {
    t[a] = undefined;
    var r = true;
  } catch (t) {}
  var i = s.call(t);
  if (r) {
    if (e) {
      t[a] = n;
    } else {
      delete t[a];
    }
  }
  return i;
};